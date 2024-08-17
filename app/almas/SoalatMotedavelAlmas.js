"use client";

import Link from "next/link";
import { useState } from "react";

export const data = [
  {
    id: 0,
    q: "صندوق الماس برای چه کسانی مناسب است؟ ",
    a: "صندوق الماس یک صندوق ارز دیجیتال بدون ریسک می‌باشد و برای افرادی که تحمل ضرر ندارند مناسب است. ",
    open: false,
  },
  {
    id: 1,
    q: "  بازدهی صندوق الماس چقدر می‌باشد؟",
    a: " صندوق الماس یک صندوق با حفظ اصل سرمایه می‌باشد. هم‌چنین بازدهی یکساله صندوق الماس، ۴۶.۰۷ % می‌باشد.",
    open: false,
  },
  {
    id: 2,
    q: " حداقل مبلغ سرمایه‌گذاری در صندوق‌ها چقدر هست؟",
    a: "حداقل مبلغ برای سرمایه‌گذاری در صندوق‌ها ۵۰،۰۰۰ تومان می‌باشد.",
    open: false,
  },
  {
    id: 3,
    q: " صندوق الماس از چه دارایی‌هایی تشکیل شده است؟",
    a: (
      <p className="inline-block">
                    برای مشاهده ترکیب دارایی صندوق الماس  به صفحه 
                    <Link href="https://ahrominvest.ir/assetmix" className="text-ahrom mx-1">
                        ترکیب دارایی‌ها
                    </Link> 
                    مراجعه کنید.
                </p>
    ),
    open: false,
  },
  {
    id: 4,
    q: "   امنیت صندوق الماس  به چه صورت می‌باشد؟",
    a: "تمام دارایی‌های صندوق به صورت سرد نگهداری می‌شوند و خطر امنیتی ندارند.",
    open: false,
  },
  {
    id: 5,
    q: "    سرمایه به چه شکل در صندوق الماس  مدیریت می‌شود؟",
    a: "  دارایی شما توسط افراد خبره بازار‌های مالی مدیریت می‌شود و تمام تلاش بر بهترین عملکرد در شرایط گوناگون بازار می‌باشد.",
    open: false,
  },
];

export default function SoalatMotedavelAlmas() {
  const [soalat, setSoalat] = useState(data);

  function handleShow(id){
    setSoalat((prevS) => {
        const finalState = { ...prevS[id], open: !prevS[id].open };
        const Array = prevS.filter((item) => item.id !== id);
        const finalArray = [...Array, finalState];
        finalArray.sort((a, b) => a.id - b.id);
        return finalArray;
      });
  }

  return (
    <div className="mx-auto max-w-5xl px-6 pb-20 sm:px-8 lg:pb-24" id="faqSection">
      <div className="pb-12 text-center">
        <h2 className="pb-4 text-2xl font-bold text-slate-900 md:text-3xl">
          سوالات متداول
        </h2>
        <p className="text-slate-900">
          پرتکرار ترین سوالات کاربران را در این قسمت مشاهده کنید.
        </p>
      </div>
      <div className="mx-auto max-w-5xl space-y-4">
        {soalat.map((item) => (
          <div
            key={item.id}
            onClick={() => handleShow(item.id)}
            className={` cursor-pointer flex w-full flex-col gap-4 rounded-2xl bg-[#F9FAFB] pt-5 px-6 text-black justify-between`}
            tabIndex="1"
          >
            <div
              className={`flex items-center  transition-all justify-between font-semibold text-sm md:text-xl md:font-bold`}
            >
              <span> {item.q}</span>
              <img
                src="https://img.icons8.com/material-sharp/24/expand-arrow--v1.png"
                className={`h-8 w-8 transition-all duration-500 ${
                  item.open && "-rotate-180"
                } float-left`}
              />
            </div>
            <div
              className={`text-slate-800 h-auto max-h-0 items-center pb-2 opacity-0 transition-all ${
                item.open && " max-h-screen opacity-100 duration-1000"
              }  `}
            >
              {item.a}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
