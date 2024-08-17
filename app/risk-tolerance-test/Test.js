"use client";

import { useState } from "react";
import Data from "./Test-Data.json";

export default function TestQuiz() {
  const [index, setIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [warningDiv, setWarningDiv] = useState(false);

  function handleChange(event) {
    const finalState=[...userAnswers]
    finalState[index]={id:event.target.id,value:event.target.value}
    setUserAnswers(finalState)
  }

  function handleNext() {
    if (userAnswers.length>index){
        setIndex((prevS) => prevS + 1);
    }
    else{
        handleWarningDiv()
    }
  }

  function handlePrevious() {
    setIndex((prevS) => prevS - 1);
  }

  function handleWarningDiv() {
    setWarningDiv(true);
    setTimeout(()=>{handleHideWarning()},3000)
  }
  function handleHideWarning() {
    setWarningDiv(false)
  }
  return (
    <>
      <div className="mx-auto max-w-5xl py-14 px-4 space-y-14 ">
        <div>
          <p className="p-0 font-medium text-18 leading-8">
            تشخیص میزان ریسک‌پذیری یکی از عوامل مهم در شروع یک سرمایه‌گذاری موفق
            می‌باشد. برای اینکه تشخیص دهید به چه میزان ریسک‌پذیر هستید کافیست ۲
            دقیقه وقت بگذارید و به سوالات این پرسشنامه پاسخ دهید.
          </p>
        </div>
        <div
          onChange={handleChange}
          className="form-section active space-y-2 bg-[#F9FAFB] p-4 rounded-2xl"
          id="/#view"
        >
          <div>
            <p className="text-xl font-bold text-slate-900">
              {Data[index]["questions"]}
            </p>
            <div className="px-5 space-y-2 mt-5">
              {Data[index].answers.map((ans) => (
                <div key={ans.a} className="flex space-x-2 space-x-reverse">
                  <input
                    id={Data[index].id}
                    type="radio"
                    name="age"
                    value={ans.v}
                  />
                  <label htmlFor="age_10" className="text-lg text-black">
                    {ans.a}
                  </label>
                </div>
              ))}
            </div>
          </div>
            <div className={`${warningDiv?'block':'hidden'} text-rose-500 float-right`}>لطفا یک گزینه را انتخاب کنید</div>
          <div className="flex justify-end px-5">
          {index!==0&&<button
              type="button"
              className="ml-2 h-[3.25rem] rounded-xl px-[2rem] flex w-full items-center justify-center bg-[#DFE5E7] text-black sm:w-auto"
              onClick={handlePrevious}
            >
              قبلی
            </button>}
            <button
              type="button"
              className="flex w-full items-center justify-center bg-ahrom text-white shadow-sm hover:opacity-90  sm:w-auto h-[3.25rem] rounded-xl px-[32px]"
              onClick={handleNext}
            >
              بعدی
            </button>
          </div>
        </div>

        <div id="result_container" className="space-y-8 hidden">
          <div className="space-y-5 md:space-y-0 md:justify-between md:space-x-5 md:flex md:flex-row-reverse">
            <div className="lg:w-1/4 bg-quizBox rounded-lg p-5 space-y-5">
              <div>
                <p className="p-0 flex justify-center font-medium">
                  شاخص ریسک‌پذیری شما
                </p>
              </div>
              <div className=" flex justify-center items-center">
                <div id="gauge" className="gauge" style={{ width: "200px" }}>
                  <div className="percentage"></div>
                  <div
                    className="mask"
                    style={{ backgroundColor: "#F9FAFB" }}
                  ></div>
                  <span id="result" className="value"></span>
                </div>
              </div>
            </div>
            <div className="space-y-2 lg:w-3/4 bg-quizBox rounded-lg p-5">
              <p id="result_text_header" className="p-0 font-medium"></p>
              <p id="result_text_main" className="p-0 font-light"></p>
            </div>
          </div>

          <div className=" bg-green-50 p-6 shadow rounded-lg">
            <div className="flex flex-col max-w-5xl mx-auto gap-y-8 text-center  sm:flex-row sm:items-center sm:justify-between">
              <h2
                id="result_text_advise"
                className="text-xl font-bold text-slate-900"
              ></h2>
              <button
                id="redirect_btn"
                className="btn flex items-center justify-center rounded-full bg-ahrom text-white shadow-sm  hover:bg-green/90"
              >
                مشخصات صندوق
              </button>
            </div>
          </div>
        </div>
        <div id="error-message" className="error-message"></div>
      </div>
    </>
  );
}
