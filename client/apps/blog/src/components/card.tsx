import Image from "next/image";
import React from "react";
import dayjs from "dayjs";
import Link from "next/link";

interface ArticleCardProps {
  title: string;
  category: string;
  summary: string;
  imageUrl: string;
  date: Date | string;
  id: string;
}

const ArticleCard = ({ title, category, summary, imageUrl, date, id }: ArticleCardProps) => {
  return (
    <Link
      href={`/articles/${id}`}
      className="shadow-md rounded-lg flex p-5 gap-5 h-full cursor-pointer items-center transition-all hover:bg-[#EBEBEB] hover:-translate-y-2"
    >
      <div className="relative min-w-[150px] h-[150px]">
        <Image
          src={imageUrl || "/images/react.png"}
          alt="image"
          fill={true}
          objectFit="cover"
          style={{ borderRadius: "1rem" }}
        />
      </div>
      <div className="flex justify-center flex-col gap-5">
        <h2 className="text-3xl m-0">{title}</h2>
        <div className="flex flex-col gap-1">
          <p className="text-lg">{summary}</p>
          <div className="flex gap-2 items-center">
            <div className="bg-yellow-300 px-2 rounded-lg">{category}</div>
            <p className="text-sm">{dayjs(date).format("YYYY년 MM월 DD일")}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
