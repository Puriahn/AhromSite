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
    <li className="group cursor-pointer">
      <div
        onMouseEnter={handleHover}
        onMouseLeave={handleLeft}
        className="flex"
      >
        <a id="a_menu_more" href="#" className="flex justify-between relative">
                    <p className="p-0 text-slate-900 font-medium">
                        بیشتر
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
        <Link
          href="/#consulting"
          className=" block py-3 text-black transition hover:bg-stone-100 rounded-sm px-4"
        >
          درخواست مشاوره{" "}
        </Link>

        <a
          href="/risk-tolerance-test"
          className="block py-3 text-black transition hover:bg-stone-100 rounded-sm px-4"
        >
          آزمون ریسک‌پذیری{" "}
        </a>

        <a
          href="/gift-card"
          className="block py-3 text-black transition hover:bg-stone-100 rounded-sm px-4"
        >
          کارت هدیه{" "}
        </a>

        <Link
          href="/"
          className="block py-3 text-black transition hover:bg-stone-100 rounded-sm px-4"
        >
          وبلاگ{" "}
        </Link>

        <Link
          href="/#faq"
          className="block py-3 text-black transition hover:bg-stone-100 rounded-sm px-4"
        >
          سوالات متداول{" "}
        </Link>

        <a
          href="/assetmix"
          className="block py-3 text-black transition hover:bg-stone-100 rounded-sm px-4"
        >
          ترکیب دارایی‌ها
        </a>
        <a
          href="/banklist"
          className="block py-3 text-black transition hover:bg-stone-100 rounded-sm px-4"
        >
          شماره حساب‌ها{" "}
        </a>
        <a
          href="/terms"
          className="block py-3 text-black transition hover:bg-stone-100 rounded-sm px-4"
        >
          شرایط استفاده{" "}
        </a>
        <a
          href="/privacy"
          className="block py-3 text-black transition hover:bg-stone-100 rounded-sm px-4"
        >
          حریم خصوصی{" "}
        </a>
      </div>
    </li>
  );
}
