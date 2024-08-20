"use client";

import { useDispatch, useSelector } from "react-redux";
import { giftActions } from "@/lib/slices/GiftCard";
import qeymatha from "./prices.json";
import { useEffect,useState } from "react";

export default function Prices() {
  const pricee=useSelector(state=>state.GiftCard.price)
  const dispatch = useDispatch();
  const [width, setWidth] = useState('');

  function handlePrice(price) {
    dispatch(giftActions.price(price));
  }

  function toFarsiNumber(n) {
    const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    return n.toString().replace(/\d/g, (x) => farsiDigits[x]);
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
  useEffect(() => {
    handleResize()
    window.addEventListener("resize", handleResize);
  }, [width]);

  return (
    <section className="space-y-4">
      <section>
        <h2>انتخاب مبلغ (تومان)</h2>
      </section>
      <section
        id="amount"
        className="flex space-x-reverse space-x-3 overflow-auto no-scrollbar lg:grid lg:grid-cols-9 lg:gap-2 lg:space-x-0"
      >
        {qeymatha.map((item) => (
            <button
              className={` ${
                item.price == pricee
                  ? "bg-ahrom text-white"
                  : "bg-slate-300 text-black"
              } text-black rounded-xl py-[0.5rem] px-[0.75rem] text-base lg:width-20 font-light me-3  mt-3`}
              onClick={() => handlePrice(item.price)}
              style={{width:width, marginLeft: '10px',marginRight:'0px',flex:'0 0 auto'}}
              key={item.price}
            >
              {toFarsiNumber(
                item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              )}
            </button>
          ))}
        
      </section>
    </section>
  );
}
//for rmoving comma replace(/[.,،]/g, "")
