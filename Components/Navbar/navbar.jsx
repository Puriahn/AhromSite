'use client'
import { useState,useEffect } from "react";
import Link from "next/link";
import DropDownSandoq from "./DropDownSandoq";
import DropDownBishtar from "./DropDownBishtar";
import ScrollButton from "../Common/ScrollButton";
import SideNav from "./SideNav";
export default function NavBar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mainMenu,setMainMenu]=useState(false)
  
  function handleMainMenu(){
    setMainMenu(prevS=>!prevS)
  }


  const controlNavbar = () => {
    if (typeof window !== 'undefined') { 
      if (window.scrollY > lastScrollY && window.scrollY>570) { // if scroll down hide the navbar
        setShow(false); 
      } else { // if scroll up show the navbar
        setShow(true);  
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY); 
    }
  };

  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);
  return (
    <>
    <SideNav menu={mainMenu}/>
      <nav className={`shadow-md  bg-[#F9FAFB] fixed w-full z-20 transition-transform duration-300 transform ${show ? 'translate-y-0 ' : '-translate-y-full'}`}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://ahrominvest.ir/page/assets/images/logo.png"
              className="h-12 lg:h-16"
              alt="Ahrom Logo"
            />
            <span className="self-center text-xl  whitespace-nowrap dark:text-black lg:text-3xl hidden lg:flex">
              سرمایه گذاری اهرم
            </span>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 ltr:space-x-reverse">
            <button
              type="button"
              className="text-white hover:bg-emerald-950 bg-ahrom font-medium text-lg rounded-2xl px-5 py-2 w-40 items-center justify-center lg:py-4 text-center dark:focus:ring-blue-800 hidden lg:flex"
            >
              <Link href="downloadapp">دانلود اپلیکیشن</Link>
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              onClick={handleMainMenu}
              type="button"
              className={`inline-flex items-center p-2 w-10 h-10 justify-center outline-none text-sm text-gray-500 rounded-lg lg:hidden ${mainMenu?'rotate-90 transition':'transition'} `}
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5 focos:rotate-90 transition"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full lg:flex lg:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className=" text-black text-xl flex-col p-4 md:p-0 mt-4 font-medium hidden lg:flex rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0  ">
              <li>
                <Link
                  href="/"
                  className=" block py-2 px-3 rounded md:hover:text-zinc-600 md:p-0"
                  aria-current="page"
                >
                  خانه
                </Link>
              </li>
              <li>
                <ScrollButton
                  scroll={2150}
                  classes="block py-2 px-3 rounded md:hover:text-zinc-600 md:p-0"
                >
                 ویژگی ها
                </ScrollButton>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 rounded md:hover:text-zinc-600 md:p-0"
                >
                  دریافت اعتبار
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 rounded md:hover:text-zinc-600 md:p-0"
                >
                  درباره ما
                </Link>
              </li>
              <DropDownSandoq />

              <DropDownBishtar />
            </ul>
          </div>
        </div>
      </nav>
      
    </>
  );
}
