/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { MdPublish } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import InputField from "../../components/core/input";
import TextEditor from "../../components/core/text-editor";
import Button from "../../components/core/button";
import FileInput from "../../components/core/file-input";
import { createPost } from "../../utils/funcs/post";
import { useUser } from "../../hooks/useUser";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [editorData, setEditorData] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [errors, setErrors] = useState({
    title: "",
    shortDescription: "",
    editorData: "",
    image: "",
  });
  const [loading, setLoading] = useState(false);
  const {user} = useUser()

  const validate = () => {
    const newErrors = {
      title: title.trim() === "" ? "Title is required" : "",
      shortDescription:
        shortDescription.trim() === "" ? "Short Description is required" : "",
      editorData: editorData.trim() === "" ? "Editor Data is required" : "",
      image: image === null ? "File is required" : "",
    };

    setErrors(newErrors);

    return Object.values(newErrors).every((error) => error === "");
  };

  const navigate = useNavigate();

  const handlePublish = async () => {
    if (!validate()) return;

    setLoading(true);
    try {
      const postData = {
        title,
        shortDescription,
        content: editorData,
        image,
        authorId:user?.id
      };
      console.log(postData);
      await createPost(postData as any);
      navigate("/blogs");
    } catch (error) {
      console.error(error);
      toast.error("Failed to publish post");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-[7vw] space-y-2 py-24">
      <div className="flex items-center justify-between mb-5">
        <p className="text-base font-semibold text-primary">Add Post</p>
      </div>
      <div className="flex flex-col-reverse  md:flex-row  space-x-8">
        <div className="flex-grow space-y-4">
          <InputField
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter the post title"
            error={errors.title}
          />
          <InputField
            label="Short Description"
            value={shortDescription}
            type="textarea"
            onChange={(e) => setShortDescription(e.target.value)}
            placeholder="Enter a short description for the post"
            error={errors.shortDescription}
          />
          <div className="w-full">
            <TextEditor
              value={editorData}
              onChange={(data) => {
                setEditorData(data);
              }}
            />
            {errors.editorData && (
              <p className="text-red-500 text-xs">{errors.editorData}</p>
            )}
          </div>
          <div className="flex md:hidden space-x-4">
            <Button
              variant="primary"
              className="text-sm flex items-center gap-2"
              loading={loading}
              onClick={handlePublish}
            >
              <MdPublish className="w-4 h-4" /> <p>Publish</p>
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                setTitle("");
                setShortDescription("");
                setEditorData("");
                setImage(null);
                setErrors({
                  title: "",
                  shortDescription: "",
                  editorData: "",
                  image: "",
                });
              }}
            >
              Reset
            </Button>
          </div>
        </div>
        <div className="w-full md:w-[30%] space-y-4">
          <FileInput
            onFileSelect={(selectedFile) => {
              setImage(selectedFile);
              if (selectedFile) setErrors((prev) => ({ ...prev, image: "" }));
            }}
            label="Upload Image"
            error={errors.image}
          />
          <div className="hidden md:flex space-x-4">
            <Button
              variant="primary"
              className="text-sm flex items-center gap-2"
              loading={loading}
              onClick={handlePublish}
            >
              <MdPublish className="w-4 h-4" /> <p>Publish</p>
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                setTitle("");
                setShortDescription("");
                setEditorData("");
                setImage(null);
                setErrors({
                  title: "",
                  shortDescription: "",
                  editorData: "",
                  image: "",
                });
              }}
            >
              Reset
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
