"use client";

import { useGetCategories } from "queries/category";
import React from "react";

const CategorySettings = () => {
  const { data } = useGetCategories();

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-lg">Category</h2>
      <div className="border border-black p-3 grid grid-cols-3 gap-5">
        {data?.map((category) => <div key={category.id}>{category.name}</div>)}
      </div>
    </div>
  );
};

export default CategorySettings;
