"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import DropDownSandoq from "./DropDownSandoq";
import DropDownBishtar from "./DropDownBishtar";
import SideNav from "./SideNav";
import Link from "next/link";
import { useSelector,useDispatch, } from "react-redux";
import { sandoqActions } from "@/lib/slices/Sandoq";
import axios from "axios";

let final=''

export default function NavBar() {
  const names=useSelector(state=>state.Sandoq.sandoq)
  const dispatch=useDispatch()
  const [show, setShow] = useState(true);
  const [hideBefore,setIt]=useState(true)
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mainMenu, setMainMenu] = useState(false);
  const x=!mainMenu?' -translate-y-full':''

  function handleMainMenu() {
    setMainMenu((prevS) => !prevS);
  }

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY && window.scrollY > 600) {
        // if scroll down hide the navbar
        setShow(false);

      }
      else {
        // if scroll up show the navbar
        setShow(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
    if (typeof window !== "undefined") {
    if( window.scrollY>700||window.scrollY<580){
      setIt(true)
    } else{
      setIt(false)
    }}
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
  
  async function Get() {
    await axios
      .get("https://ahrominvest.ir/api/dev/cards")
      .then((res) => {
        /* if (final===''){ for (var i in res.data) {
          const item = { [i]: res.data[i] };
          final = [...final, item];
        }} to make{{},{},{}} to =>[{},{},{}] */
       
        dispatch(sandoqActions.set(res.data))
        
      })
      .catch((error) => {
        throw new Error(error);
      });
  }
  useEffect(() => {
    if (names===null){
      Get()
    }
  }, []);

  
  const path=usePathname()
  if (path.startsWith('/credit')){
    return 
  }
  
  return (
    <>
      <SideNav menu={mainMenu} setMenu={setMainMenu} />
      <header
        className={` w-full py-4 z-20 fixed transition-transform duration-300 transform sm:p-8 sm:px-12 
          ${
            (typeof window !== "undefined" && window.scrollY > 600)
              ? " border-slate-200 border bg-white sm:py-4 fixed"
              : "lg:bg-[#F9FAFB] border lg:border-none bg-white absolute"
          }   
           ${(show&&hideBefore) ? " translate-y-0" :x }`}
      >
        <div className="mx-4 flex max-w-5xl sm:mx-auto items-center justify-between ">
          <Link
            href="/"
            className="z-20 select-none  sm:flex sm:items-center sm:gap-4"
          >
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
          </Link>
          <div className="lg:hidden flex items-center space-x-4 space-x-reverse">
            <button
              onClick={handleMainMenu}
              type="button"
              className="z-20 transition-transform duration-300"
              id="btnToggleMenu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={
                  mainMenu
                    ? "rotate-90 duration-300 transition"
                    : "transtion duration-300"
                }
              >
                <line x1="3" y1="10" x2="21" y2="10" />
                <line x1="3" y1="20" x2="21" y2="20" />
              </svg>
            </button>
          </div>
          <nav className="hidden lg:block ">
            <ul className="flex gap-x-8  font-medium">
              <li>
                <Link
                  href="/"
                  className="menu-link text-slate-900"
                >
                  خانه
                </Link>
              </li>

              <li>
                <Link href="/#features" className="menu-link text-slate-900">
                  ویژگی‌ها
                </Link>
              </li>

              <li>
                <Link
                  href="/credit"
                  className="menu-link text-slate-900"
                >
                  دریافت اعتبار
                </Link>
              </li>

              <li>
                <Link href="/#aboutUs" className="menu-link text-slate-900">
                  درباره ما
                </Link>
              </li>

              <DropDownSandoq />
              <DropDownBishtar />
            </ul>
          </nav>
          <div className="hidden lg:block">
            <Link
              href="/application"
              className="h-[3.25rem] px-[2rem] font-semibold text-[0.875rem]  rounded-2xl flex w-auto items-center justify-center bg-ahrom text-white"
            >
              دانلود اپلیکیشن
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}


/*const [show, setShow] = useState(true);
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
            (typeof window !== "undefined" && window.scrollY > 570)
              ? " border-slate-200 border bg-white sm:py-4 "
              : "lg:bg-[#F9FAFB] border-none bg-white"
          }   
           ${show ? " translate-y-0 " : "-translate-y-full"}`}
      >
        <div className="mx-4 flex max-w-5xl sm:mx-auto items-center justify-between ">*/