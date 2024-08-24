"use client";

import { useDispatch, useSelector } from "react-redux";
import { showActions } from "@/lib/slices/OfCan";
import { useState } from "react";

export default function OfCanCodeMeli() {
  const showStatus = useSelector((state) => state.Show.showStatus);
  const dispatch = useDispatch();
  const [warningDiv, setWarningDiv] = useState(false);
  const [personData, setPersonData] = useState({
    codeMeli: '',
    day: "روز",
    month: "ماه",
    year: "سال",
  });

  const cssClass =
    "transform text-green-950 bg-white rounded-xl pb-3 fixed backdrop:backdrop-blur-md bottom-0 left-0 right-0 z-40 w-full px-2 h-fit overflow-y-auto transition-transform duration-300";

  function handleHide() {
    dispatch(showActions.status(null));
  }

  function handleMarahel(marhale) {
    dispatch(showActions.status(marhale));
  }
  function handleState(identifier, e) {
    const finalState = { ...personData, [identifier]: e.target.value };
    setPersonData(finalState);
  }

  function handleSubmit() {
    if(personData.codeMeli!==''&&personData.day!=="روز"&&personData.month!=="ماه"&&personData.year!=="سال"){
      if (personData.codeMeli.length===10){
        handleMarahel("pedar")
      }
    }
    else{handleWarningDiv()}
  }
  
  function handleWarningDiv() {
    setWarningDiv(true);
    setTimeout(()=>{handleHideWarning()},3000)
  }
  function handleHideWarning() {
    setWarningDiv(false)
  }

  return (
    <div
      className={`${
        showStatus === "codeMeli" ? "translate-y-0 " : "translate-y-full "
      } ${cssClass}`}
    >
      <div className="flex justify-between rounded-t-lg py-3 dark:bg-navy-800  border-b">
        <h3 className="text-base  text-slate-700 dark:text-navy-100">
          مرحله ۲ از ۳
        </h3>
        <div className="flex items-center" data-bs-dismiss="modal">
          <button className="float-left" onClick={handleHide}>
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
      </div>
      <div className="py-3">
        <form
        autoComplete="off"
          data-url="https://ahrominvest.ir/credit/send-otp"
          method="POST"
          id="sendOtpForm"
        >
          <div className="space-y-2">
            <div className="space-y-2">
              <span className="block text-base font-light text-gray-600">
                کد ملی
              </span>{" "}
            </div>
            <input
              onChange={(event) => handleState("codeMeli", event)}
              name="national_code"
              id="nationalCode_input_mobile"
              disabled=""
              className={`border ${(warningDiv&&personData.codeMeli.length!==10)?'border-rose-500':'border-slate-300'} rounded-lg py-2 px-3 focus:border-ahrom focus:outline-none focus:ring-1 focus:ring-ahrom shadow-sm w-full`}
              type="text"
              placeholder="کد ملی"
            />
          </div>
          <div className="space-y-2">
            <span className="mt-2 block text-base font-light text-gray-600">
              تاریخ تولد
            </span>
            <div className="flex shadow-sm">
              <div
                id="day_container"
                className={`relative w-1/3 bg-white rounded-r-lg border  ${personData.day==='روز'&&warningDiv?'border-rose-500':'border-slate-300'} py-2 px-3 text-sm placeholder-slate-400 shadow-sm focus:border-ahrom focus:outline-none`}
              >
                <select
                  onChange={(event) => handleState("day", event)}
                  name="day"
                  id="day_mobile"
                  disabled=""
                  required=""
                  autoComplete="off"
                  className="w-full appearance-none"
                >
                  <option value="" disabled="" hidden="">
                    روز
                  </option>
                  <option value="1">۱</option>
                  <option value="2">۲</option>
                  <option value="3">۳</option>
                  <option value="4">۴</option>
                  <option value="5">۵</option>
                  <option value="6">۶</option>
                  <option value="7">۷</option>
                  <option value="8">۸</option>
                  <option value="9">۹</option>
                  <option value="10">۱۰</option>
                  <option value="11">۱۱</option>
                  <option value="12">۱۲</option>
                  <option value="13">۱۳</option>
                  <option value="14">۱۴</option>
                  <option value="15">۱۵</option>
                  <option value="16">۱۶</option>
                  <option value="17">۱۷</option>
                  <option value="18">۱۸</option>
                  <option value="19">۱۹</option>
                  <option value="20">۲۰</option>
                  <option value="21">۲۱</option>
                  <option value="22">۲۲</option>
                  <option value="23">۲۳</option>
                  <option value="24">۲۴</option>
                  <option value="25">۲۵</option>
                  <option value="26">۲۶</option>
                  <option value="27">۲۷</option>
                  <option value="28">۲۸</option>
                  <option value="29">۲۹</option>
                  <option value="30">۳۰</option>
                  <option value="31">۳۱</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-black h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5.305 7.695a.999.999 0 0 1 1.414 0L10 11.075l3.28-3.38a.997.997 0 0 1 1.32-.083c.12.097.18.23.18.368s-.06.272-.18.368l-4 4a.997.997 0 0 1-1.32.083l-4-4a.999.999 0 0 1 0-1.416z"></path>
                  </svg>
                </div>
              </div>
              <div
                id="month_container"
                className={`relative w-1/3 bg-white rounded-r-lg border  ${personData.month==='ماه'&&warningDiv?'border-rose-500':'border-slate-300'} py-2 px-3 text-sm placeholder-slate-400 shadow-sm focus:border-ahrom focus:outline-none`}
              >
                <select
                  onChange={(event) => handleState("month", event)}
                  name="month"
                  id="month_mobile"
                  disabled=""
                  required=""
                  autoComplete="off"
                  className="w-full"
                >
                  <option value="" disabled="" hidden="">
                    ماه
                  </option>
                  <option value="1">فروردین</option>
                  <option value="2">اردیبهشت</option>
                  <option value="3">خرداد</option>
                  <option value="4">تیر</option>
                  <option value="5">مرداد</option>
                  <option value="6">شهریور</option>
                  <option value="7">مهر</option>
                  <option value="8">آبان</option>
                  <option value="9">آذر</option>
                  <option value="10">دی</option>
                  <option value="11">بهمن</option>
                  <option value="12">اسفند</option>
                </select>
              </div>
              <div
                id="year_container"
                className={`relative w-1/3 bg-white rounded-r-lg border  ${personData.year==='سال'&&warningDiv?'border-rose-500':'border-slate-300'} py-2 px-3 text-sm placeholder-slate-400 shadow-sm focus:border-ahrom focus:outline-none`}
              >
                <select
                  onChange={(event) => handleState("year", event)}
                  name="year"
                  id="year_mobile"
                  disabled=""
                  required=""
                  autoComplete="off"
                  className="w-full"
                >
                  <option value="" disabled="" hidden="">
                    سال
                  </option>
                  <option value="1385">۱۳۸۵</option>
                  <option value="1384">۱۳۸۴</option>
                  <option value="1383">۱۳۸۳</option>
                  <option value="1382">۱۳۸۲</option>
                  <option value="1381">۱۳۸۱</option>
                  <option value="1380">۱۳۸۰</option>
                  <option value="1379">۱۳۷۹</option>
                  <option value="1378">۱۳۷۸</option>
                  <option value="1377">۱۳۷۷</option>
                  <option value="1376">۱۳۷۶</option>
                  <option value="1375">۱۳۷۵</option>
                  <option value="1374">۱۳۷۴</option>
                  <option value="1373">۱۳۷۳</option>
                  <option value="1372">۱۳۷۲</option>
                  <option value="1371">۱۳۷۱</option>
                  <option value="1370">۱۳۷۰</option>
                  <option value="1369">۱۳۶۹</option>
                  <option value="1368">۱۳۶۸</option>
                  <option value="1367">۱۳۶۷</option>
                  <option value="1366">۱۳۶۶</option>
                  <option value="1365">۱۳۶۵</option>
                  <option value="1364">۱۳۶۴</option>
                  <option value="1363">۱۳۶۳</option>
                  <option value="1362">۱۳۶۲</option>
                  <option value="1361">۱۳۶۱</option>
                  <option value="1360">۱۳۶۰</option>
                  <option value="1359">۱۳۵۹</option>
                  <option value="1358">۱۳۵۸</option>
                  <option value="1357">۱۳۵۷</option>
                  <option value="1356">۱۳۵۶</option>
                  <option value="1355">۱۳۵۵</option>
                  <option value="1354">۱۳۵۴</option>
                  <option value="1353">۱۳۵۳</option>
                  <option value="1352">۱۳۵۲</option>
                  <option value="1351">۱۳۵۱</option>
                  <option value="1350">۱۳۵۰</option>
                  <option value="1349">۱۳۴۹</option>
                  <option value="1348">۱۳۴۸</option>
                  <option value="1347">۱۳۴۷</option>
                  <option value="1346">۱۳۴۶</option>
                  <option value="1345">۱۳۴۵</option>
                  <option value="1344">۱۳۴۴</option>
                  <option value="1343">۱۳۴۳</option>
                  <option value="1342">۱۳۴۲</option>
                  <option value="1341">۱۳۴۱</option>
                  <option value="1340">۱۳۴۰</option>
                  <option value="1339">۱۳۳۹</option>
                  <option value="1338">۱۳۳۸</option>
                  <option value="1337">۱۳۳۷</option>
                  <option value="1336">۱۳۳۶</option>
                  <option value="1335">۱۳۳۵</option>
                  <option value="1334">۱۳۳۴</option>
                  <option value="1333">۱۳۳۳</option>
                  <option value="1332">۱۳۳۲</option>
                  <option value="1331">۱۳۳۱</option>
                  <option value="1330">۱۳۳۰</option>
                  <option value="1329">۱۳۲۹</option>
                  <option value="1328">۱۳۲۸</option>
                  <option value="1327">۱۳۲۷</option>
                  <option value="1326">۱۳۲۶</option>
                  <option value="1325">۱۳۲۵</option>
                  <option value="1324">۱۳۲۴</option>
                  <option value="1323">۱۳۲۳</option>
                  <option value="1322">۱۳۲۲</option>
                  <option value="1321">۱۳۲۱</option>
                  <option value="1320">۱۳۲۰</option>
                  <option value="1319">۱۳۱۹</option>
                  <option value="1318">۱۳۱۸</option>
                  <option value="1317">۱۳۱۷</option>
                  <option value="1316">۱۳۱۶</option>
                  <option value="1315">۱۳۱۵</option>
                  <option value="1314">۱۳۱۴</option>
                  <option value="1313">۱۳۱۳</option>
                  <option value="1312">۱۳۱۲</option>
                  <option value="1311">۱۳۱۱</option>
                  <option value="1310">۱۳۱۰</option>
                  <option value="1309">۱۳۰۹</option>
                  <option value="1308">۱۳۰۸</option>
                  <option value="1307">۱۳۰۷</option>
                  <option value="1306">۱۳۰۶</option>
                  <option value="1305">۱۳۰۵</option>
                  <option value="1304">۱۳۰۴</option>
                  <option value="1303">۱۳۰۳</option>
                  <option value="1302">۱۳۰۲</option>
                  <option value="1301">۱۳۰۱</option>
                  <option value="1300">۱۳۰۰</option>
                </select>
              </div>
              <input
                type="hidden"
                name="_token"
                value="VaZQDkjKsKzDGZBDDums6Lbk1hJ96GCJxxeHE8a2"
              />{" "}
            </div>
          </div>
          <div className={`${
              warningDiv ? " block " : " hidden "
            } text-red-500 pt-3 text-sm lg:text-base`}>  کد ملی معتبر نمی باشد.</div>
        </form>
        <div className="flex justify-between mt-5">
          <button
            onClick={handleSubmit}
            id="send_code_button"
            className="text-white w-full bg-ahrom py-2 flex justify-center rounded-xl "
          >
            ثبت
          </button>
        </div>
      </div>
    </div>
  );
}
