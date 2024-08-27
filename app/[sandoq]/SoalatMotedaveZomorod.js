"use client";

import Link from "next/link";
import { useState } from "react";
import toFarsiNumber from "@/Components/utils/ToFarsiNumber";

export default function SoalatMotedavelZomorod({ soal, name,percent }) {
  const data = [
    {
      id: 0,
      q: " صندوق " + name + " برای چه کسانی مناسب است؟",
      a: ` صندوق ${name} یک صندوق ارز دیجیتال کم ریسک می‌باشد و برای افرادی که ریسک پذیری بالایی ندارند مناسب است.`,
      open: false,
    },
    {
      id: 1,
      q: ` بازدهی صندوق ${name} چقدر می‌باشد؟`,
      a: `صندوق زمرد یک صندوق با ${soal} می‌باشد. هم‌چنین بازدهی یکساله صندوق زمرد، ${percent===undefined?'':toFarsiNumber(parseFloat(percent["1year_percentage"]).toFixed(2))} % می‌باشد.`,
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
      q: `صندوق ${name} از چه دارایی‌هایی تشکیل شده است؟`,
      a: (
        <p className="inline-block">
          برای مشاهده ترکیب دارایی صندوق {name} به صفحه
          <Link href="/assetmix" className="text-ahrom mx-1">
            ترکیب دارایی‌ها
          </Link>
          مراجعه کنید.
        </p>
      ),
      open: false,
    },
    {
      id: 4,
      q: `امنیت صندوق ${name} به چه صورت می‌باشد؟`,
      a: "تمام دارایی‌های صندوق به صورت سرد نگهداری می‌شوند و خطر امنیتی ندارند.",
      open: false,
    },
    {
      id: 5,
      q: `سرمایه به چه شکل در صندوق ${name} مدیریت می‌شود؟`,
      a: "دارایی شما توسط افراد خبره بازار‌های مالی مدیریت می‌شود و تمام تلاش بر بهترین عملکرد در شرایط گوناگون بازار می‌باشد.",
      open: false,
    },
  ];
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
    <div
      className="mx-auto max-w-5xl px-6 pb-20 sm:px-8 lg:pb-24"
      id="faqSection"
    >
      <div className="pb-12 text-center">
        <h2 className="pb-4 text-2xl font-bold text-slate-900 md:text-3xl">
          سوالات متداول
        </h2>
        <p className="text-slate-900">
          پرتکرار ترین سوالات کاربران را در این قسمت مشاهده کنید.
        </p>
      </div>
      <div className="mx-auto max-w-5xl space-y-4">
        {name === "" &&<div className="mx-auto text-center items-center justify-center">
          <div className="container p-4 sm:p-1 text-center mx-auto  items-center justify-center ">
            <div className="info space-y-8">
              <div className="text3 skeleton"></div>
              <div className="text3 skeleton"></div>
              <div className="text3 skeleton"></div>
              <div className="text3 skeleton"></div>
              <div className="text3 skeleton"></div>
              <div className="text3 skeleton"></div>
            </div>
          </div>
        </div>}
        {name !== "" &&
          soalat.map((item) => (
            <div
              key={item.id}
              onClick={() => handleShow(item.id)}
              className={`flex-col  bg-[#F9FAFB]  items-center cursor-pointer select-none justify-between w-full text-right font-semibold py-2 px-5 rounded-xl`}
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
                className={`grid text-md  text-slate-900  font-normal overflow-hidden transition-all duration-300 ease-in-out ${
                  item.open
                    ? "grid-rows-[1fr] opacity-100 py-8 "
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                {item.a}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
