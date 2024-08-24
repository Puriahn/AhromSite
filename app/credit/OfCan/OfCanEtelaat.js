"use client";

import { useDispatch, useSelector } from "react-redux";
import { showActions } from "@/lib/slices/OfCan";
import { useState } from "react";

export default function OfCanEtelaat() {
  const showStatus = useSelector((state) => state.Show.showStatus);
  const dispatch = useDispatch();

  const pricee = useSelector((state) => state.EtebarPul.price);
  const month = useSelector((state) => state.EtebarPul.month);
  const x = Math.ceil(pricee / month / 1000);

  const [checkBoxIsActive,setCheckBoxIsActive]=useState(false)
  const [warningDiv, setWarningDiv] = useState(false);

  const cssClass =
    "transform text-green-950 bg-white rounded-xl pb-3 fixed backdrop:backdrop-blur-md bottom-0 left-0 right-0 z-40 w-full px-2 h-fit overflow-y-auto transition-transform duration-300";

  function toFarsiNumber(n) {
    const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    return n.toString().replace(/\d/g, (x) => farsiDigits[x]);
  }

  function handleHide() {
    dispatch(showActions.status(null));
  }
  function handleWarningDiv() {
    setWarningDiv(true);
    setTimeout(()=>{handleHideWarning()},3000)
  }
  function handleHideWarning() {
    setWarningDiv(false)
  }

  function handleMarahel(marhale) {
    if(marhale==='marhaleYek'&&!checkBoxIsActive){
        handleWarningDiv()
        return
    }
    dispatch(showActions.status(marhale));
  }

  function handleCheckBox(){
    setCheckBoxIsActive(!checkBoxIsActive)
  }
  return (
    <div
      className={`${
        showStatus === "etelaat" ? "translate-y-0 " : "translate-y-full "
      } ${cssClass}`}
    >
      <div className="flex justify-between border-b py-2">
        <p>دریافت اعتبار</p>
        <button className="float-left justify-end" onClick={() => handleHide()}>
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
      <div className="space-y-4 mt-2">
        <div>
          <div className="flex items-center justify-center">
            <p className="text-18 font-medium text-black">
              اعتبار سرمایه گذاری
            </p>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-18 text-2xl font-medium text-black whitespace-nowrap flex">
              <span id="selectedAmountHd">
                {toFarsiNumber(
                  pricee.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                )}
              </span>{" "}
              <span className="text-slate-500 text-xs flex items-center ms-1">
                تومان
              </span>
            </p>
          </div>
        </div>
        <div className="divide-y-2 border-b-2">
          <div className="py-2 flex justify-between">
            <p className="text-black text-xs flex items-center">
              مدت بازپرداخت
            </p>
            <p className="text-black text-xs flex items-center">
              <span
                id="selectedDuration"
                className="font-semibold text-lg me-1"
              >
                {toFarsiNumber(
                  month.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                )}
              </span>{" "}
              ماه
            </p>
          </div>
          <div className="py-2 flex justify-between">
            <p className="text-black text-xs flex items-center">
              اعتبار دریافتی
            </p>
            <p className="text-black text-xs flex items-center">
              <span id="selectedAmount" className="font-semibold text-lg me-1">
                {toFarsiNumber(
                  pricee.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                )}
              </span>{" "}
              تومان
            </p>
          </div>
          <div className="py-2 flex justify-between">
            <p className="text-black text-xs flex items-center">قسط هر ماه</p>
            <p className="text-black text-xs flex items-center">
              <span id="result" className="font-semibold text-lg me-1">
                {toFarsiNumber(
                  (x * 1000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                )}
              </span>{" "}
              تومان
            </p>
          </div>
          <div className="py-2 flex justify-between">
            <p className="text-black text-xs flex items-center">بهره اعتبار</p>
            <p className="text-black text-xs flex items-center">
              <span id="result" className="font-semibold text-lg me-1">
                ۰
              </span>{" "}
              درصد
            </p>
          </div>
          <div className="py-2 flex justify-between">
            <p className="text-black text-xs flex items-center">
              مبلغ بازپرداخت نهایی
            </p>
            <p className="text-black text-xs flex items-center">
              <span
                id="selectedAmountBm"
                className="font-semibold text-lg me-1"
              >
                {toFarsiNumber(
                  pricee.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                )}
              </span>{" "}
              تومان
            </p>
          </div>
        </div>
        <div className="inline-flex items-center py-4 text-blue-gray-900">
          <input
          onClick={handleCheckBox}
            type="checkbox"
            className="ml-2 peer relative h-5 w-5 cursor-pointer check text-center text-white border-black appearance-none rounded-md border transition-all checked:border-ahrom checked:bg-ahrom"
          />
          <span className="text-gray-700 font-light">تمام</span>{" "}
          <button onClick={()=>handleMarahel('qarardad')} className="mx-1 whitespace-nowrap text-sm antialiased font-medium leading-relaxed text-blue-500 transition-colors hover:text-blue-700 inline-block">
            قوانین و شرایط دریافت اعتبار
          </button>{" "}
          <span className="text-gray-700 font-light"> می پذیرم</span>
        </div>
        <div className={`${
              warningDiv ? " block " : " hidden "
            } text-red-500 text-sm lg:text-base`}>پذیرش قوانین و شرایط دریافت اعتبار الزامی می باشد.</div>
        <button
          onClick={() => handleMarahel("marhaleYek")}
          className=" text-lg font-bold flex justify-center items-center w-full h-10 lg:h-12 lg:text-18 rounded-lg bg-ahrom text-white hover:bg-opacity-90"
        >
          درخواست اعتبار
        </button>
      </div>
    </div>
  );
}
