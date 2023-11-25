import React, { useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor as DraftEditor } from "react-draft-wysiwyg";
import draftjsToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { UseFormSetValue } from "react-hook-form";

import { Blog } from "types/blogs";

interface EditorProps {
  setValue: UseFormSetValue<Blog>;
}

const Editor = ({ setValue }: EditorProps) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [htmlString, setHtmlString] = useState("");

  const updateTextDescription = async (state: EditorState) => {
    await setEditorState(state);
    const html = draftjsToHtml(convertToRaw(editorState.getCurrentContent()));
    setHtmlString(html);
    setValue("contents", html);
  };

  return (
    <>
      <DraftEditor
        editorState={editorState}
        onEditorStateChange={updateTextDescription}
        localization={{ locale: "ko" }}
        toolbar={{
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: false },
        }}
        placeholder="입력!"
        editorClassName="!h-[400px] w-full border border-black p-[5px]"
      />
      <div className="grid grid-cols-2 gap-5">
        <div>
          <p>미리보기</p>
          <div className="border min-h-[50px]" dangerouslySetInnerHTML={{ __html: htmlString }} />
        </div>
        <div>
          <p>HTML로 보기</p>
          <div className="border min-h-[50px]">{htmlString}</div>
        </div>
      </div>
    </>
  );
};

export default Editor;
