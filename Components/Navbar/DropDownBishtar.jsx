"use client";
import Link from "next/link";
import { useState } from "react";

export default function DropDownBishtar() {
  const [isHover, setIsHover] = useState(false);
  function handleHover() {
    setIsHover(true);
  }
  function handleLeft() {
    setIsHover(false);
  }
  return (
    <li className="group relative cursor-pointer">
      <div
        onMouseEnter={handleHover}
        onMouseLeave={handleLeft}
        className="flex"
      >
        <p className="menu-hover">بیشتر</p>
        <span className={isHover? "rotate-180 transition duration-200":"transition duration-200"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </div>

      <div onMouseEnter={handleHover}
        onMouseLeave={handleLeft} className="invisible absolute z-50 flex w-64 rounded-md flex-col bg-white py-1 px-1 text-gray-800 shadow-xl group-hover:visible">
        <Link
          href="/"
          className="my-2 block py-3 text-black transition hover:bg-stone-100 rounded-sm px-2 md:mx-2"
        >
          صندوق زمرد
        </Link>

        <Link
          href="/"
          className="my-2 block py-3 text-black transition hover:bg-stone-100 rounded-sm px-2 md:mx-2"
        >
          صندوق کهربا
        </Link>

        <Link
          href="/"
          className="my-2 block py-3 text-black transition hover:bg-stone-100 rounded-sm px-2 md:mx-2"
        >
          صندوق یاقوت
        </Link>

        <Link
          href="/"
          className="my-2 block py-3 text-black transition hover:bg-stone-100 rounded-sm px-2 md:mx-2"
        >
          صندوق الماس
        </Link>

        <Link
          href="/"
          className="my-2 block py-3 text-black transition hover:bg-stone-100 rounded-sm px-2 md:mx-2"
        >
          صندوق آمیتیست
        </Link>

        <Link
          href="/"
          className="my-2 block py-3 text-black transition hover:bg-stone-100 rounded-sm px-2 md:mx-2"
        >
          صندوق طلا
        </Link>
      </div>
    </li>
  );
}
