"use client";

import { useState } from "react";

export default function PhoneInput({ show }) {
  const [phoneNumber, setPhoneNumber] = useState();
  const [warningDiv, setWarningDiv] = useState(false);

  function handlePhoneNumber(event) {
    setPhoneNumber(event.target.value);
  }
  function handleSubmitPhone() {
    var regex = new RegExp("^(\\+98|0)?9\\d{9}$");
    var result = regex.test(phoneNumber);
    if (result) {
      show(true);
    } else {
      handleWarningDiv();
    }
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
    <div
      className="justify-center text-center items-center space-y-2 h-fit p-4 bg-[#F9FAFB] rounded-2xl"
      id="#view"
    >
      <div className="mx-auto px-4 ">
        <p className="mb-9 font-bold text-lg">
          برای شرکت در آزمون شماره تلفن خود را وارد کنید
        </p>
        <div>
          <label
            htmlFor="phoneNumber_input"
            className="block pb-2 text-sm font-medium text-slate-900 after:text-red-600 after:content-['*']"
          >
            شماره موبایل
          </label>
          <input
            id="phoneNumber_input"
            maxLength={11}
            type="text"
            autoComplete="off"
            name="phone_number"
            onChange={handlePhoneNumber}
            className={`block w-full sm:w-72 mx-auto rounded-xl border ${
              warningDiv ? "border-rose-500" : "border-slate-300"
            } bg-white p-3 text-sm placeholder-slate-400 shadow-sm focus:border-ahrom focus:outline-none focus:ring-1 focus:ring-ahrom`}
            placeholder="شماره موبایل خود را وارد کنید."
          />
          <div
            className={`${
              warningDiv ? " visible " : " invisible "
            } text-red-500 mx-auto justify-center pt-3 text-sm flex`}
          >
            {" "}
            شماره موبایل وارد شده معتبر نمی باشد.{" "}
          </div>
        </div>

        <button
          onClick={handleSubmitPhone}
          className="mx-auto mt-3 flex w-full items-center justify-center bg-ahrom text-white shadow-sm hover:opacity-90  sm:w-auto h-[3rem] rounded-xl px-[32px]"
        >
          submit
        </button>
      </div>
    </div>
  );
}
