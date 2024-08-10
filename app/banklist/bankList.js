'use client'

import { useState } from "react";

const bank = [
  {
    main:'بانک ملت',
    id:1,
    lineOne: " نوع حساب: جاری",
    lineTwo: "شماره شبا: IR-۷۳۰۱۲۰۰۰۰۰۰۰۰۰۹۶۰۰۳۹۱۸۱۰",
    lineThree: " شماره حساب: ۹۶۰۰۳۹۱۸۱۰",
  },
  {
    id:2,
    main:'بانک ملی',
    lineOne: "  نوع حساب: جاری",
    lineTwo: "   شماره شبا: IR-۷۷۰۱۷۰۰۰۰۰۰۰۱۱۶۰۶۴۵۹۹۰۰۹",
    lineThree: "  شماره حساب: ۰۱۱۶۰۶۴۵۹۹۰۰۹",
  },
  {
    id:3,
    main:'بانک پارسیان',
    lineOne: " نوع حساب: جاری",
    lineTwo:"  شماره شبا: IR-۰۴۰۵۴۰۲۰۸۷۳۰۱۰۱۱۵۴۹۳۳۶۰۹",
    lineThree:" شماره حساب: ۳۰۱۰۱۱۵۴۹۳۳۶۰۹",
  },
];

export default function Banks() {
    const [show,setShow]=useState([false,false,false])

    function handleShow(id){
        setShow(prevS=>{
            const finall=[...prevS]
            finall[id]=!finall[id]
            return(finall)
        })
    }

  return (
    <div className="mx-auto max-w-5xl px-6 pt-14 pb-20 space-y-14">
      <div className="mx-2 rounded-lg py-5 px-4 text-white bg-red-600">
        مشتری گرامی، لطفا از واگذاری چک به حساب پردازش اطلاعات مالی اهرم اکیدا
        خودداری کنید. وجه حاصل از وصول چک به حساب صادرکننده آن برگشت داده
        می‌شود. کلیه عواقب ناشی از عدم توجه به این موضوع برعهده مشتری خواهد بود.
      </div>

      <div className="mx-auto max-w-5xl space-y-4">
            {bank.map((item=>
            <div
            onClick={() => handleShow(item.id-1)}
              key={item.id}
              className=" cursor-pointer flex w-full flex-col gap-4 rounded-2xl bg-[#F9FAFB] pt-5 px-6 text-black justify-between"
              tabIndex="1"
            >
              <div className="flex items-center justify-between font-bold text-xl">
                <span> {item.main}</span>
                <img
                  src="https://img.icons8.com/material-sharp/24/expand-arrow--v1.png"
                  className={`h-8 w-8 transition-all duration-500 ${
                    show[item.id-1] && "-rotate-180"
                  } float-left`}
                />
              </div>
              <div
                className={`text-slate-800 h-auto max-h-0 items-center opacity-0 transition-all ${
                    show[item.id-1]  ? "py-12 max-h-screen opacity-100 duration-500":'invisible py-2'
                }  `}
              >
                <p className="my-4">{item.lineOne}</p>
                <p className="my-4">{item.lineTwo}</p>
                <p className="my-4">{item.lineThree}</p>
              </div>
            </div>))}
          </div>
     </div>
  );
}
