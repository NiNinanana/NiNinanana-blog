import React from "react";
import Image from "next/image";
import Link from "next/link";

interface BubbleProps {
  imageName: string;
  href: string;
  isNeedRadius?: boolean;
}

const Bubble = ({ imageName, isNeedRadius, href }: BubbleProps) => {
  return (
    <Link
      href={href}
      className="rounded-full bg-gradient-to-r from-[#EDEDED] to-white shadow-lg w-28 h-28 p-6 flex items-center justify-center m-4 cursor-pointer hover:bg-none hover:bg-[#DBDBDB] transition-[background-color] duration-300"
    >
      <div className="relative w-full h-full rounded-full">
        <Image
          src={`/images/${imageName}`}
          fill={true}
          alt={imageName.split(".")[0]}
          objectFit="contain"
          style={{ borderRadius: isNeedRadius ? "100%" : "none" }}
        />
      </div>
    </Link>
  );
};

export default Bubble;
