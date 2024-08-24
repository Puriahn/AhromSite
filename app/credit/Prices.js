"use client";
import { useDispatch, useSelector } from "react-redux";
import qeymatha from "./prices.json";
import { etebarActions } from "./../../lib/slices/Etebar";
import { useEffect, useState } from "react";
import Month from "./Month";

export default function Prices() {
  const pricee = useSelector((state) => state.EtebarPul.price);
  const dispatch = useDispatch();
  const [warningDiv, setWarningDiv] = useState(false);
  const [width, setWidth] = useState('');
  useEffect(() => {
    handleResize()
    window.addEventListener("resize", handleResize);
  }, [width]);
  function handleWarningDiv() {
    setWarningDiv(true);
    setTimeout(() => {
      handleHide();
    }, 3000);
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

  function handleResize() {
    let windowWidth = window.innerWidth;
    if (window.innerWidth >= 1024) return;
    let a = 3.5;
    let f = 14;
    switch (true) {
      case windowWidth >= 410 && windowWidth < 515:
        a = 4.5;
        f = 16;
        break;
      case windowWidth >= 515 && windowWidth < 670:
        a = 5.5;
        f = 16;
        break;
      case windowWidth >= 670 && windowWidth < 750:
        a = 6.5;
        f = 16;
        break;
      case windowWidth >= 750 && windowWidth < 900:
        a = 7.5;
        f = 16;
        break;
      case windowWidth >= 900 && windowWidth < 1024:
        a = 8.5;
        f = 16;
        break;
    }
    let buttonWidth = (windowWidth-40 - (4 * 16)) / a;
    setWidth(buttonWidth);
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
              } text-black rounded-xl py-1 px-2 text-base lg:width-20 font-light me-3  mt-3`}
              onClick={() => handlePrice(item.price)}
              style={{width:width, marginLeft: '10px',marginRight:'0px',flex:'0 0 auto'}}
              key={item.price}
            >
              {toFarsiNumber(
                item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              )}
            </button>
          ))}
          <button
            onClick={handleWarningDiv}
            style={{ opacity: "0.3",width:width, marginLeft: '10px',marginRight:'0px',flex:'0 0 auto' }}
            data-value="100000000"
            className="bg-black  text-white NOVALIDAMOUNT  rounded-xl py-1 px-2 text-base font-light LoanAmountButton  mt-3"
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
          >
            ظرفیت اعتبار ۱۰۰,۰۰۰,۰۰۰ تومانی تکمیل شده است.
          </p>
        </div>
      </div>
      <Month />
    </div>
  );
}
