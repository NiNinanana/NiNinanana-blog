"use client";

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { useDeleteTag, useGetTags, usePostTag } from "queries/tag";
import { Tag, TagWithId } from "types/tags";

const TagSettings = () => {
  const { data, refetch } = useGetTags();

  const { handleSubmit, register, setValue } = useForm<Tag>();

  const { mutate: postTagMutate } = usePostTag();
  const { mutate: deleteTagMutate } = useDeleteTag();

  const onSubmit: SubmitHandler<Tag> = (data) => {
    if (!confirm(`태그 이름: ${data.name} / 생성?`)) return;
    postTagMutate(
      { name: data.name },
      {
        onSuccess: () => {
          refetch();
          setValue("name", "");
        },
      },
    );
  };

  const onDelete = (category: TagWithId) => {
    if (!confirm(`태그 이름: ${category.name} / 삭제?`)) return;
    deleteTagMutate(category.id, {
      onSuccess: () => {
        refetch();
      },
    });
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between">
        <h2 className="text-lg">Tag</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex gap-5">
          <span>태그 이름</span>
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

export default TagSettings;
