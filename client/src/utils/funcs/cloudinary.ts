import axios from "axios";

const cloudinaryUploadUrl = `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDNAME}/upload`;
const unsignedUploadPreset = import.meta.env.VITE_UPLOAD_PRESET;
// const cloudinaryUploadUrl = `https://api.cloudinary.com/v1_1/ddwh3isil/upload`;
// const unsignedUploadPreset = "ir1dciie";
export const uploadToCloudinary = async (file: File | string) => {
  const fd = new FormData();
  unsignedUploadPreset && fd.append("upload_preset", unsignedUploadPreset);
  fd.append("tags", "browser_upload");
  fd.append("file", file);
  try {
    const response = await axios.post(cloudinaryUploadUrl, fd, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data.secure_url;
  } catch (error) {
    console.error("Error uploading the file:", error);
    throw error;
  }
};
