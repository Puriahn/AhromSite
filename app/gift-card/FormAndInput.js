"use client";
import { useState } from "react";
import { data } from "./imageData";
import { useSelector } from "react-redux";
import toFarsiNumber from "@/Components/utils/ToFarsiNumber";

export default function FormAndInput() {
  const [totalPrice, setTotalPrice] = useState();
  const [isActiveCheckBox, setIsActiveCheckBox] = useState(false);
  const drawing = useSelector((state) => state.GiftCard.drawing);
  const price = useSelector((state) => state.GiftCard.price);

  function handleCheckBoxClick(){
    setIsActiveCheckBox(!isActiveCheckBox)
  }
  return (
    <>
      <section className="border rounded-xl">
        <div className="flex flex-col-reverse  md:flex-row md:justify-between md:space-x-reverse md:space-x-10  md:items-center md:px-8 md:py-6">
          <section className="w-full px-5 md:px-0 md:w-2/3 space-y-3">
            <form
            autoComplete="off"
              action="https://ahrominvest.ir/order-gift-card"
              id="gift_form"
              method="POST"
              className="space-y-4"
            >
              <input
                type="hidden"
                name="_token"
                value="mjLmsBJejhVZXpDF4SwrHUGTxa9QfU6gt1OQngC3"
              />
              <div className="col-span-12">
                <label
                  htmlFor="full_name"
                  className="block pb-2 text-sm font-medium text-slate-900 after:text-red-600 after:content-['*']"
                >
                  نام و نام خانوادگی خریدار
                </label>
                <input
                  id="full_name"
                  type="text"
                  name="full_name"
                  className="block w-full rounded-xl border border-slate-300 bg-white p-3 text-sm placeholder-slate-400 shadow-sm focus:border-ahrom focus:outline-none focus:ring-1 focus:ring-ahrom"
                  placeholder="نام و نام خانوادگی خود را وارد کنید."
                />
              </div>
              <div id="phone_number_container" className="col-span-12">
                <label
                  htmlFor="phone_number"
                  className="block pb-2 text-sm font-medium text-slate-900 after:text-red-600 after:content-['*']"
                >
                  شماره تماس خریدار
                </label>
                <input
                  id="phone_number"
                  type="text"
                  name="phone_number"
                  className="block w-full rounded-xl border border-slate-300 bg-white p-3 text-sm placeholder-slate-400 shadow-sm focus:border-ahrom focus:outline-none focus:ring-1 focus:ring-ahrom"
                  placeholder="شماره تماس خود را وارد کنید. "
                />
              </div>

              <div id="address_container" className="col-span-12">
                <label
                  htmlFor="address"
                  className="block pb-2 text-sm font-medium text-slate-900 after:text-red-600 after:content-['*']"
                >
                  آدرس
                </label>
                <textarea
                  id="address"
                  style={{ resize: "none" }}
                  name="address"
                  placeholder="آدرس کامل به همراه استان و شهر را وارد کنید."
                  className="block w-full rounded-xl border border-slate-300 bg-white p-3 text-sm placeholder-slate-400 shadow-sm focus:border-ahrom focus:outline-none focus:ring-1 focus:ring-ahrom"
                ></textarea>
              </div>

              <input id="image_input" type="hidden" name="image" />
              {isActiveCheckBox&&<div id="friend_section" className="col-span-12">
                <label
                  htmlFor="friend_phone_number"
                  className="block pb-2 text-sm font-medium text-slate-900 after:text-red-600 after:content-['*']"
                >
                  شماره تماس تحویل گیرنده
                </label>
                <input
                  id="friend_phone_number"
                  type="text"
                  name="friend_phone_number"
                  className="block w-full rounded-xl border border-slate-300 bg-white p-3 text-sm placeholder-slate-400 shadow-sm focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  placeholder="شماره تماس را وارد کنید. "
                />
              </div>}
              <div className="flex justify-between">
                <div className="flex items-center space-x-2 space-x-reverse">
                  <label htmlFor="friend_checkbox">
                    ارسال کارت به شخصی دیگر
                  </label>
                  <input
                  onClick={handleCheckBoxClick}
                    id="friend_checkbox"
                    name="friend_checkbox"
                    type="checkbox"
                    className="w-4 h-4"
                  />
                </div>
              </div>
              
            </form>
          </section>
          <section className="w-full p-5 py-12 md:p-0 md:w-1/3 h-full">
            <div>
              <div>
                <img
                  id="image"
                  className="rounded-lg w-full"
                  alt=""
                  src={data[drawing - 1].src+(price/1000)+'.jpg'}
                />
              </div>
              <div className="space-y-1 mt-3">
                <p id="int_amount_text">
                  مبلغ به عدد:
                  {toFarsiNumber(
                    parseInt(price)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  )}
                </p>
                <p>هزینه صدور کارت: ۱۵،۰۰۰ تومان</p>
                <p>هزینه ارسال: ۳۰،۰۰۰ تومان</p>
              </div>
            </div>
          </section>
        </div>

        <section className="pb-6">
          <div className="flex justify-end px-5 md:px-7">
            <button
              id="gift_btn"
              type="button"
              className="flex font-bold text-lg justify-center items-center w-full  mt-4 md:mt-0 md:max-w-xs h-12 text-18 rounded-lg bg-ahrom text-white hover:bg-opacity-90"
            >
              پرداخت:{" "}
              {toFarsiNumber(
                parseInt(price + 45000)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              )} تومان
            </button>
          </div>
        </section>
      </section>
    </>
  );
}
