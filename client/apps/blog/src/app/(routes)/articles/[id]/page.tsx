"use client";

import React from "react";

import Markdown from "react-markdown";

import { useGetBlog } from "queries/blogs";

interface ArticlePageProps {
  params: { id: string };
}

const ArticlePage = ({ params }: ArticlePageProps) => {
  const { data } = useGetBlog(params.id);

  return (
    <div className="flex flex-col items-center gap-20 py-10">
      <h1 className="text-4xl font-bold">{data?.title}</h1>
      <div className="flex w-full justify-between items-center">
        <span className="py-1 px-5 bg-indigo-100 rounded-lg text-lg">{data?.category}</span>
        <span>{data?.tags?.join(", ")}</span>
      </div>
      <div className="w-full">
        <Markdown>{data?.contents}</Markdown>
      </div>
    </div>
  );
};

export default ArticlePage;
