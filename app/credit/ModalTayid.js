"use client";

import { useDispatch, useSelector } from "react-redux";
import { showActions } from "@/lib/slices/OfCan";
import Modal from "@/Components/Common/Modal";

export default function ModalTayid() {
  const showStatus = useSelector((state) => state.Show.showStatus);
  const dispatch = useDispatch();
  
  function handleHide() {
    dispatch(showActions.status(null));
  }

  function handleMarahel(marhale) {
    
    dispatch(showActions.status(marhale));
  }

  return (
    <Modal open={showStatus === "tayidModal"}>
      <div id="as_content">
        <div className="bg-slate-200 border-b flex justify-between py-2 px-4 rounded-t-xl">
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
          <div className="space-y-3">
            <div className="border border-gray-200 rounded-lg divide-y-2 divide-gray-200 overflow-hidden">
              <div className="flex justify-between py-2 px-3">
                <div>
                  <span className="font-light text-gray-600">نام</span>
                </div>
                <div>
                  <span>پوريا</span>
                </div>
              </div>
              <div className="flex justify-between py-2 px-3">
                <div>
                  <span className="font-light text-gray-600">نام خانوادگی</span>
                </div>
                <div>
                  <span>حاجي نصيري</span>
                </div>
              </div>
              <div className="flex justify-between py-2 px-3">
                <div>
                  <span className="font-light text-gray-600">نام پدر</span>
                </div>
                <div>
                  <span>مجتبي</span>
                </div>
              </div>
              <div className="flex justify-between py-2 px-3">
                <div>
                  <span className="font-light text-gray-600">کد ملی</span>
                </div>
                <div>
                  <span>0110290445</span>
                </div>
              </div>
              <div className="flex justify-between py-2 px-3">
                <div>
                  <span className="font-light text-gray-600">تاریخ تولد</span>
                </div>
                <div>
                  <span>1382/04/18</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-5">
            <button
              onClick={() => handleMarahel("addressModal")}
              id="toAddressButton_mobile"
              data-url="https://ahrominvest.ir/credit/address/5792291"
              className="bg-ahrom w-full font-bold text-base rounded-lg text-white py-1 h-10 px-2 flex justify-center items-center"
            >
              تایید اطلاعات
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
