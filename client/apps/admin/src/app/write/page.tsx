"use client";

import React from "react";
import { useForm } from "react-hook-form";

import { usePostBlog } from "queries/blog";
import { Blog } from "types/blogs";
import Editor from "components/editor";

const WritePage = () => {
  const { handleSubmit, register, setValue } = useForm<Blog>();

  const { mutate } = usePostBlog();

  const onSubmit = (data: Blog) => {
    if (!confirm("생성?")) return;
    mutate(data);
  };

  return (
    <div className="p-5">
      <div className="mb-16">WritePage</div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <div className="flex gap-5">
          <span>Title</span>
          <input className="text-black border" {...register("title")} />
        </div>
        <div className="flex gap-5">
          <span>Category</span>
          <input className="text-black border" {...register("category")} />
        </div>
        <br />
        <span>Contents</span>
        <Editor setValue={setValue} />
        <button className="border w-[70px]">생성</button>
      </form>
    </div>
  );
};

export default WritePage;
