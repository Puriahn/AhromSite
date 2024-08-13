'use client'

import { useState } from "react";

import DropDownBishtar from "@/Components/Navbar/DropDownBishtar";
import DropDownSandoq from "@/Components/Navbar/DropDownSandoq";
import SideNav from "@/Components/Navbar/SideNav";

export default function NavEtebar() {
    const [mainMenu, setMainMenu] = useState(false);
    function handleMainMenu() {
        setMainMenu((prevS) => !prevS);
      }
  return (
    <>
    <SideNav menu={mainMenu} setMenu={setMainMenu}/>
    <header
      class=" top-0 z-20 w-full translate-y-0 border border-slate-200 bg-white p-4 sm:p-8 sm:px-12 absolute lg:border-none lg:bg-gray-50"
      id="header"
    >
      <div class="mx-auto flex max-w-5xl items-center justify-between">
        <a href="/" class="z-20 select-none sm:flex sm:items-center sm:gap-4">
          <img
            style={{ width: "50px" }}
            src="https://ahrominvest.ir/page/assets/images/logo.png"
            alt="لوگو سرمایه‌گذاری اهرم"
          />
          <h2
            style={{ fontSize: "20px" }}
            class="hidden sm:block text-slate-900"
          >
            سرمایه‌گذاری اهرم
          </h2>
        </a>
        <div class="lg:hidden flex items-center space-x-4 space-x-reverse">
          <div id="header_chat_btn" style={{ marginTop: "5px" }}>
            <svg
              class="w-6 h-6"
              fill="#000"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M48 256C48 141.1 141.1 48 256 48s208 93.1 208 208V400.1c0 22.1-17.9 40-40 40L313.6 440c-8.3-14.4-23.8-24-41.6-24H240c-26.5 0-48 21.5-48 48s21.5 48 48 48h32c17.8 0 33.3-9.7 41.6-24l110.4 .1c48.6 0 88.1-39.4 88.1-88V256C512 114.6 397.4 0 256 0S0 114.6 0 256v40c0 13.3 10.7 24 24 24s24-10.7 24-24V256zm112-32V336c-17.7 0-32-14.3-32-32V256c0-17.7 14.3-32 32-32zM80 256v48c0 44.2 35.8 80 80 80h16c17.7 0 32-14.3 32-32V208c0-17.7-14.3-32-32-32H160c-44.2 0-80 35.8-80 80zm272-32c17.7 0 32 14.3 32 32v48c0 17.7-14.3 32-32 32V224zm80 32c0-44.2-35.8-80-80-80H336c-17.7 0-32 14.3-32 32V352c0 17.7 14.3 32 32 32h16c44.2 0 80-35.8 80-80V256z"
              />
            </svg>
          </div>
          <button
          onClick={handleMainMenu}
            type="button"
            class="z-20 transition-transform duration-300"
            id="btnToggleMenu"
          >
            <svg
              class="icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="3" y1="10" x2="21" y2="10" />
              <line x1="3" y1="20" x2="21" y2="20" />
            </svg>
          </button>
        </div>
        <nav class="hidden lg:block">
          <ul class="flex gap-x-8 font-medium">
            <li>
              <a href="https://ahrominvest.ir" class="menu-link text-slate-900">
                خانه
              </a>
            </li>

            <li>
              <a
                href="https://ahrominvest.ir/#features"
                class="menu-link text-slate-900"
              >
                ویژگی‌ها
              </a>
            </li>

            <li>
              <a
                href="https://ahrominvest.ir/credit"
                class="menu-link text-slate-900"
              >
                دریافت اعتبار
              </a>
            </li>

            <li>
              <a
                href="https://ahrominvest.ir/#about"
                class="menu-link text-slate-900"
              >
                درباره ما
              </a>
            </li>

            <DropDownSandoq/>
            <DropDownBishtar/>
          </ul>
        </nav>
        <div class="hidden lg:block">
          <a
            href="https://ahrominvest.ir/app"
            class="h-[3.25rem] px-[2rem] font-semibold text-[0.875rem]  rounded-2xl flex w-auto items-center justify-center bg-ahrom text-white"
          >
            دانلود اپلیکیشن
          </a>
        </div>
      </div>
    </header></>
  );
}
