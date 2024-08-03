/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import "ckeditor5/ckeditor5.css";

interface TextEditorProps {
  value: string;
  onChange: (data: string) => void;
}

const TextEditor: React.FC<TextEditorProps> = ({ value, onChange }) => {
  const [editorModules, setEditorModules] = useState<any>({});
  const [loading, setLoading] = useState(true);

  const REDUCED_MATERIAL_COLORS = [
    { label: "Red 50", color: "#ffebee" },
    { label: "Purple 50", color: "#f3e5f5" },
    { label: "Indigo 50", color: "#e8eaf6" },
    { label: "Blue 50", color: "#e3f2fd" },
    { label: "Cyan 50", color: "#e0f7fa" },
    { label: "Teal 50", color: "#e0f2f1" },
    { label: "Light green 50", color: "#f1f8e9" },
    { label: "Lime 50", color: "#f9fbe7" },
    { label: "Amber 50", color: "#fff8e1" },
    { label: "Orange 50", color: "#fff3e0" },
    { label: "Grey 50", color: "#fafafa" },
    { label: "Blue grey 50", color: "#eceff1" },
    { label: "Red 100", color: "#ffcdd2" },
    { label: "Purple 100", color: "#e1bee7" },
    { label: "Indigo 100", color: "#c5cae9" },
    { label: "Blue 100", color: "#bbdefb" },
    { label: "Cyan 100", color: "#b2ebf2" },
    { label: "Teal 100", color: "#b2dfdb" },
    { label: "Light green 100", color: "#dcedc8" },
    { label: "Lime 100", color: "#f0f4c3" },
    { label: "Amber 100", color: "#ffecb3" },
    { label: "Orange 100", color: "#ffe0b2" },
    { label: "Grey 100", color: "#f5f5f5" },
    { label: "Blue grey 100", color: "#cfd8dc" },
  ];

  useEffect(() => {
    const loadModules = async () => {
      const CKEditorModules = await import("ckeditor5");
      const CKEditor = await import("@ckeditor/ckeditor5-react");
      setEditorModules({
        CKEditor: CKEditor.CKEditor,
        ClassicEditor: CKEditorModules.ClassicEditor,
        Alignment: CKEditorModules.Alignment,
        Autoformat: CKEditorModules.Autoformat,
        Bold: CKEditorModules.Bold,
        CKBox: CKEditorModules.CKBox,
        Code: CKEditorModules.Code,
        Italic: CKEditorModules.Italic,
        Strikethrough: CKEditorModules.Strikethrough,
        Subscript: CKEditorModules.Subscript,
        Superscript: CKEditorModules.Superscript,
        Underline: CKEditorModules.Underline,
        BlockQuote: CKEditorModules.BlockQuote,
        CloudServices: CKEditorModules.CloudServices,
        CodeBlock: CKEditorModules.CodeBlock,
        Essentials: CKEditorModules.Essentials,
        FindAndReplace: CKEditorModules.FindAndReplace,
        Font: CKEditorModules.Font,
        Heading: CKEditorModules.Heading,
        Highlight: CKEditorModules.Highlight,
        HorizontalLine: CKEditorModules.HorizontalLine,
        GeneralHtmlSupport: CKEditorModules.GeneralHtmlSupport,
        AutoImage: CKEditorModules.AutoImage,
        Image: CKEditorModules.Image,
        ImageCaption: CKEditorModules.ImageCaption,
        ImageInsert: CKEditorModules.ImageInsert,
        ImageResize: CKEditorModules.ImageResize,
        ImageStyle: CKEditorModules.ImageStyle,
        ImageToolbar: CKEditorModules.ImageToolbar,
        ImageUpload: CKEditorModules.ImageUpload,
        Base64UploadAdapter: CKEditorModules.Base64UploadAdapter,
        PictureEditing: CKEditorModules.PictureEditing,
        Indent: CKEditorModules.Indent,
        IndentBlock: CKEditorModules.IndentBlock,
        TextPartLanguage: CKEditorModules.TextPartLanguage,
        AutoLink: CKEditorModules.AutoLink,
        Link: CKEditorModules.Link,
        LinkImage: CKEditorModules.LinkImage,
        List: CKEditorModules.List,
        ListProperties: CKEditorModules.ListProperties,
        TodoList: CKEditorModules.TodoList,
        MediaEmbed: CKEditorModules.MediaEmbed,
        Mention: CKEditorModules.Mention,
        PageBreak: CKEditorModules.PageBreak,
        Paragraph: CKEditorModules.Paragraph,
        PasteFromOffice: CKEditorModules.PasteFromOffice,
        RemoveFormat: CKEditorModules.RemoveFormat,
        SpecialCharacters: CKEditorModules.SpecialCharacters,
        SpecialCharactersEssentials:
          CKEditorModules.SpecialCharactersEssentials,
        Style: CKEditorModules.Style,
        Table: CKEditorModules.Table,
        TableCaption: CKEditorModules.TableCaption,
        TableCellProperties: CKEditorModules.TableCellProperties,
        TableColumnResize: CKEditorModules.TableColumnResize,
        TableProperties: CKEditorModules.TableProperties,
        TableToolbar: CKEditorModules.TableToolbar,
        TextTransformation: CKEditorModules.TextTransformation,
        WordCount: CKEditorModules.WordCount,
        Undo: CKEditorModules.Undo,
      });
      setLoading(false);
    };

    loadModules();
  }, []);

  if (loading) {
    return <div className="animate-pulse h-10 bg-gray-300 w-full"></div>;
  }

  const { CKEditor, ClassicEditor } = editorModules;

  return (
    <div>
      <CKEditor
        editor={ClassicEditor}
        config={{
          toolbar: {
            shouldNotGroupWhenFull: true,
            items: [
              // --- Document-wide tools ----------------------------------------------------------------------
              "undo",
              "redo",
              "|",
              "importWord",
              "exportWord",
              "exportPdf",
              "|",
              "formatPainter",
              "caseChange",
              "findAndReplace",
              "selectAll",
              "wproofreader",
              "|",
              "insertTemplate",
              "tableOfContents",
              "|",

              // --- "Insertables" ----------------------------------------------------------------------------

              "link",
              "insertImage",
              "ckbox",
              "insertTable",
              "blockQuote",
              "mediaEmbed",
              "codeBlock",
              "pageBreak",
              "horizontalLine",
              "specialCharacters",
              "-",

              // --- Block-level formatting -------------------------------------------------------------------
              "heading",
              "style",
              "|",

              // --- Basic styles, font and inline formatting -------------------------------------------------------
              "bold",
              "italic",
              "underline",
              "strikethrough",
              {
                label: "Basic styles",
                icon: "text",
                items: [
                  "fontSize",
                  "fontFamily",
                  "fontColor",
                  "fontBackgroundColor",
                  "highlight",
                  "superscript",
                  "subscript",
                  "code",
                  "|",
                  "textPartLanguage",
                  "|",
                ],
              },
              "removeFormat",
              "|",

              // --- Text alignment ---------------------------------------------------------------------------
              "alignment",
              "|",

              // --- Lists and indentation --------------------------------------------------------------------
              "bulletedList",
              "numberedList",
              "multilevelList",
              "todoList",
              "|",
              "outdent",
              "indent",
            ],
          },
          plugins: [
            editorModules.Alignment,
            editorModules.Autoformat,
            editorModules.AutoImage,
            editorModules.AutoLink,
            editorModules.BlockQuote,
            editorModules.Bold,
            editorModules.CloudServices,
            editorModules.Code,
            editorModules.CodeBlock,
            editorModules.Essentials,
            editorModules.FindAndReplace,
            editorModules.Font,
            editorModules.GeneralHtmlSupport,
            editorModules.Heading,
            editorModules.Highlight,
            editorModules.HorizontalLine,
            editorModules.Image,
            editorModules.ImageCaption,
            editorModules.ImageInsert,
            editorModules.ImageResize,
            editorModules.ImageStyle,
            editorModules.ImageToolbar,
            editorModules.ImageUpload,
            editorModules.Base64UploadAdapter,
            editorModules.Indent,
            editorModules.IndentBlock,
            editorModules.Italic,
            editorModules.Link,
            editorModules.LinkImage,
            editorModules.List,
            editorModules.ListProperties,
            editorModules.MediaEmbed,
            editorModules.Mention,
            editorModules.PageBreak,
            editorModules.Paragraph,
            editorModules.PasteFromOffice,
            editorModules.PictureEditing,
            editorModules.RemoveFormat,
            editorModules.SpecialCharacters,
            editorModules.SpecialCharactersEssentials,
            editorModules.Strikethrough,
            editorModules.Style,
            editorModules.Subscript,
            editorModules.Superscript,
            editorModules.Table,
            editorModules.TableCaption,
            editorModules.TableCellProperties,
            editorModules.TableColumnResize,
            editorModules.TableProperties,
            editorModules.TableToolbar,
            editorModules.TextPartLanguage,
            editorModules.TextTransformation,
            editorModules.TodoList,
            editorModules.Underline,
            editorModules.WordCount,
          ],
          fontFamily: {
            supportAllValues: true,
          },
          fontSize: {
            options: [
              10,
              12,
              14,
              "default",
              18,
              20,
              22,
              24,
              28,
              36,
              40,
              48,
              60,
            ],
            supportAllValues: true,
          },
          fontColor: {
            columns: 12,
            colors: REDUCED_MATERIAL_COLORS,
          },
          fontBackgroundColor: {
            columns: 12,
            colors: REDUCED_MATERIAL_COLORS,
          },
          heading: {
            options: [
              {
                model: "paragraph",
                title: "Paragraph",
                class: "ck-heading_paragraph",
              },
              {
                model: "heading1",
                view: "h1",
                title: "Heading 1",
                class: "ck-heading_heading1",
              },
              {
                model: "heading2",
                view: "h2",
                title: "Heading 2",
                class: "ck-heading_heading2",
              },
              {
                model: "heading3",
                view: "h3",
                title: "Heading 3",
                class: "ck-heading_heading3",
              },
              {
                model: "heading4",
                view: "h4",
                title: "Heading 4",
                class: "ck-heading_heading4",
              },
              {
                model: "heading5",
                view: "h5",
                title: "Heading 5",
                class: "ck-heading_heading5",
              },
              {
                model: "heading6",
                view: "h6",
                title: "Heading 6",
                class: "ck-heading_heading6",
              },
            ],
          },
        }}
        data={value}
        onChange={(event: any, editor: any) =>
          onChange(editor.getData())
        }
      />
    </div>
  );
};

export default TextEditor;
