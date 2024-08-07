"use client";
import { useState } from "react";
import { soalatQablSandoq } from "./data";
import { soalatBadSandoq } from "./data";

export default function SoalatMotedavel() {
  const [dataUp, setDataUp] = useState(soalatQablSandoq);
  const [dataDown, setDataDown] = useState(soalatBadSandoq);
  const [sandoqVaDarayi, setSandoqVaDarayi] = useState([false, false]);

  function handleShow(id) {
    if (id < 3) {
      setDataUp((prevS) => {
        const finalState = { ...prevS[id], open: !prevS[id].open };
        const Array = prevS.filter((item) => item.id !== id);
        const finalArray = [...Array, finalState];
        finalArray.sort((a, b) => a.id - b.id);
        return finalArray;
      });
    }
    
    else if (id === 11) {
      setSandoqVaDarayi((prevS) => [!prevS[0], prevS[1]]);
    }
     
    else if (id === 12) {
      setSandoqVaDarayi((prevS) => [prevS[0], !prevS[1]]);
    }
    
    else {
      setDataDown((prevS) => {
        const finalState = { ...prevS[id-3], open: !prevS[id-3].open };
        const Array = prevS.filter((item) => item.id !== id);
        const finalArray = [...Array, finalState];
        finalArray.sort((a, b) => a.id - b.id);
        return finalArray;
      });
    }
  }
  return (
    <>
        <div className="text-center mb-16">
          <h2 className="text-5xl mb-5">سوالات متدوال</h2>
          <p>پرتکرارترین سوالات کاربران را در این قسمت مشاهده کنید.</p>
        </div>
        <div className="m-2 space-y-2 mx-10 lg:mx-auto min-w-4xl max-w-5xl md:min-w-2xl">
          {dataUp.map((item) => (
            <div
              key={item.id}
              onClick={() => handleShow(item.id)}
              className=" cursor-pointer flex w-full flex-col gap-4 rounded-2xl bg-[#F9FAFB] pt-5 px-6 text-black justify-between"
              tabIndex="1"
            >
              <div className="flex items-center justify-between font-bold text-xl">
                <span> {item.q}</span>
                <img
                  src="https://img.icons8.com/material-sharp/24/expand-arrow--v1.png"
                  className={`h-8 w-8 transition-all duration-500 ${
                    item.open && "-rotate-180"
                  } float-left`}
                />
              </div>
              <div
                className={`text-slate-800  h-auto max-h-0 items-center opacity-0 transition-all ${
                  item.open && " max-h-screen opacity-100 duration-1000"
                }  `}
              >
                {item.a}
              </div>
            </div>
          ))}
          <div
            onClick={() => handleShow(11)}
            className="  cursor-pointer flex w-full flex-col gap-4 rounded-2xl bg-[#F9FAFB] pt-5 px-6 text-black justify-between"
            tabIndex="1"
          >
            <div className="flex items-center justify-between font-bold text-xl">
              <span>سرمایه‌گذاری اهرم چند صندوق سرمایه‌گذاری دارد؟ </span>
              <img
                src="https://img.icons8.com/material-sharp/24/expand-arrow--v1.png"
                className={`h-8 w-8 transition-all duration-500 ${
                  sandoqVaDarayi[0] && "-rotate-180"
                } float-left`}
              />
            </div>

            <div
              className={`text-slate-800  h-auto max-h-0 items-center opacity-0 transition-all ${
                sandoqVaDarayi[0] && " max-h-screen opacity-100 duration-1000"
              }  `}
            >
              در حال حاضر ۶ صندوق سرمایه‌گذاری فعال می‌باشد.
              <a href="https://ahrominvest.ir/zomorod">صندوق زمرد / </a>
              <a href="https://ahrominvest.ir/kahroba">صندوق کهربا / </a>
              <a href="https://ahrominvest.ir/yaghot">صندوق یاقوت / </a>
              <a href="https://ahrominvest.ir/almas">صندوق الماس / </a>
              <a href="https://ahrominvest.ir/amitist">صندوق آمیتیست / </a>
              <a href="https://ahrominvest.ir/tala">صندوق طلا </a>
            </div>
          </div>

          <div
            onClick={() => handleShow(12)}
            className="  cursor-pointer flex w-full flex-col gap-4 rounded-2xl bg-[#F9FAFB] pt-5 px-6 text-black justify-between"
            tabIndex="1"
          >
            <div className="flex items-center justify-between font-bold text-xl">
              <span>صندوق ها از چه دارایی هایی تشکیل شده اند؟</span>
              <img
                src="https://img.icons8.com/material-sharp/24/expand-arrow--v1.png"
                className={`h-8 w-8 transition-all duration-500 ${
                  sandoqVaDarayi[1] && "-rotate-180"
                } float-left`}
              />
            </div>

            <div
              className={`text-slate-800  h-auto max-h-0 items-center opacity-0 transition-all ${
                sandoqVaDarayi[1] && " max-h-screen opacity-100 duration-1000"
              }`}
            >
              برای مشاهده ترکیب دارایی هر صندوق وارد صفحه{" "}
              <a href="https://ahrominvest.ir/assetmix">ترکیب دارایی‌ها</a>{" "}
              شوید.
            </div>
          </div>

          {dataDown.map((item) => (
            <div
              key={item.id}
              onClick={() => handleShow(item.id)}
              className=" cursor-pointer flex w-full flex-col gap-4 rounded-2xl bg-[#F9FAFB] pt-5 px-6 text-black justify-between"
              tabIndex="1"
            >
              <div className="flex items-center justify-between font-bold text-xl">
                <span> {item.q}</span>
                <img
                  src="https://img.icons8.com/material-sharp/24/expand-arrow--v1.png"
                  className={`h-8 w-8 transition-all duration-500 ${
                    item.open && "-rotate-180"
                  } float-left`}
                />
              </div>
              <div
                className={`text-slate-800  h-auto max-h-0 items-center opacity-0 transition-all ${
                  item.open && " max-h-screen opacity-100 duration-1000"
                }  `}
              >
                {item.a}
              </div>
            </div>
          ))}
        </div>
    </>
  );
}
/*<main>
        <div className="text-center mb-16">
          <h2 className="text-5xl mb-5">سوالات متدوال</h2>
          <p>پرتکرارترین سوالات کاربران را در این قسمت مشاهده کنید.</p>
        </div>
        <div className="m-2 space-y-2 mx-10 lg:mx-auto min-w-4xl max-w-5xl md:min-w-2xl">
          <div
            className="group flex flex-col gap-4 rounded-2xl bg-[#F9FAFB] py-4 px-6 text-black"
            tabIndex="1"
          >
            <div className="flex cursor-pointer items-center justify-between font-bold text-xl">
              <span> صندوق سرمایه‌گذاری چیست؟ </span>
              <img
                src="https://img.icons8.com/material-sharp/24/expand-arrow--v1.png"
                className="h-8 w-8 transition-all duration-500 group-focus:-rotate-180"
              />
            </div>
            <div className="text-slate-800 invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
              صندوق سرمایه‌گذاری به صندوق هایی گفته می شود که صندوق وجه نقد را
              از سرمایه‌گذار دریافت کرده و برای آن سرمایه‌گذاری انجام می‌دهد.
            </div>
          </div>

          <div
            className="group flex flex-col gap-2 rounded-2xl bg-[#F9FAFB] py-4 px-6 text-black"
            tabIndex="2"
          >
            <div className="flex cursor-pointer items-center justify-between font-bold text-xl">
              <span> مزایای صندوق‌های سرمایه‌گذاری چیست؟</span>
              <img
                src="https://img.icons8.com/ios/50/circled-chevron-down.png"
                className="h-8 w-8 transition-all duration-500 group-focus:-rotate-180"
              />
            </div>
            <div className="text-slate-800 invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
              این صندوق‌ها توسط افراد خبره و کارشناس بازارهای مالی مدیریت می‌شود
              و یکی از بهترین گزینه‌ها برای سرمایه‌گذاری در هر بازاری می باشد.
            </div>
          </div>

          <div
            className="group flex flex-col gap-2 rounded-2xl bg-[#F9FAFB] py-4 px-6 text-black"
            tabIndex="3"
          >
            <div className="flex cursor-pointer items-center justify-between font-bold text-xl">
              <span> حداقل مبلغ سرمایه‌گذاری در صندوق‌ها چقدر هست؟</span>
              <img
                src="https://img.icons8.com/ios/50/circled-chevron-down.png"
                className="h-8 w-8 transition-all duration-500 group-focus:-rotate-180"
              />
            </div>
            <div className="text-slate-800 invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
              حداقل مبلغ برای سرمایه‌گذاری در صندوق‌ها ۵۰،۰۰۰ تومان می‌باشد.
            </div>
          </div>
          <div
            className="group flex flex-col gap-2 rounded-2xl bg-[#F9FAFB] py-4 px-6 text-black"
            tabIndex="1"
          >
            <div className="flex cursor-pointer items-center justify-between font-bold text-xl">
              <span> سرمایه‌گذاری اهرم چند صندوق سرمایه‌گذاری دارد؟ </span>
              <img
                src="https://img.icons8.com/ios/50/circled-chevron-down.png"
                className="h-8 w-8 transition-all duration-500 group-focus:-rotate-180"
              />
            </div>
            <div className="text-slate-800 invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
              در حال حاضر ۶ صندوق سرمایه‌گذاری فعال می‌باشد.
              <div className="mt-4 flex flex-col justify-center md:flex-row">
                <a
                  className="mb-2 align-top mx-6 text-center inline-block rounded-full border-2 border-warning px-6 pb-[6px] pt-2 text-lg font-medium leading-normal text-warning transition duration-150 ease-in-out hover:border-warning-600 hover:bg-warning-50/50 hover:text-warning-600 focus:border-warning-600 focus:bg-warning-50/50 focus:text-warning-600 focus:outline-none focus:ring-0 active:border-warning-700 active:text-warning-700 motion-reduce:transition-none  border-slate-900 hover:border-purple-800 text-black dark:hover:bg-purple-900 hover:text-purple-100"
                  href="https://ahrominvest.ir/zomorod"
                >
                  زمرد{" "}
                </a>
                <a
                  className="mx-6 mb-2 text-center text-black inline-block rounded-full border-2 border-warning px-6 pb-[6px] pt-2 text-lg font-medium leading-normal text-warning transition duration-150 ease-in-out hover:border-warning-600 hover:bg-warning-50/50 hover:text-warning-600 focus:border-warning-600 focus:bg-warning-50/50 focus:text-warning-600 focus:outline-none focus:ring-0 active:border-warning-700 active:text-warning-700 motion-reduce:transition-none border-slate-900 hover:border-yellow-800 dark:hover:bg-yellow-900 hover:text-yellow-100"
                  href="https://ahrominvest.ir/kahroba"
                >
                  کهربا{" "}
                </a>
                <a
                  className="mx-6 mb-2 text-center text-black inline-block rounded-full border-2 border-warning px-6 pb-[6px] pt-2 text-lg font-medium leading-normal text-warning transition duration-150 ease-in-out hover:border-warning-600 hover:bg-warning-50/50 hover:text-warning-600 focus:border-warning-600 focus:bg-warning-50/50 focus:text-warning-600 focus:outline-none focus:ring-0 active:border-warning-700 active:text-warning-700 motion-reduce:transition-none border-slate-900 hover:border-green-800 dark:hover:bg-green-900 hover:text-green-100"
                  href="https://ahrominvest.ir/yaghot"
                >
                  یاقوت{" "}
                </a>
                <a
                  className="mx-6 mb-2 text-center text-black inline-block rounded-full border-2 border-warning px-6 pb-[6px] pt-2 text-lg font-medium leading-normal text-warning transition duration-150 ease-in-out hover:border-warning-600 hover:bg-warning-50/50 hover:text-warning-600 focus:border-warning-600 focus:bg-warning-50/50 focus:text-warning-600 focus:outline-none focus:ring-0 active:border-warning-700 active:text-warning-700 motion-reduce:transition-none border-slate-900 hover:border-red-800 dark:hover:bg-red-900 hover:text-red-100"
                  href="https://ahrominvest.ir/almas"
                >
                  الماس{" "}
                </a>
                <a
                  className="mx-6 mb-2 text-center text-black inline-block rounded-full border-2 border-warning px-6 pb-[6px] pt-2 text-lg font-medium leading-normal text-warning transition duration-150 ease-in-out hover:border-warning-600 hover:bg-warning-50/50 hover:text-warning-600 focus:border-warning-600 focus:bg-warning-50/50 focus:text-warning-600 focus:outline-none focus:ring-0 active:border-warning-700 active:text-warning-700 motion-reduce:transition-none  border-slate-900 hover:border-sky-900 dark:hover:bg-sky-950 hover:text-sky-100"
                  href="https://ahrominvest.ir/amitist"
                >
                  آمیتیست{" "}
                </a>
                <a
                  className="mx-6 mb-2 text-center text-black inline-block rounded-full border-2 border-warning px-6 pb-[6px] pt-2 text-lg font-medium leading-normal text-warning transition duration-150 ease-in-out hover:border-warning-600 hover:bg-warning-50/50 hover:text-warning-600 focus:border-warning-600 focus:bg-warning-50/50 focus:text-warning-600 focus:outline-none focus:ring-0 active:border-warning-700 active:text-warning-700 motion-reduce:transition-none border-slate-900 hover:border-yellow-800 dark:hover:bg-yellow-900 hover:text-yellow-100"
                  href="https://ahrominvest.ir/tala"
                >
                  طلا{" "}
                </a>
              </div>
            </div>
          </div>

          <div
            className="group flex flex-col gap-2 rounded-2xl bg-[#F9FAFB] py-4 px-6 text-black"
            tabIndex="2"
          >
            <div className="flex cursor-pointer items-center justify-between font-bold text-xl">
              <span> چگونه متوجه شویم که کدام صندوق برای ما مناسب است؟</span>
              <img
                src="https://img.icons8.com/ios/50/circled-chevron-down.png"
                className="h-8 w-8 transition-all duration-500 group-focus:-rotate-180"
              />
            </div>
            <div className="text-slate-800 invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
              بعد از ثبت‌نام در سرمایه‌گذاری اهرم کافیست فرم مشاوره سرمایه‌گذاری را تکمیل کنید تا کارشناسان ما با شما ارتباط بگیرند.
            </div>
          </div>

          <div
            className="group flex flex-col gap-2 rounded-2xl bg-[#F9FAFB] py-4 px-6 text-black"
            tabIndex="3"
          >
            <div className="flex cursor-pointer items-center justify-between font-bold text-xl">
              <span> صندوق ها از چه دارایی هایی تشکیل شده اند؟</span>
              <img
                src="https://img.icons8.com/ios/50/circled-chevron-down.png"
                className="h-8 w-8 transition-all duration-500 group-focus:-rotate-180"
              />
            </div>
            <div className="text-slate-800 invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
              برای مشاهده ترکیب دارایی هر صندوق وارد صفحه{" "}
              <a href="https://ahrominvest.ir/assetmix">ترکیب دارایی‌ها</a>{" "}
              شوید.
            </div>
          </div>
          <div
            className="group flex flex-col gap-2 rounded-2xl bg-[#F9FAFB] py-4 px-6 text-black"
            tabIndex="1"
          >
            <div className="flex cursor-pointer items-center justify-between font-bold text-xl">
              <span> کارمزد صندوق ها به چه صورت محاسبه می ‌شود؟</span>
              <img
                src="https://img.icons8.com/ios/50/circled-chevron-down.png"
                className="h-8 w-8 transition-all duration-500 group-focus:-rotate-180"
              />
            </div>
            <div className="text-slate-800 invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
              کارمزد تمامی صندوق ها ۱ درصد می‌باشد. این کارمزد بابت هزینه خرید و فروش و مدیریت دارایی از سرمایه‌‌گذاران دریافت می‌شود.
            </div>
          </div>

          <div
            className="group flex flex-col gap-2 rounded-2xl bg-[#F9FAFB] py-4 px-6 text-black"
            tabIndex="2"
          >
            <div className="flex cursor-pointer items-center justify-between font-bold text-xl">
              <span>
                {" "}
                چرا باید برای خرید صندوق‌های سرمایه‌گذاری احراز هویت کنم؟
              </span>
              <img
                src="https://img.icons8.com/ios/50/circled-chevron-down.png"
                className="h-8 w-8 transition-all duration-500 group-focus:-rotate-180"
              />
            </div>
            <div className=" text-slate-800invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
              احراز هویت تمامی سرمایه‌گذاران با توجه به قوانین کشور انجام می‌شود و بدون احراز هویت امکان سرمایه‌گذاری وجود ندارد.
            </div>
          </div>
        </div>
      </main>*/
