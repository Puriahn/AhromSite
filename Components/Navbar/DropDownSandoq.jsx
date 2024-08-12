"use client";
import Link from "next/link";
import { useState } from "react";

export default function DropDownSandoq() {
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
        <a id="a_menu_more" href="#" className="flex justify-between relative">
                    <p className="p-0 text-slate-900 font-medium">
                        صندوق
                    </p>
                    </a>
        
          <svg
          className={
            isHover
              ? "rotate-180 transition duration-200"
              : "transition duration-200"
          }
            width="18px"
            height="18px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="#566375"
            stroke="#566375"
            strokeWidth="0.00024000000000000003"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#CCCCCC"
              strokeWidth="0.096"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <rect x="0" fill="none" width="24" height="24"></rect>{" "}
              <g>
                {" "}
                <path d="M20 9l-8 8-8-8 1.414-1.414L12 14.172l6.586-6.586"></path>{" "}
              </g>{" "}
            </g>
          </svg>
      </div>

      <div
        onMouseEnter={handleHover}
        onMouseLeave={handleLeft}
        className="invisible absolute z-50 flex w-44 rounded-xl flex-col bg-white py-1 text-gray-800 shadow-xl group-hover:visible"
      >
        <a
          href="/zomorod"
          className="block py-3 text-black transition hover:bg-stone-100 rounded-sm px-4"
        >
          صندوق زمرد
        </a>

        <a
          href="/kahroba"
          className="block py-3 text-black transition hover:bg-stone-100 rounded-sm px-4"
        >
          صندوق کهربا
        </a>

        <a
          href="/yaghot"
          className="block py-3 text-black transition hover:bg-stone-100 rounded-sm px-4"
        >
          صندوق یاقوت
        </a>

        <a
          href="/almas"
          className="block py-3 text-black transition hover:bg-stone-100 rounded-sm px-4"
        >
          صندوق الماس
        </a>

        <a
          href="/amitist"
          className="block py-3 text-black transition hover:bg-stone-100 rounded-sm px-4"
        >
          صندوق آمیتیست
        </a>

        <a
          href="/tala"
          className=" py-3 text-black transition hover:bg-stone-100 rounded-sm px-4 flex"
        >
          <span>صندوق طلا</span>
          <span className="text-white text-xs px-1.5 py-0.5 ms-2 font-medium rounded-xl flex items-center" style={{backgroundColor: "#CEAD44"}}>جدید</span>
        </a>
      </div>
    </li>
  );
}
