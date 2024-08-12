"use client";

import { useDispatch, useSelector } from "react-redux";
import { giftActions } from "@/lib/slices/GiftCard";
import qeymatha from "./prices.json";

export default function Prices() {
  const pricee=useSelector(state=>state.GiftCard.price)
  const dispatch = useDispatch();

  function handlePrice(price) {
    dispatch(giftActions.price(price));
  }

  function toFarsiNumber(n) {
    const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    return n.toString().replace(/\d/g, (x) => farsiDigits[x]);
  }

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
          <button className={` ${item.price==pricee ? 'bg-ahrom text-white':'bg-slate-300 text-black'}  whitespace-nowrap   py-2 px-3 text-18 rounded-xl`} onClick={() => handlePrice(item.price)} key={item.price}>
            {toFarsiNumber(
                    item.price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  )}
          </button>
        ))}
        
      </section>
    </section>
  );
}
//for rmoving comma replace(/[.,،]/g, "")
