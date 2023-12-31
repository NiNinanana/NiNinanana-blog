import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="h-20 shadow-md flex justify-center items-center sticky -top-4 bg-white pt-4 z-10">
      <div className="max-w-[1100px] px-10 w-full flex items-center justify-between">
        <Link href="/" className="text-xl">
          NiNinanana
        </Link>
        <div className="flex gap-7">
          <Link href="/html-css">HTML / CSS</Link>
          <Link href="/js-ts">JS / TS</Link>
          <Link href="/react-next">React / NextJS</Link>
          <Link href="/express">Express</Link>
          <Link href="/cs">CS</Link>
          <Link href="/etc">ETC.</Link>
          <Link href="/me">ME</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
