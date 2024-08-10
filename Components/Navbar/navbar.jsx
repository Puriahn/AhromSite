"use client";
import { useState, useEffect } from "react";
import DropDownSandoq from "./DropDownSandoq";
import DropDownBishtar from "./DropDownBishtar";
import SideNav from "./SideNav";
export default function NavBar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mainMenu, setMainMenu] = useState(false);

  function handleMainMenu() {
    setMainMenu((prevS) => !prevS);
  }

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY && window.scrollY > 570) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);
  return (
    <>
      <SideNav menu={mainMenu} />
      <header
        className={` w-full py-4 z-20   fixed transition-transform duration-300 transform sm:p-8 sm:px-12  border 
          ${
          window.scrollY > 570 ? " border-slate-200 border bg-white sm:py-4 ":"lg:bg-[#F9FAFB] border-none bg-white"}   
           ${
          show ? " translate-y-0 " : "-translate-y-full"}`}
      >
        <div className="mx-4 flex max-w-5xl sm:mx-auto items-center justify-between ">
          <a href="/" className="z-20 select-none  sm:flex sm:items-center sm:gap-4">
            <img
              style={{ width: "50px" }}
              src="https://ahrominvest.ir/page/assets/images/logo.png"
              alt="لوگو سرمایه‌گذاری اهرم"
            />
            <h2
              style={{ fontSize: "20px" }}
              className="hidden sm:block text-slate-900"
            >
              سرمایه‌گذاری اهرم
            </h2>
          </a>
          <div className="lg:hidden flex items-center space-x-4 space-x-reverse">
            <button
            onClick={handleMainMenu}
              type="button"
              className="z-20 transition-transform duration-300"
              id="btnToggleMenu"
            >
              <svg
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={mainMenu?'rotate-90 duration-300 transition':'transtion duration-300'}
              >
                <line x1="3" y1="10" x2="21" y2="10" />
                <line x1="3" y1="20" x2="21" y2="20" />
              </svg>
            </button>
          </div>
          <nav className="hidden lg:block ">
            <ul className="flex gap-x-8  font-medium">
              <li>
                <a
                  href="https://ahrominvest.ir"
                  className="menu-link text-slate-900"
                >
                  خانه
                </a>
              </li>

              <li>
                <a href="#features" className="menu-link text-slate-900">
                  ویژگی‌ها
                </a>
              </li>

              <li>
                <a
                  href="https://ahrominvest.ir/credit"
                  className="menu-link text-slate-900"
                >
                  دریافت اعتبار
                </a>
              </li>

              <li>
                <a href="#aboutUs" className="menu-link text-slate-900">
                  درباره ما
                </a>
              </li>

              <DropDownSandoq/>
              <DropDownBishtar/>
              
            </ul>
          </nav>
          <div className="hidden lg:block">
            <a
              href="https://ahrominvest.ir/app"
              className="h-[3.25rem] px-[2rem] font-semibold text-[0.875rem]  rounded-2xl flex w-auto items-center justify-center bg-ahrom text-white"
            >
              دانلود اپلیکیشن
            </a>
          </div>
        </div>
        
      </header>
    </>
  );
}
