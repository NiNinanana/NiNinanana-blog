"use client";

import React from "react";

import { useGetBlogs } from "queries/blogs";

export default function Home() {
  const { data } = useGetBlogs();

  return (
    <main className="flex min-h-screen flex-col p-5 gap-5">
      {data?.map((blog) => (
        <div key={blog.id} className="border">
          <div>Title: {blog.title}</div>
          <div>Category: {blog.category}</div>
          <div>Tags: {blog.tags?.join(", ")}</div>
          <div>Contents: {blog.contents}</div>
          <div>CreatedAt: {blog.createdAt?.toDate().toString()}</div>
          <div>UpdatedAt: {blog.updatedAt?.toDate().toString()}</div>
        </div>
      ))}
    </main>
  );
}
