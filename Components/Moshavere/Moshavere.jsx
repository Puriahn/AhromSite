'use client'

import { useState } from "react";
import InputMablaq from "./InputMablaq";
import Link from "next/link";

export default function Moshavere() {
  const [isHuzuri,setIsHuzuri]=useState(true)

  function handleHuzuri(){
    setIsHuzuri(true)
  }
  function handleTelefoni(){
    setIsHuzuri(false)
  }
  return (
    <>
      <div className="px-6 pt-20 mb-10 sm:px-8 lg:pt-24" id="consulting">
        <div className="pb-12 text-center">
          <h2 className="pb-4 text-2xl font-bold text-slate-900 md:text-3xl">
            درخواست مشاوره
          </h2>
          <p className="text-slate-900">
            اگر برای سرمایه‌گذاری نیاز به مشاوره دارید کافیست فرم زیر را تکمیل
            کنید.
          </p>
        </div>
        <div className="flex justify-end max-w-5xl mx-auto space-x-3 space-x-reverse mb-5">
          <button
          onClick={handleHuzuri}
            id="faceToFaceConsultationButton"
            className="flex w-full items-center text-[0.875rem] font-bold justify-center bg-ahrom text-white shadow-sm hover:opacity-90  sm:w-auto h-[3.25rem] rounded-2xl px-[2rem]"
          >
            مشاوره حضوری
          </button>
          <button
          onClick={handleTelefoni}
            id="consultationButton"
            className="h-[3.25rem] rounded-2xl text-[0.875rem] font-bold px-[2rem] flex w-full items-center justify-center border-2 border-slate-400 bg-white text-slate-700 hover:bg-slate-400 hover:text-white sm:w-auto"
          >
            مشاوره تلفنی
          </button>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-12 gap-4 lg:gap-6">
          <div className="col-span-12 flex flex-col justify-between space-y-16 rounded-2xl bg-gray-100 p-6 shadow sm:col-span-6 sm:space-y-0 lg:col-span-4">
            <div>
              <h3 className="pb-2 text-2xl font-bold text-slate-800">
                اطلاعات تماس
              </h3>
              <p className="text-slate-900 text-md">
                از روش‌های زیر می‌توانید با ما در ارتباط باشید.
              </p>
              <p className="text-slate-900 mt-2 text-md">
                همه روزه از ساعت ۹ الی ۱۷ پاسخگوی شما هستیم.
              </p>
            </div>
            <div className="space-y-4 font-sans">
              <div className="flex items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                  <line x1="12" y1="18" x2="12.01" y2="18"></line>
                </svg>
                <Link href="tel:02634000253">
                  <span className="rtl inline-block align-middle  text-slate-900">
                    ۰۲۶-۳۴۰۰۰۲۵۳
                  </span>
                </Link>
              </div>
              <div className="flex items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
                </svg>
                <Link href="mailto:info@ahrominvest.net">
                  <span className="inline-block align-middle text-slate-900">
                    info@ahrominvest.ir
                  </span>
                </Link>
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <span className="rtl inline-block align-middle text-slate-900">
                  البرز، کرج، بلوار بلال، ساختمان پارسیان، طبقه ۴، واحد ۲۲
                </span>
              </div>
            </div>
          </div>
          <form
            action="https://ahrominvest.ir/counseling-request"
            method="POST"
            id="consultationForm"
            className="col-span-12 grid grid-cols-12 gap-4 sm:col-span-6 lg:col-span-8"
          >
            <input
              type="hidden"
              name="_token"
              value="voEXhhpDd8X76WMxT4puVwj4Fmhu48iDxT22y8Ys"
            />{" "}
            <input type="hidden" id="FTF_input" name="FTF" value="1" />
            <div className="col-span-12">
              <label
                htmlFor="full_name"
                className="block pb-2 text-sm font-medium text-slate-900 after:text-red-600 after:content-['*']"
              >
                نام و نام خانوادگی
              </label>
              <input
                id="full_name"
                type="text"
                name="full_name"
                className="block w-full rounded-xl border border-slate-300 bg-white p-3 text-sm placeholder-slate-400 shadow-sm focus:border-ahrom focus:outline-none focus:ring-1 focus:ring-ahrom"
                placeholder="نام و نام خانوادگی خود را وارد کنید."
              />
            </div>
            <div className="col-span-12">
              <label
                htmlFor="phone_number"
                className="block pb-2 text-sm font-medium text-slate-900 after:text-red-600 after:content-['*']"
              >
                شماره تماس
              </label>
              <input
                id="phone_number"
                type="text"
                name="phone_number"
                className="block w-full rounded-xl border border-slate-300 bg-white p-3 text-sm placeholder-slate-400 shadow-sm focus:border-ahrom focus:outline-none focus:ring-1 focus:ring-ahrom"
                placeholder="شماره تماس خود را وارد کنید. "
                min="1"
                maxLength="11"
              />
            </div>
            {isHuzuri&&<InputMablaq/>}
            <div className="col-span-12">
              <label
                htmlFor="description"
                className="block pb-2 text-sm font-medium text-slate-900 after:text-red-600 after:content-['*']"
              >
                متن پیام
              </label>
              <textarea
                id="description"
                name="description"
                placeholder="توضیحات خود را وارد کنید."
                className="block min-h-[10rem] w-full rounded-xl border border-slate-300 bg-white p-3 text-sm placeholder-slate-400 shadow-sm focus:border-ahrom focus:outline-none focus:ring-1 focus:ring-ahrom"
              ></textarea>
            </div>
            <div className="col-span-12">
              <button
                id="consultationConfirmButton"
                type="button"
                className="w-full h-14 rounded-2xl bg-ahrom text-white hover:bg-opacity-90 flex justify-center items-center"
              >
                ارسال
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
