import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="h-20 bg-pink-200 shadow-md flex justify-center items-center sticky -top-4 bg-white pt-4 z-10">
      <div className="text-white text-xl font-bold max-w-[1100px] px-10 w-full flex items-center justify-between">
        Admin
        <div className="flex gap-5">
          <Link href="/">목록</Link>
          <Link href="/write">작성</Link>
          <Link href="/settings">설정</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
