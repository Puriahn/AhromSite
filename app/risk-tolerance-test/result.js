'use client'

import Link from "next/link";
import { useEffect } from "react";

export default function Result({ data }) {
  let res = data.map((a) => a.value);
  var result = res.reduce(function (prev, curr) {
    return (Number(prev) || 0) + (Number(curr) || 0);
  });

  function toFarsiNumber(n) {
    const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    return n.toString().replace(/\d/g, (x) => farsiDigits[x]);
  }


  result = result / 18;

  let color = "";
  var riskcal;
  var index;
  var advise;
  var pathName;

  if (result <= 2.5) {
    color = "#15803D";
    index = "ریسک‌گریز";
    riskcal =
      "شما شخصی ریسک‌گریز هستید و تحمل ضرر را ندارید. ترجیح شما این است که سرمایه‌گذاری بدون ریسک داشته باشید و تحمل کوچک ترین ضرری را در بازارهای مالی ندارید.";
    advise = "با توجه به میزان ریسک‌پذیری شما صندوق الماس برای شما مناسب است.";
    pathName = "almas";
  } else if (result <= 5) {
    color = "#0EA5E9";
    index = "کم ریسک";
    riskcal =
      "شما شخصی با ریسک‌پذیری کم هستید و تمایل به کسب سود مطمعن دارید. ترجیح شما کسب سود مطمعن از بازارهای مالی می‌باشد حتی اگر بازدهی کمی داشته باشد.";
    advise = "با توجه به میزان ریسک‌پذیری شما صندوق زمرد برای شما مناسب است.";
    pathName = "zomorod";
  } else if (result <= 7.5) {
    color = "#FDB913";
    index = "ریسک متوسط";
    riskcal =
      "شما شخصی با ریسک‌پذیری متوسط و علاقه‌مند به کسب سود منطقی در شرایط متفاوت بازار هستید. ترجیح شما این است که ارزش دارای‌تان در شرایط متفاوت اقتصادی حفظ شود و حاضر نیستید برای کسب سودهای زیاد سرمایه خود را به خطر بیندازید.";
    advise = "با توجه به میزان ریسک‌پذیری شما صندوق کهربا برای شما مناسب است.";
    pathName = "kahroba";
  } else {
    color = "#DC2626";
    index = "ریسک‌پذیر";
    riskcal =
      "شما شخصی با ریسک‌پذیری زیاد و علاقه‌مند به کسب بازدهی حداکثری هستید. ترجیح شما این است که بیشترین سود را از بازارهای مالی دریافت کنید حتی اگر در مدتی وارد ضرر شوید.";
    advise = "با توجه به میزان ریسک‌پذیری شما صندوق یاقوت برای شما مناسب است.";
    pathName = "yaghot";
  }

  let percentRisk = parseFloat(result).toFixed(1) * 10;
  let degPercent = (parseFloat(result).toFixed(1) * 10 * 180) / 100;
  const degree=degPercent+'deg'
  useEffect(() => {
    document.getElementById('gauge').style.setProperty("--color", color);
    document.getElementById('gauge').style.setProperty("--rotation",degree)
  }, [degree,color])
  return (
    <div id="result_container" className="space-y-8">
      <div className="space-y-5 md:space-y-0 md:justify-between md:space-x-5 md:flex md:flex-row-reverse">
        <div className="lg:w-1/4 bg-gray-50 rounded-lg p-5 space-y-5">
          <div>
            <p className="p-0 flex justify-center font-medium">
              شاخص ریسک‌پذیری شما
            </p>
          </div>
          <div className=" flex justify-center items-center">
            <div
              id="gauge"
              className="gauge"
              style={{width: '200px'}}
            >
              <div className="percentage"></div>
              <div
                className="mask"
                style={{backgroundColor: '#F9FAFB'}}
              ></div>
              <span id="result" className="value">{toFarsiNumber(percentRisk)}%</span>
            </div>
          </div>
        </div>
        <div className="space-y-2 lg:w-3/4 bg-gray-50 rounded-lg p-5">
          <p id="result_text_header" className="p-0 font-medium">
            {index}
          </p>
          <p id="result_text_main" className="p-0 font-light">
            {riskcal}
          </p>
        </div>
      </div>

      <div className=" bg-green-50 p-6 shadow rounded-lg">
        <div className="flex flex-col max-w-5xl mx-auto gap-y-8 text-center  sm:flex-row sm:items-center sm:justify-between">
          <h2
            id="result_text_advise"
            className="text-xl font-bold text-slate-900"
          >
            {advise}
          </h2>
          <Link
          href={'/'+pathName}
            id="redirect_btn"
            className="flex w-full items-center justify-center bg-ahrom text-white shadow-sm hover:opacity-90  sm:w-auto h-[3.25rem] rounded-full px-[2rem]"
          >
            مشخصات صندوق
          </Link>
        </div>
      </div>
    </div>
  );
}
