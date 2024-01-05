"use client";

import React from "react";
import { useForm } from "react-hook-form";

import { usePostBlog } from "queries/blog";
import { Blog } from "types/blogs";
import Editor from "components/editor";
import { useRouter } from "next/navigation";

const WritePage = () => {
  const { push } = useRouter();
  const { handleSubmit, register, watch } = useForm<Blog>();
  const contents = watch().contents;

  const { mutate } = usePostBlog();

  const onSubmit = (data: Blog) => {
    if (!confirm("생성?")) return;
    mutate(data, {
      onSuccess: () => {
        alert("완료");
        push("/");
      },
      onError: (err) => {
        alert("error 발생");
        console.error(err);
      },
    });
  };

  return (
    <div>
      <div className="mb-16">WritePage</div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <div className="flex items-center gap-5">
          <span>Title</span>
          <input className="text-black border py-2 pl-2" {...(register("title"), { required: true })} />
        </div>
        <div className="flex items-center gap-5">
          <span>Category</span>
          <input className="text-black border py-2 pl-2" {...(register("category"), { required: true })} />
        </div>
        <br />
        <span>Contents</span>
        <Editor register={register("contents")} contents={contents} />
        <button className="border w-[70px]">생성</button>
      </form>
    </div>
  );
};

export default WritePage;
