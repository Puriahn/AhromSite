"use client";

import { useState } from "react";

export default function SideNav({ menu, setMenu }) {
  const [show, setShow] = useState({ sandoq: false, bishtar: false });

  function handleShow(identifier) {
    setShow((prevS) => ({ ...prevS, [identifier]: !prevS[identifier] }));
  }

  function handleHide() {
    setMenu((prevS) => !prevS);
  }

  if (menu && typeof document !== "undefined") {
    document.body.style.overflow = "hidden";
  } else if (!menu && typeof document !== "undefined") {
    document.body.style.overflow = "scroll";
  }
  return (
    <>
      <div
        className={`transform bg-stone-100 z-20 w-full transition-all overflow-y-auto visible lg:invisible fixed duration-300 ${
          typeof window !== "undefined" && window.scrollY > 600
            ? "translate-y-20"
            : "translate-y-28"
        } ${menu ? "translate-x-0" : "translate-x-full"}  `}
        id="overlay"
        data-open="false"
      >
        <nav className="h-screen bg-white px-4 pt-8 sm:px-6 md:px-8 overflow-hidden">
          <ul className="flex flex-col gap-4 pb-6 h-[65vh] overflow-auto no-scrollbar">
            <li>
              <a
                href="/"
                className="text-md font-medium text-slate-900 hover:text-slate-900"
              >
                خانه
              </a>
            </li>
            <li id="liMenu">
              <a
                id="a_menu"
                onClick={() => handleShow("sandoq")}
                href="#"
                className="flex justify-between relative"
              >
                <p className="p-0 text-slate-900 font-medium">صندوق</p>
                <svg
                  id="svg"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 fill-hat absolute left-0 ${
                    show.sandoq && "rotate-180"
                  }`}
                  viewBox="0 0 448 512"
                  stroke="currentColor"
                >
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M241 337c-9.4 9.4-24.6 9.4-33.9 0L47 177c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l143 143L367 143c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L241 337z"
                  />
                </svg>
              </a>
              <div
                id="ul_menu"
                className={`${!show.sandoq && "hidden "} space-y-4 mt-3`}
              >
                <a href="/zomorod" className="block font-medium text-slate-900">
                  صندوق زمرد
                </a>
                <a href="/kahroba" className="block font-medium text-slate-900">
                  صندوق کهربا
                </a>
                <a href="/yaghot" className="block font-medium text-slate-900">
                  صندوق یاقوت
                </a>
                <a href="/almas" className="block font-medium text-slate-900">
                  صندوق الماس
                </a>
                <a href="/amitist" className="block font-medium text-slate-900">
                  صندوق آمیتیست
                </a>
                <a
                  href="/tala"
                  className=" font-medium text-slate-900 flex space-x-2 space-x-reverse"
                >
                  <span>صندوق طلا</span>
                  <span className="text-white text-xs px-1.5 py-0.5 ms-2 font-medium rounded-xl flex items-center">
                    جدید
                  </span>
                </a>
              </div>
            </li>
            <li>
              <a
                onClick={handleHide}
                id="features_page_header_mobile"
                href="/#features"
                className="text-md cursor-pointer font-medium text-slate-900 hover:text-slate-900"
              >
                ویژگی‌ها
              </a>
            </li>
            <li>
              <a
                onClick={handleHide}
                id="consulting_page_header_mobile"
                href="/#consulting"
                className="text-md font-medium cursor-pointer text-slate-900 hover:text-slate-900"
              >
                درخواست مشاوره
              </a>
            </li>
            <li>
              <a
                onClick={handleHide}
                id="faq_page_header_mobile"
                href="/#faq"
                className="text-md font-medium cursor-pointer text-slate-900 hover:text-slate-900"
              >
                سوالات متداول
              </a>
            </li>
            <li>
              <a
                href="/credit"
                className="text-md font-medium text-slate-900 hover:text-slate-900"
              >
                دریافت اعتبار
              </a>
            </li>
            <li>
              <a
                href="/gift-card"
                className="text-md font-medium text-slate-900 hover:text-slate-900"
              >
                کارت هدیه
              </a>
            </li>
            <li>
              <a
                href="/blog"
                className="text-md font-medium text-slate-900 hover:text-slate-900"
              >
                وبلاگ
              </a>
            </li>
            <li id="liMenu_more">
              <a
                onClick={() => handleShow("bishtar")}
                id="a_menu_more"
                href="#"
                className="flex justify-between relative"
              >
                <p className="p-0 text-slate-900 font-medium">بیشتر</p>
                <svg
                  id="svg_more"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 fill-hat absolute left-0 ${
                    show.bishtar && "rotate-180"
                  }`}
                  viewBox="0 0 448 512"
                  stroke="currentColor"
                >
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M241 337c-9.4 9.4-24.6 9.4-33.9 0L47 177c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l143 143L367 143c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L241 337z"
                  />
                </svg>
              </a>
              <div
                id="ul_menu_more"
                className={`${!show.bishtar && "hidden "} space-y-4 mt-3`}
              >
                <a
                  id="about_page_header_mobile"
                  href="/#about"
                  className="block text-md font-medium text-slate-900 hover:text-slate-900"
                >
                  درباره ما
                </a>
                <a
                  href="/assetmix"
                  className="block text-md font-medium text-slate-900 hover:text-slate-900"
                >
                  ترکیب دارایی‌ها
                </a>
                <a
                  href="/risk-tolerance-test"
                  className="block text-md font-medium text-slate-900 hover:text-slate-900"
                >
                  آزمون ریسک‌پذیری
                </a>
                <a
                  href="/banklist"
                  className="block text-md font-medium text-slate-900 hover:text-slate-900"
                >
                  شماره حساب‌ها
                </a>
                <a
                  href="/terms"
                  className="block text-md font-medium text-slate-900 hover:text-slate-900"
                >
                  شرایط استفاده
                </a>
                <a
                  href="/privacy"
                  className="block text-md font-medium text-slate-900 hover:text-slate-900"
                >
                  حریم خصوصی
                </a>
              </div>
            </li>
          </ul>
          <hr className="mx-auto w-4/5 border-t border-slate-300 pb-6" />
          <div>
            <a
              href="/application"
              className="py-6 rounded-2xl flex w-auto items-center justify-center h-[3.25rem] bg-ahrom text-white"
            >
              دانلود اپلیکیشن
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}

//kinda worked=className={`transform text-green-950 bg-stone-100 inset-0 pb-2 z-40 w-full transition-all absolute h-full overflow-x-auto duration-300 translate-y-28 ${menu?'translate-x-0':'translate-x-full'}  `}

/*<div id="drawer-right-example" className="fixed top-0 right-0 z-10 h-screen p-4 overflow-y-auto transition-transform translate-x-0 w-full bg-white dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-right-label">
    <h5 id="drawer-right-label" className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"><svg className="w-4 h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
  </svg>Right drawer</h5>
   <button type="button" drawer-hide="drawer-right-example" aria-controls="drawer-right-example" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
      <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
      </svg>
      <span className="sr-only">Close menu</span>
   </button>
   <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">Supercharge your hiring by taking advantage of our <a href="#" className="text-blue-600 underline font-medium dark:text-blue-500 hover:no-underline">limited-time sale</a> for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board.</p>
   <div className="grid grid-cols-2 gap-4">
      <a href="#" className="px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Learn more</a>
      <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Get access <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg></a>
   </div>
</div>
 */
