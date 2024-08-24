"use client";

import { useDispatch, useSelector } from "react-redux";
import { showActions } from "@/lib/slices/OfCan";

export default function OfCanAddress() {
  const showStatus = useSelector((state) => state.Show.showStatus);
  const dispatch = useDispatch();

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
  return (
    <div
      className={`${
        showStatus === "address" ? "translate-y-0 " : "translate-y-full "
      } ${cssClass}`}
    >
      <div id="as_content">
        <div className="bg-white border-b flex justify-between py-2 px-4 rounded-t-xl">
          <p>مرحله ۲ از ۳</p>
          <div onClick={handleHide} className="flex items-center">
            <svg
            
              className="w-4 h-4 fill-black cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000"
              viewBox="0 0 384 512"
            >
              <path d="M378.4 71.4c8.5-10.1 7.2-25.3-2.9-33.8s-25.3-7.2-33.8 2.9L192 218.7 42.4 40.6C33.9 30.4 18.7 29.1 8.6 37.6S-2.9 61.3 5.6 71.4L160.7 256 5.6 440.6c-8.5 10.2-7.2 25.3 2.9 33.8s25.3 7.2 33.8-2.9L192 293.3 341.6 471.4c8.5 10.1 23.7 11.5 33.8 2.9s11.5-23.7 2.9-33.8L223.3 256l155-184.6z"></path>
            </svg>
          </div>
        </div>
        <div className="bg-white h-full p-3 space-y-3">
          <form
            data-url="https://ahrominvest.ir/credit/create-address/5792291"
            method="POST"
            className="space-y-3"
            id="address_form"
            autoComplete="off"
          >
            <div className="space-y-2">
              <span className="block text-base font-light text-gray-600">
                استان
              </span>
              <div
                id="province_container"
                className="border border-gray-300 rounded-lg py-2 px-3 focus:border-ahrom focus:outline-none focus:ring-1 focus:ring-ahrom shadow-sm w-full"
              >
                <select
                  id="province"
                  name="province"
                  required=""
                  autoComplete="off"
                  className="w-full"
                >
                  <option value="" disabled=""  hidden="">
                    استان را انتخاب کنید
                  </option>
                  <option value="1">آذربایجان شرقی</option>
                  <option value="2">آذربایجان غربی</option>
                  <option value="3">اردبیل</option>
                  <option value="4">اصفهان</option>
                  <option value="5">البرز</option>
                  <option value="6">ایلام</option>
                  <option value="7">بوشهر</option>
                  <option value="8">تهران</option>
                  <option value="9">چهارمحال وبختیاری</option>
                  <option value="10">خراسان جنوبی</option>
                  <option value="11">خراسان رضوی</option>
                  <option value="12">خراسان شمالی</option>
                  <option value="13">خوزستان</option>
                  <option value="14">زنجان</option>
                  <option value="15">سمنان</option>
                  <option value="16">سیستان وبلوچستان</option>
                  <option value="17">فارس</option>
                  <option value="18">قزوین</option>
                  <option value="19">قم</option>
                  <option value="20">کردستان</option>
                  <option value="21">کرمان</option>
                  <option value="22">کرمانشاه</option>
                  <option value="23">کهگیلویه وبویراحمد</option>
                  <option value="24">گلستان</option>
                  <option value="25">گیلان</option>
                  <option value="26">لرستان</option>
                  <option value="27">مازندران</option>
                  <option value="28">مرکزی</option>
                  <option value="29">هرمزگان</option>
                  <option value="30">همدان</option>
                  <option value="31">یزد</option>
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <span className="block text-base font-light text-gray-600">شهر</span>
              <div
                id="city_container"
                className="border border-gray-300 rounded-lg py-2 px-3 focus:border-ahrom focus:outline-none focus:ring-1 focus:ring-ahrom shadow-sm w-full"
              >
                <select
                  name="city"
                  id="city"
                  required=""
                  autoComplete="off"
                  className="w-full"
                >
                  <option value="" disabled=""  hidden="">
                    شهر را انتخاب کنید
                  </option>
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <span className="block text-base font-light text-gray-600">آدرس</span>
              <textarea
                name="address"
                id="address"
                placeholder="آدرس کامل خود را به همراه پلاک و واحد وارد کنید."
                className="border border-gray-300 rounded-lg py-2 px-3 focus:border-ahrom focus:outline-none focus:ring-1 focus:ring-ahrom shadow-sm w-full"
                cols="30"
                rows="5"
                style={{resize: "none"}}
              ></textarea>
            </div>
            <input
              type="hidden"
              name="_token"
              value="VaZQDkjKsKzDGZBDDums6Lbk1hJ96GCJxxeHE8a2"
            />{" "}
          </form>
          <div className="space-y-4">
            <div className="w-full bg-red-500 flex justify-center items-center text-white text-sm rounded-lg py-2 px-3">
              <span>
                در صورت نقص در آدرس اعلامی اطلاعات شما تایید نخواهد شد.
              </span>
            </div>
            <div>
              <button
                id="button"
                className="bg-ahrom w-full font-bold text-base rounded-lg text-white py-1 h-10 px-2 flex justify-center items-center"
              >
                ثبت
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
