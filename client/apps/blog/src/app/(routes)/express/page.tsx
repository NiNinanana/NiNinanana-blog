"use client";

import React from "react";

import { useGetBlogs } from "queries/blogs";
import ArticleCard from "components/card";

const ExpressPage = () => {
  const { data } = useGetBlogs();

  return (
    <div className="flex flex-col gap-10">
      {data?.map((blog) => (
        <ArticleCard
          imageUrl={blog?.imageUrl}
          key={blog.id}
          category={blog.category}
          date={blog.updatedAt?.toDate().toString()}
          summary={blog?.summary}
          title={blog.title}
        />
      ))}
    </div>
  );
};

export default ExpressPage;
