"use client";

import { useState } from "react";
import { Chart } from "./Chart";
import Table from "./Table";
import Link from "next/link";

export default function TableAndPishrafte({ sandoq,param }) {
  const [chartTimeScale, setChartTimeScale] = useState("All");
  const [isPending,setIsPending]=useState(false)

  function handleTime(identifier){
    setChartTimeScale(identifier)
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Table sandoq={sandoq} />
      <div className="relative">
        <div id="parent_chart_zomorod_container" className="mx-3">
          <div className="flex mb-4">
            <div className="me-1">
              <div
                id="zomorod_candle_chart_button"
                className="bg-ahrom rounded-full p-1 flex justify-center items-center cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#FFFFFF"
                >
                  <g>
                    <rect fill="none" height="24" width="24" />
                  </g>
                  <g>
                    <g>
                      <path d="M9,4H7v2H5v12h2v2h2v-2h2V6H9V4z M9,16H7V8h2V16z" />
                      <path d="M19,8h-2V4h-2v4h-2v7h2v5h2v-5h2V8z M17,13h-2v-3h2V13z" />
                    </g>
                  </g>
                </svg>
              </div>
              <div
                id="zomorod_line_chart_button"
                className="bg-ahrom rounded-full hidden justify-center items-center cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                  fill="#ffffff"
                >
                  <path d="m140-220-60-60 300-300 160 160 284-320 56 56-340 384-160-160-240 240Z" />
                </svg>
              </div>
            </div>
            <div>
              <Link
                href="https://ahrominvest.ir/chart?symbol=zomorod"
                target="_blank"
                className="bg-ahrom rounded-lg flex justify-center items-center cursor-pointer"
              >
                <p className="text-white m-0 font-16 py-1 px-3">
                  نمودار پیشرفته
                </p>
              </Link>
            </div>
          </div>
          <div data-name="zomorod" id="zomorod_chart_container"></div>
        </div>
        <div
          id="loading_chart_zomorod"
          className={`top-1/2 right-1/2 ${isPending?'block bg-black':'hidden'} h-[272px] justify-center items-center bg-white mx-auto text-center`}
        >
          <div className="spinner h-6 w-6 animate-spin rounded-full border-[3px] border-black border-r-transparent mx-auto mt-36"></div>
        </div>
        <Chart param={param} time={chartTimeScale} key={chartTimeScale} pending={setIsPending} pendingStatus={isPending} />
        
        <ul className='flex gap-3 w-fit mt-5'>
          <li className={`rounded-lg flex justify-center ${isPending&&'select-none cursor-default'} py-1 px-3 font-bold text-16 cursor-pointer me-1 ${chartTimeScale==='All'?'text-white bg-ahrom':'text-black bg-slate-100'} `}>
            <button disabled={isPending} onClick={()=>handleTime('All')}>همه</button>
          </li>
          <li className={`rounded-lg flex justify-center py-1 ${isPending&&'select-none cursor-default'} px-3 font-bold text-16 cursor-pointer me-1 ${chartTimeScale==='1D'?'text-white bg-ahrom':'text-black bg-slate-100'} `}>
            <button disabled={isPending} onClick={()=>handleTime('1D')}>روزانه</button>
          </li>
          <li className={`rounded-lg flex justify-center py-1 ${isPending&&'select-none cursor-default'} px-3 font-bold text-16 cursor-pointer me-1 ${chartTimeScale==='1W'?'text-white bg-ahrom':'text-black bg-slate-100'} `}>
            <button disabled={isPending} onClick={()=>handleTime('1W')}>هفتگی</button>
          </li>
          <li className={`rounded-lg flex justify-center py-1 ${isPending&&'select-none cursor-default'} px-3 font-bold text-16 cursor-pointer me-1 ${chartTimeScale==='1M'?'text-white bg-ahrom':'text-black bg-slate-100'} `}>
            <button disabled={isPending} onClick={()=>handleTime('1M')}>ماهانه</button>
          </li>
          <li className={`rounded-lg flex justify-center py-1 ${isPending&&'select-none cursor-default'} px-3 font-bold text-16 cursor-pointer me-1 ${chartTimeScale==='1Y'?'text-white bg-ahrom':'text-black bg-slate-100'} `}>
            <button disabled={isPending} onClick={()=>handleTime('1Y')}>سالانه</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
