import React, { ChangeEvent, useRef, useState } from "react";
import { FaImage } from "react-icons/fa6";
import { uploadToCloudinary } from "../../utils/funcs/cloudinary";

interface FileInputProps {
  onFileSelect: (logo: string) => void;
  initialFileUrl?: string;
  label?: string;
  error?: string;
}

const FileInput: React.FC<FileInputProps> = ({
  onFileSelect,
  initialFileUrl,
  label,
  error,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<string | null>(initialFileUrl || null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleFileSelect = async (
    event: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const selectedFile = files[0];
      setLoading(true);
      try {
        const fileUrl = await uploadToCloudinary(selectedFile);
        setFile(fileUrl);
        onFileSelect(fileUrl);
      } catch (error) {
        console.error("Error uploading file:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleClick = (): void => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="w-full ">
      {label && <p className="text-xs text-myText mb-1">{label}</p>}
      <div className="flex items-center justify-center w-full">
        <div
          className={`w-full bg-myGray border-dashed rounded-xl overflow-hidden flex items-center justify-center cursor-pointer border-2 ${
            loading ? "border-gray-400" : "border-gray-300"
          } hover:border-gray-400`}
          onClick={handleClick}
        >
          {loading ? (
            <div className="text-gray-400 text-sm py-20 flex items-center justify-center flex-col">
              <p className="text-base font-medium">Uploading...</p>
            </div>
          ) : file || initialFileUrl ? (
            <img
              src={file || initialFileUrl}
              alt="File Preview"
              className="w-full h-full object-cover"
              width={1000}
              height={1000}
            />
          ) : (
            <div className="text-gray-400 text-sm py-20 flex items-center justify-center flex-col">
              <FaImage className="w-20 h-20 text-[#3E3232] opacity-35" />
              <p className="text-base font-medium">Choose File</p>
              <p>Click to Browse your files</p>
            </div>
          )}
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            multiple={false}
            onChange={handleFileSelect}
            accept="image/*"
          />
        </div>
      </div>
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default FileInput;
