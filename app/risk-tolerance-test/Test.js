"use client";

import { useState } from "react";
import Data from "./Test-Data.json";
import Result from "./result";

export default function TestQuiz() {
  const [index, setIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [warningDiv, setWarningDiv] = useState(false);

  function handleChange(event) {
    const finalState = [...userAnswers];
    finalState[index] = { id: event.target.id, value: event.target.value };
    setUserAnswers(finalState);
  }

  function handleNext() {
    if (index === 17) {
      setShowResult(true);
      return;
    } else if (userAnswers.length > index) {
      setIndex((prevS) => prevS + 1);
    } else {
      handleWarningDiv();
    }
  }

  function handlePrevious() {
    setIndex((prevS) => prevS - 1);
  }

  function handleWarningDiv() {
    setWarningDiv(true);
    setTimeout(() => {
      handleHideWarning();
    }, 3000);
  }
  function handleHideWarning() {
    setWarningDiv(false);
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
          className="form-section active space-y-2 bg-[#F9FAFB] p-4 rounded-2xl"
          id="#view"
        >
          <div>
            <p className="text-xl font-bold text-slate-900">
              {Data[index]["questions"]}
            </p>
            <div className="px-5 space-y-2 mt-5">
              {Data[index].answers.map((ans, ind) => (
                <div
                  key={ans.a + ind}
                  className="flex space-x-2 space-x-reverse"
                >
                  <input
                    onChange={handleChange}
                    checked={
                      userAnswers[index] !== undefined &&
                      parseFloat(userAnswers[index].value) === ans.v
                    }
                    id={Data[index].id}
                    type="radio"
                    name={Data[index]["questions"]}
                    value={ans.v}
                  />
                  <label
                    htmlFor={Data[index]["questions"]}
                    className="text-lg text-black"
                  >
                    {ans.a}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div
            className={`${
              warningDiv ? "block" : "hidden"
            } text-rose-500 float-right`}
          >
            لطفا یک گزینه را انتخاب کنید
          </div>
          <div className="flex justify-end px-5">
            {index !== 0 && (
              <button
                type="button"
                className="ml-2 h-[3.25rem] rounded-xl px-[2rem] flex w-full items-center justify-center bg-[#DFE5E7] text-black sm:w-auto"
                onClick={handlePrevious}
              >
                قبلی
              </button>
            )}
            <button
              type="button"
              className="flex w-full items-center justify-center bg-ahrom text-white shadow-sm hover:opacity-90  sm:w-auto h-[3.25rem] rounded-xl px-[32px]"
              onClick={handleNext}
            >
              {index === 17 ? "ثبت" : "بعدی"}
            </button>
          </div>
        </div>

        {showResult && <Result data={userAnswers} />}
      </div>
    </>
  );
}
