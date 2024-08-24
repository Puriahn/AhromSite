"use client";

import { useDispatch, useSelector } from "react-redux";
import { showActions } from "@/lib/slices/OfCan";
import { useEffect, useState } from "react";
import Timer from "../Timer";

export default function OfCanPhone() {
  const showStatus = useSelector((state) => state.Show.showStatus);
  const dispatch = useDispatch();

  const [showTimer, setShowTimer] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState();
  const [warningDiv, setWarningDiv] = useState(false);

  const cssClass =
    "transform text-green-950 bg-white rounded-xl pb-3 fixed backdrop:backdrop-blur-md bottom-0 left-0 right-0 z-40 w-full px-2 h-fit overflow-y-auto transition-transform duration-300";

  function handleHide() {
    dispatch(showActions.status(null));
  }

  function handleMarahel(marhale) {
    if (marhale === "codePhone") {
      setShowTimer(true);
    }
    dispatch(showActions.status(marhale));
  }

  function handlePhoneNumber(event) {
    setPhoneNumber(event.target.value);
  }

  function handleSubmitPhone() {
    var regex = new RegExp("^(\\+98|0)?9\\d{9}$");
    var result = regex.test(phoneNumber);
    if (result) {
      handleMarahel("codePhone");
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
    <>
      <div
        className={`${
          showStatus === "marhaleYek" ? "translate-y-0 " : "translate-y-full "
        } ${cssClass}`}
      >
        <div className="flex justify-between rounded-t-lg py-3 dark:bg-navy-800  border-b">
          <h3 className="text-base  text-slate-700 dark:text-navy-100">
            مرحله ۱ از ۳
          </h3>
          <div className="flex items-center" data-bs-dismiss="modal">
            <button className="float-left" onClick={handleHide}>
              <svg
                className="w-4 h-4 fill-black cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000"
                viewBox="0 0 384 512"
              >
                <path d="M378.4 71.4c8.5-10.1 7.2-25.3-2.9-33.8s-25.3-7.2-33.8 2.9L192 218.7 42.4 40.6C33.9 30.4 18.7 29.1 8.6 37.6S-2.9 61.3 5.6 71.4L160.7 256 5.6 440.6c-8.5 10.2-7.2 25.3 2.9 33.8s25.3 7.2 33.8-2.9L192 293.3 341.6 471.4c8.5 10.1 23.7 11.5 33.8 2.9s11.5-23.7 2.9-33.8L223.3 256l155-184.6z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="py-3">
          <form
            autoComplete="off"
            data-url="https://ahrominvest.ir/credit/send-otp"
            method="POST"
            id="sendOtpForm"
          >
            <input
              type="hidden"
              name="_token"
              value="NSX1RFWLELVs3z21Shfyt3H1wHYnMzCs48w8hXWg"
            />
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
              name="phone_number"
              onChange={handlePhoneNumber}
              className={`block w-full rounded-xl border ${
                warningDiv ? "border-rose-500" : "border-slate-300"
              } bg-white p-3 text-sm placeholder-slate-400 shadow-sm focus:border-ahrom focus:outline-none focus:ring-1 focus:ring-ahrom`}
              placeholder="شماره موبایل خود را وارد کنید."
            />
            <div
              className={`${
                warningDiv ? " block " : " hidden "
              } text-red-500 pt-3 text-sm lg:text-base`}
            >
              {" "}
              شماره موبایل وارد شده معتبر نمی باشد.{" "}
            </div>
          </form>
          <div className="flex justify-between mt-5">
            <button
              onClick={handleSubmitPhone}
              id="send_code_button"
              className="text-white w-full bg-ahrom py-2 flex justify-center rounded-xl "
            >
              ثبت
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${
          showStatus === "codePhone" ? "translate-y-0 " : "translate-y-full "
        } ${cssClass}`}
      >
        <div className="flex justify-between rounded-t-lg py-3 dark:bg-navy-800  border-b">
          <h3 className="text-base  text-slate-700 dark:text-navy-100">
            مرحله ۱ از ۳
          </h3>
          <div className="flex items-center" data-bs-dismiss="modal">
            <button className="float-left" onClick={handleHide}>
              <svg
                className="w-4 h-4 fill-black cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000"
                viewBox="0 0 384 512"
              >
                <path d="M378.4 71.4c8.5-10.1 7.2-25.3-2.9-33.8s-25.3-7.2-33.8 2.9L192 218.7 42.4 40.6C33.9 30.4 18.7 29.1 8.6 37.6S-2.9 61.3 5.6 71.4L160.7 256 5.6 440.6c-8.5 10.2-7.2 25.3 2.9 33.8s25.3 7.2 33.8-2.9L192 293.3 341.6 471.4c8.5 10.1 23.7 11.5 33.8 2.9s11.5-23.7 2.9-33.8L223.3 256l155-184.6z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="py-3">
          <form
            data-url="https://ahrominvest.ir/credit/send-otp"
            method="POST"
            id="sendOtpForm"
          >
            <input
              type="hidden"
              name="_token"
              value="NSX1RFWLELVs3z21Shfyt3H1wHYnMzCs48w8hXWg"
            />
            <label
              htmlFor="phoneNumber_input"
              className="block pb-2 text-sm font-medium text-slate-900 after:text-red-600 after:content-['*']"
            >
              کد ارسال شده به شماره {phoneNumber} را وارد کنید.
            </label>
            <input
              id="phoneNumber_input"
              type="text"
              name="phone_number"
              className="block w-full rounded-xl border border-slate-300 bg-white p-3 text-sm placeholder-slate-400 shadow-sm focus:border-ahrom focus:outline-none focus:ring-1 focus:ring-ahrom"
              placeholder="کد تایید را وارد کنید"
            />
            <div className="flex items-center">
              <p
                id="phoneNumber_responeText"
                className="hidden text-red-500 pt-3 text-sm"
              >
                کد تایید وارد شده معتبر نمی‌باشد.
              </p>
            </div>
          </form>
          {showTimer && <Timer finished={setShowTimer} />}
          {!showTimer && (
            <button className="pt-3"> ارسال مجدد کد تایید </button>
          )}
          <div className="flex justify-between mt-5">
            <button
              onClick={() => handleMarahel("codeMeli")}
              id="send_code_button"
              className="text-white w-full bg-ahrom py-2 flex justify-center rounded-xl "
            >
              ثبت
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
