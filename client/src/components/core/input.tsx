import React from "react";

interface InputFieldProps {
  type?: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  placeholder?: string;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  label?: string;
  error?: string ;
}

const InputField: React.FC<InputFieldProps> = ({
  type = "text",
  value,
  onChange,
  placeholder = "",
  prefixIcon,
  suffixIcon,
  label,
  error,
}) => {
  return (
    <div className="flex flex-col text-sm">
      {label && <label className="mb-1 text-myText text-xs">{label}</label>}
      <div
        className={`flex items-center border ${
          error ? "border-red-500" : "border-gray-300"
        } rounded-xl p-2 bg-myGray`}
      >
        {prefixIcon && <div className="pl-2 rounded-l">{prefixIcon}</div>}
        {type === "textarea" ? (
          <textarea
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="flex-1 p outline-none bg-transparent resize-none"
          />
        ) : (
          <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="flex-1 p outline-none bg-transparent"
          />
        )}
        {suffixIcon && <div className="pr-2">{suffixIcon}</div>}
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default InputField;
