"use client";

import React from "react";

import { useGetBlogs } from "queries/blogs";

const HtmlCssPage = () => {
  const { data } = useGetBlogs();

  return (
    <div className="flex flex-col gap-5">
      {data?.map((blog) => (
        <div key={blog.id} className="border border-black">
          <div>Title: {blog?.title}</div>
          <div>Category: {blog?.category}</div>
          <div>Tags: {blog?.tags?.join(", ")}</div>
          <div>
            Contents: <div dangerouslySetInnerHTML={{ __html: blog?.contents }} />
          </div>
          <div>CreatedAt: {blog?.createdAt?.toDate().toString()}</div>
          <div>UpdatedAt: {blog?.updatedAt?.toDate().toString()}</div>
        </div>
      ))}
    </div>
  );
};

export default HtmlCssPage;
