"use client";
import { useState,useEffect } from "react";
import axios from "axios";

const chart = [
  {
    label: "قیمت خرید",
    number: "price_buy",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 fill-white"
        viewBox="0 0 384 512"
        stroke="currentColor"
      >
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M209.4 39.4C204.8 34.7 198.6 32 192 32s-12.8 2.7-17.4 7.4l-168 176c-9.2 9.6-8.8 24.8 .8 33.9s24.8 8.8 33.9-.8L168 115.9V456c0 13.3 10.7 24 24 24s24-10.7 24-24V115.9L342.6 248.6c9.2 9.6 24.3 9.9 33.9 .8s9.9-24.3 .8-33.9l-168-176z"
        />
      </svg>
    ),
  },
  {
    label: "قیمت فروش",
    number: "price_sell",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 rotate-180 fill-white"
        viewBox="0 0 384 512"
        stroke="currentColor"
      >
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M209.4 39.4C204.8 34.7 198.6 32 192 32s-12.8 2.7-17.4 7.4l-168 176c-9.2 9.6-8.8 24.8 .8 33.9s24.8 8.8 33.9-.8L168 115.9V456c0 13.3 10.7 24 24 24s24-10.7 24-24V115.9L342.6 248.6c9.2 9.6 24.3 9.9 33.9 .8s9.9-24.3 .8-33.9l-168-176z"
        />
      </svg>
    ),
  },
  {
    label: "دارایی صندوق",
    number: "value",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 fill-white"
        viewBox="0 0 576 512"
        stroke="currentColor"
      >
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M160 80H416V240H352V224c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v16H160V80zM48 160c0-38.7 27.5-71 64-78.4V240H48l0-80zm0 272l0-144h64V432H48zM416 288V432H160V288h64v32c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V288h64zM528 432H464V288h64V432zm0-272v80H464V81.6c36.5 7.4 64 39.7 64 78.4zM128 32C57.3 32 0 89.3 0 160V432c0 26.5 21.5 48 48 48H528c26.5 0 48-21.5 48-48V160c0-70.7-57.3-128-128-128H128zM304 256v32c0 8.8-7.2 16-16 16s-16-7.2-16-16V256c0-8.8 7.2-16 16-16s16 7.2 16 16z"
        />
      </svg>
    ),
  },
  {
    label: "بازدهی از ابتدا",
    number: "start_percentage",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 fill-white"
        viewBox="0 0 576 512"
        stroke="currentColor"
      >
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M352 120c0-13.3 10.7-24 24-24H552c13.3 0 24 10.7 24 24V296c0 13.3-10.7 24-24 24s-24-10.7-24-24V177.9L337 369c-9.4 9.4-24.6 9.4-33.9 0l-111-111L41 409c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L175 207c9.4-9.4 24.6-9.4 33.9 0l111 111L494.1 144H376c-13.3 0-24-10.7-24-24z"
        />
      </svg>
    ),
  },
];

export default function BakshAvalNemudar() {
  const [tala, setTala] = useState([]);
  async function Get(){
        await axios.get('https://ahrominvest.ir/api/dev/market').then(res=>{
          setTala(res.data.tala)
        }).catch(error=>{
            console.log(error)
        })
    }
   
  useEffect(() => {
    Get()
    const interval = setInterval(() => {
      Get()
    }, 60000);
    return () => clearInterval(interval);
  }, []);


  function toFarsiNumber(n) {
    const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    return n.toString().replace(/\d/g, (x) => farsiDigits[x]);
  }
  return (
    <div className="my-2 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:my-8">
      {chart.map((item) => (
        <div key={item.label} className="px-4 py-5 bg-gray-50 rounded-lg">
          <div className="w-12 h-12 flex mb-6 items-center justify-center bg-ahrom rounded-full">
            {item.svg}
          </div>
          <div className=" space-y-3">
            <h3 className="text-slate-900 font-bold text-16">{item.label}</h3>
            <p
              className={`text-xl ${
                item.label === "بازدهی از ابتدا"
                  ? "text-green-800"
                  : "text-slate-900"
              }`}
            >
              {item.label !== "بازدهی از ابتدا"
                ? `${toFarsiNumber(
                    parseInt(tala[item.number])
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  )} تومان`
                : `${toFarsiNumber(
                    parseFloat(tala[item.number]).toFixed(2)
                  )}%`}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
