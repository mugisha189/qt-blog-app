/* eslint-disable @typescript-eslint/no-explicit-any */
import { parseDOM } from "htmlparser2";
import { DomUtils } from "htmlparser2";
import { uploadToCloudinary } from "./cloudinary";

export async function processHTMLContent(content: string): Promise<string> {
  const dom = parseDOM(content);
  const nodes = DomUtils.findAll((elem: any) => {
    return (
      (elem.name === "img" || elem.name === "video") &&
      elem.attribs &&
      elem.attribs.src &&
      elem.attribs.src.startsWith("data:")
    );
  }, dom);

  for (const node of nodes) {
    const dataUrl = node.attribs.src;
    try {
      const cloudinaryUrl = await uploadToCloudinary(dataUrl);
      node.attribs.src = cloudinaryUrl;
    } catch (error) {
      console.error("Error uploading to Cloudinary:", error);
    }
  }

  return DomUtils.getOuterHTML(dom);
}
