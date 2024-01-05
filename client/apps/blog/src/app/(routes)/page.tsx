"use client";

import React from "react";

import ArticleCard from "components/card";
import Bubble from "components/Home/bubble";
import { useGetBlogs } from "queries/blogs";

export default function Home() {
  const { data } = useGetBlogs();

  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-between">
        <Bubble href="/html-css" imageName="html.svg" />
        <Bubble href="/js-ts" imageName="javascript.svg" />
        <Bubble href="/react-next" imageName="react.png" />
        <Bubble href="/express" imageName="express.png" />
        <Bubble href="/cs" imageName="computer-science.png" isNeedRadius={true} />
      </div>
      <div className="flex flex-col gap-10">
        {data?.map((blog) => (
          <ArticleCard
            id={blog.id}
            imageUrl={blog?.imageUrl}
            key={blog.id}
            category={blog.category}
            date={blog.updatedAt?.toDate().toString()}
            summary={blog?.summary}
            title={blog.title}
          />
        ))}
      </div>
    </div>
  );
}
