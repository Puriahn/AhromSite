'use client'

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { showActions } from "@/lib/slices/OfCan";
import toFarsiNumber from "@/Components/utils/ToFarsiNumber";

export default function LeftPart() {
  const [checkBoxIsActive,setCheckBoxIsActive]=useState(false)
  const [warningDiv, setWarningDiv] = useState(false);
  const dispatch = useDispatch();

  const pricee = useSelector((state) => state.EtebarPul.price);
  const month = useSelector((state) => state.EtebarPul.month);
  const x=Math.ceil((pricee/month)/1000)

  

  
  function handleWarningDiv() {
    setWarningDiv(true);
    setTimeout(()=>{handleHideWarning()},3000)
  }
  function handleHideWarning() {
    setWarningDiv(false)
  }

  function handleMarahel(marhale) {
    if(marhale==='marhaleYekModal'&&!checkBoxIsActive){
        handleWarningDiv()
        return
    }
    dispatch(showActions.status(marhale));
  }

  function handleCheckBox(){
    setCheckBoxIsActive(!checkBoxIsActive)
  }


  return (
    <div className="w-1/3 h-[460px] lg:flex flex-col justify-between bg-white py-3 px-4 rounded-lg transition-transform sticky top-10 hidden">
      <div className="space-y-2">
        <div>
          <div className="flex items-center justify-center">
            <p className="text-18 font-medium text-black">
              اعتبار سرمایه گذاری
            </p>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-18 text-2xl font-medium text-black whitespace-nowrap flex">
              <span id="selectedAmountHd">{toFarsiNumber(
                    pricee
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  )}</span>{" "}
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
                    month
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
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
                    pricee
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
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
                   (x*1000)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
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
                    pricee
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  )}
              </span>{" "}
              تومان
            </p>
          </div>
        </div>
        <div className="inline-flex items-center pt-4 text-blue-gray-900">
          <input
          onClick={handleCheckBox}
            type="checkbox"
            className="ml-2 peer relative h-5 w-5 cursor-pointer check text-center text-white border-black appearance-none rounded-md border transition-all checked:border-ahrom checked:bg-ahrom"
          />
          <span className="text-gray-700 font-medium text-sm">تمام</span>{" "}
          <button onClick={()=>handleMarahel('qarardadModal')} className="mx-1 whitespace-nowrap text-sm antialiased font-medium leading-relaxed text-blue-500 transition-colors hover:text-blue-700 inline-block">
            قوانین و شرایط دریافت اعتبار
          </button>{" "}
          <span className="text-gray-700 font-medium text-sm">را می پذیرم </span>
        </div>
        <div className={`${
              warningDiv ? " visible " : " invisible "
            } text-red-500 text-sm`}>پذیرش قوانین و شرایط دریافت اعتبار الزامی می باشد.</div>
        <button onClick={()=>handleMarahel('marhaleYekModal')} className="text-lg font-bold flex justify-center items-center w-full btn h-10 lg:h-12 lg:text-18 rounded-lg bg-ahrom text-white hover:bg-opacity-90">
          درخواست اعتبار
        </button>
      </div>
    </div>
  );
}
