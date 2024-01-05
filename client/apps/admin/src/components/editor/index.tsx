import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import Markdown from "react-markdown";

interface EditorProps {
  contents: string;
  register: UseFormRegisterReturn<any>;
}

const Editor = ({ contents, register }: EditorProps) => {
  return (
    <div className="grid grid-cols-2 gap-5">
      <textarea className="border h-[500px] p-2" {...register} />
      <Markdown className="border h-[500px] pl-8 py-2 overflow-scroll">{contents}</Markdown>
    </div>
  );
};

export default Editor;
