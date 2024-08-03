// src/components/Title.tsx

import React from "react";

interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <div className="flex justify-start items-stretch gap-2">
      <div className=" w-2 rounded-full bg-primary"></div>
      <div className=" text-base font-bold text-myText">{text}</div>
    </div>
  );
};

export default Title;
