"use client";

import React from "react";
import { useForm } from "react-hook-form";

import { usePostBlog } from "queries/blogs";
import { Blog } from "types/blogs";

const WritePage = () => {
  const { handleSubmit, register } = useForm<Blog>();

  const { mutate } = usePostBlog();

  const onSubmit = (data: Blog) => {
    mutate(data);
  };

  return (
    <div className="p-5">
      <div className="mb-16">WritePage</div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <div className="flex gap-5">
          <span>Title</span>
          <input className="text-black" {...register("title")} />
        </div>
        <div className="flex gap-5">
          <span>Category</span>
          <input className="text-black" {...register("category")} />
        </div>
        <div className="flex gap-5">
          <span>Contents</span>
          <textarea className="text-black" {...register("contents")} />
        </div>
        <button className="border w-[70px]">생성</button>
      </form>
    </div>
  );
};

export default WritePage;
