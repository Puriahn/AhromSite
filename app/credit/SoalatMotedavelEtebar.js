"use client";
import data from "./soalha";
import { useState } from "react";

export default function SoalatMotedavelEtebar() {
  const [soalat, setSoalat] = useState(data);
  function handleShow(id) {
    setSoalat((prevS) => {
      const finalState = { ...prevS[id], open: !prevS[id].open };
      const Array = prevS.filter((item) => item.id !== id);
      const finalArray = [...Array, finalState];
      finalArray.sort((a, b) => a.id - b.id);
      return finalArray;
    });
  }
  return (
    <>
      <div className="border rounded-lg px-4 py-4">
        <h3 className="text-xl font-bold text-black">توضیحات طرح</h3>
        <div className="flex flex-wrap">
          <p className="mt-2 text-slate-800 text-sm">
            سرویس دریافت اعبتار سرمایه‌گذاری اهرم راهی ساده برای سرمایه‌گذاری در
            صندوق‌های ارزدیجیتال بدون داشتن سرمایه اولیه است.
          </p>
          <p className="mt-2 text-slate-800 text-sm">
            پس از ثبت درخواست اعتبار اطلاعات شما توسط کارشناسان ما بررسی شده و
            در صورت تایید کیف پول اعتباری شما به میزان مبلغی که اعتبار دریافت
            کرده اید افزایش پیدا می‌کند.
          </p>
          <p className="mt-2 text-slate-800 text-sm">
            سپس می‌توانید با مبلغ کیف پول اعتباری خود در صندوق‌های ارزدیجیتال
            سرمایه‌گذاری کنید.
          </p>
        </div>
      </div>

      <div className="border rounded-lg px-4 py-4 space-y-4">
        <h3 className="text-xl font-bold text-black">سوالات متداول</h3>
        <div className="mx-auto max-w-5xl space-y-4">
          {soalat.map((item) => (
            <div
              key={item.id}
              onClick={() => handleShow(item.id)}
              className={`flex-col items-center cursor-pointer select-none justify-between w-full text-right font-semibold py-2`}
              tabIndex="1"
            >
              <div
                className={`flex transition-all justify-between text-slate-900 text-md font-bold active`}
              >
                <span> {item.S}</span>
                <img
                  src="https://img.icons8.com/android/24/000000/expand-arrow.png"
                  className={`h-4 w-4 transition-all duration-500 ${
                    item.open && "-rotate-180"
                  } float-left`}
                />
              </div>
              <div
                id={`accordion-text-01`}
                role="region"
                aria-labelledby={`accordion-title-01`}
                className={`grid text-md font-light text-slate-600 overflow-hidden transition-all duration-300 ease-in-out ${
                  item.open
                    ? "grid-rows-[1fr] opacity-100 py-4 "
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="pb-3">{item.J}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
