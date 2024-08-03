/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import InputField from "../../components/core/input";
import TextEditor from "../../components/core/text-editor";
import Button from "../../components/core/button";
import FileInput from "../../components/core/file-input";
import { createPost, updatePost } from "../../utils/funcs/post";
import { useUser } from "../../hooks/useUser";
import { MdArrowBackIos, MdPublish } from "react-icons/md";
import useGet from "../../hooks/useGet";
import { Post } from "../../utils/types/post";

const AddEditBlog = () => {
  const { id } = useParams<{ id?: string }>(); // Get post ID from route parameters
  const navigate = useNavigate();
  const { user } = useUser();
  const [title, setTitle] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [editorData, setEditorData] = useState("");
  const [image, setImage] = useState<string | undefined>(undefined);
  const [errors, setErrors] = useState({
    title: "",
    shortDescription: "",
    editorData: "",
    image: "",
  });
  const [loading, setLoading] = useState(false);

  const isEditing = !!id;

  // Fetch post data if editing
  const { data: post } = useGet<Post>(`/post/${id}`);

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setShortDescription(post.shortDescription);
      setEditorData(post.content);
      setImage(post.image);
    }
  }, [post]);

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

  const handlePublish = async () => {
    if (!validate()) return;

    setLoading(true);
    try {
      const postData = {
        title,
        shortDescription,
        content: editorData,
        image,
        authorId: user?.id,
      };

      if (isEditing) {
        await updatePost(id, postData);
        toast.success("Post updated successfully");
      } else {
        await createPost(postData as any);
        toast.success("Post created successfully");
      }

      navigate("/blogs");
    } catch (error) {
      console.error(error);
      toast.error("Failed to save post");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setTitle("");
    setShortDescription("");
    setEditorData("");
    setImage(undefined);
    setErrors({
      title: "",
      shortDescription: "",
      editorData: "",
      image: "",
    });
  };

  return (
    <div className="px-[7vw] space-y-2 py-24">
      <div className="flex items-center gap-2  mb-5">
        <button onClick={() => window.history.back()}>
          <MdArrowBackIos />
        </button>
        <p className="text-base font-semibold text-primary">
          {isEditing ? "Edit Post" : "Add Post"}
        </p>
      </div>
      <div className="flex flex-col-reverse md:flex-row space-x-8">
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
              onChange={(data) => setEditorData(data)}
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
              <MdPublish className="w-4 h-4" />{" "}
              <p>{isEditing ? "Update" : "Publish"}</p>
            </Button>
            <Button variant="secondary" onClick={handleReset}>
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
            initialFileUrl={image as any}
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
              <MdPublish className="w-4 h-4" />{" "}
              <p>{isEditing ? "Update" : "Publish"}</p>
            </Button>
            <Button variant="secondary" onClick={handleReset}>
              Reset
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEditBlog;
