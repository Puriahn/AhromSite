"use client";

import { useDispatch, useSelector } from "react-redux";
import { showActions } from "@/lib/slices/OfCan";
import Modal from "@/Components/Common/Modal";

export default function ModalPedar() {
  const showStatus = useSelector((state) => state.Show.showStatus);
  const dispatch = useDispatch();

  function handleHide() {
    dispatch(showActions.status(null));
  }

  function handleMarahel(marhale) {
    dispatch(showActions.status(marhale));
  }
  return (
    <>
      <Modal open={showStatus === "pedarModal"}>
        
          <div id="as_content">
            <div className="bg-slate-200 border-b flex justify-between py-2 px-4 rounded-t-xl">
              <p>مرحله ۲ از ۳</p>
              <div
                onClick={handleHide}
                className="flex items-center"
              >
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
                data-url="https://ahrominvest.ir/credit/father-name-check/5792291"
                method="POST"
                className="space-y-3"
                id="father_name_form_mobile"
                autoComplete="off"
              >
                <div className="space-y-2">
                  <div>
                    <input
                      type="hidden"
                      name="_token"
                      value="VaZQDkjKsKzDGZBDDums6Lbk1hJ96GCJxxeHE8a2"
                    />{" "}
                    <span className="font-light text-base text-gray-600">
                      نام پدر خود را انتخاب کنید.
                    </span>
                  </div>
                  <div className="flex items-center ps-4 border border-gray-200 rounded-lg hover:cursor-pointer">
                    <input
                      id="1"
                      type="radio"
                      value="سجاد"
                      name="father_name"
                      className="w-4 h-4 text-ahrom bg-gray-100 border-gray-300"
                    />
                    <label
                      htmlFor="1"
                      className="w-full py-3 ms-2 text-sm font-medium text-gray-900"
                    >
                      سجاد
                    </label>
                  </div>
                  <div className="flex items-center ps-4 border border-gray-200 rounded-lg hover:cursor-pointer">
                    <input
                      id="2"
                      type="radio"
                      value="اكبر"
                      name="father_name"
                      className="w-4 h-4 text-ahrom bg-gray-100 border-gray-300"
                    />
                    <label
                      htmlFor="2"
                      className="w-full py-3 ms-2 text-sm font-medium text-gray-900"
                    >
                      اكبر
                    </label>
                  </div>
                  <div className="flex items-center ps-4 border border-gray-200 rounded-lg hover:cursor-pointer">
                    <input
                      id="3"
                      type="radio"
                      value="رضا"
                      name="father_name"
                      className="w-4 h-4 text-ahrom bg-gray-100 border-gray-300"
                    />
                    <label
                      htmlFor="3"
                      className="w-full py-3 ms-2 text-sm font-medium text-gray-900"
                    >
                      رضا
                    </label>
                  </div>
                  <div className="flex items-center ps-4 border border-gray-200 rounded-lg hover:cursor-pointer">
                    <input
                      id="4"
                      type="radio"
                      value="مجتبي"
                      name="father_name"
                      className="w-4 h-4 text-ahrom bg-gray-100 border-gray-300"
                    />
                    <label
                      htmlFor="4"
                      className="w-full py-3 ms-2 text-sm font-medium text-gray-900"
                    >
                      مجتبي
                    </label>
                  </div>
                </div>
                <p
                  id="responeText_mobile"
                  className="hidden mt-2 text-sm font-light"
                ></p>
              </form>
              <div className="flex items-center">
                <p
                  id="confirmFatherName_responeText_mobile"
                  className="hidden mt-2 text-sm font-light"
                ></p>
              </div>
              <div>
                <button
                 onClick={() => handleMarahel("tayidModal")}
                  id="button_mobile"
                  className="bg-ahrom w-full font-bold text-base rounded-lg text-white py-1 h-10 px-2 flex justify-center items-center"
                >
                  تایید و ادامه
                </button>
              </div>
            </div>
          </div>
        </Modal>
    </>
  );
}
