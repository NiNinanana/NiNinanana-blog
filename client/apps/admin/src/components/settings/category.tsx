"use client";

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { useDeleteCategory, useGetCategories, usePostCategory } from "queries/category";
import { Category, CategoryWithId } from "types/categories";

const CategorySettings = () => {
  const { data, refetch } = useGetCategories();

  const { handleSubmit, register, setValue } = useForm<Category>();

  const { mutate: postCategoryMutate } = usePostCategory();
  const { mutate: deleteCategoryMutate } = useDeleteCategory();

  const onSubmit: SubmitHandler<Category> = (data) => {
    if (!confirm(`카테고리 이름: ${data.name} / 생성?`)) return;
    postCategoryMutate(
      { name: data.name },
      {
        onSuccess: () => {
          refetch();
          setValue("name", "");
        },
      },
    );
  };

  const onDelete = (category: CategoryWithId) => {
    if (!confirm(`카테고리 이름: ${category.name} / 삭제?`)) return;
    deleteCategoryMutate(category.id, {
      onSuccess: () => {
        refetch();
      },
    });
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
        {data?.map((category) => (
          <div className="flex gap-5" key={category.id}>
            <span>{category.name}</span>
            <button className="border px-2" onClick={() => onDelete(category)}>
              삭제
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySettings;
