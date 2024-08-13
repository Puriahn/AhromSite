"use client";
import { useDispatch, useSelector } from "react-redux";
import qeymatha from "./prices.json";
import { etebarActions } from "./../../lib/slices/Etebar";
import { useState } from "react";
import Month from "./Month";

export default function Prices() {
  const pricee = useSelector((state) => state.EtebarPul.price);
  const dispatch = useDispatch();
  const [warningDiv, setWarningDiv] = useState(false);

  function handleWarningDiv() {
    setWarningDiv(true);
    setTimeout(()=>{handleHide()},3000)
  }
  function handleHide() {
    setWarningDiv(false);
  }

  function toFarsiNumber(n) {
    const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    return n.toString().replace(/\d/g, (x) => farsiDigits[x]);
  }

  function handlePrice(price) {
    dispatch(etebarActions.price(price));
  }

  return (
    <div>
      <div className="space-y-2">
        <div>
          <p className="text-black">مبلغ اعتبار (تومان)</p>
        </div>
        <div
          id="amount_buttons_container"
          className="flex overflow-auto no-scrollbar lg:flex-wrap"
        >
          {qeymatha.map((item) => (
            <button
              className={` ${
                item.price == pricee
                  ? "bg-ahrom text-white"
                  : "bg-gray-200 text-black"
              } text-black rounded-xl py-1 px-2 w-20 text-base font-light me-3  mt-3`}
              onClick={() => handlePrice(item.price)}
              key={item.price}
            >
              {toFarsiNumber(
                item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              )}
            </button>
          ))}
          <button
            onClick={handleWarningDiv}
            style={{ opacity: "0.3" }}
            data-value="100000000"
            className="bg-black  text-white NOVALIDAMOUNT  rounded-xl py-1 px-2 w-20 text-base font-light LoanAmountButton  mt-3"
          >
            ۱۰۰,۰۰۰,۰۰۰
          </button>
        </div>
        <div>
          <p
            id="novalid_text"
            className={`${
              warningDiv ? " visible " : " invisible "
            } text-red-500 text-sm lg:text-base mt-2 h-5`}
          >ظرفیت اعتبار ۱۰۰,۰۰۰,۰۰۰ تومانی تکمیل شده است.</p>
        </div>
      </div>
      <Month/>
    </div>
  );
}
