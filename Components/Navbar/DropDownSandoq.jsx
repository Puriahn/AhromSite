"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Spinner from "../Common/Spinner";
let s=1
let final = "";
export default function DropDownSandoq() {
  const [sandoqha, setSandoqha] = useState([]);
  const names = useSelector((state) => state.Sandoq.sandoq);
  const [isHover, setIsHover] = useState(false);
  function handleHover() {
    setIsHover(true);
  }
  function handleLeft() {
    setIsHover(false);
  }
  useEffect(()=>{setSandoqha(names||[])},[names])
  return (
    <li className="group relative cursor-pointer">
      <div
        onMouseEnter={handleHover}
        onMouseLeave={handleLeft}
        className="flex"
      >
        <Link
          id="a_menu_more"
          href="#"
          className="flex justify-between relative"
        >
          <p className="p-0 text-slate-900 font-medium">صندوق</p>
        </Link>

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
        className="invisible absolute z-50 flex w-44 rounded-xl flex-col bg-white py-2 text-gray-800 shadow-xl group-hover:visible"
      >
        {names !== null ?Object.entries(sandoqha).map(([key, eachItem], index) => {
          return (
            <Link 
              key={key}  
              href={`/${key}`} 
              className="block py-3 text-black transition hover:bg-stone-100 rounded-sm px-4"
            >
              {key === "tala" && (
                  <div className='flex'>
                    <span>صندوق طلا</span>
                    <span
                      className="text-white text-xs px-1.5 py-0.5 ms-2 font-medium rounded-xl flex items-center w-fit"
                      style={{ backgroundColor: "#CEAD44" }}
                    >
                      جدید
                    </span>
                  </div>
                )}
                {key!=='tala'&&<div>صندوق <span>{eachItem.name_fa}</span></div>}
            </Link>
          );
        })
          :<div className="h-64 pt-24"><Spinner/></div>}
      </div>
    </li>
  );
}
