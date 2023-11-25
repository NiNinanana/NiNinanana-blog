"use client";

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { useGetCategories, usePostCategory } from "queries/category";
import { Category } from "types/categories";

const CategorySettings = () => {
  const { data, refetch } = useGetCategories();

  const { handleSubmit, register, setValue } = useForm<Category>();

  const { mutate } = usePostCategory();

  const onSubmit: SubmitHandler<Category> = (data) => {
    if (!confirm(`카테고리 이름: ${data.name} / 생성?`)) return;
    mutate(
      { name: data.name },
      {
        onSuccess: () => {
          refetch();
          setValue("name", "");
        },
      },
    );
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between">
        <h2 className="text-lg">Category</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex gap-5">
          <span>카테고리 이름</span>
          <input className="border" {...register("name")} />
          <button className="border px-2">생성</button>
        </form>
      </div>
      <div className="border border-black p-3 grid grid-cols-3 gap-5">
        {data?.map((category) => <div key={category.id}>{category.name}</div>)}
      </div>
    </div>
  );
};

export default CategorySettings;
