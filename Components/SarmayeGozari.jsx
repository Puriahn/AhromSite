import Button from "./Common/ScrollButton";

export default function SarmayeGozari() {
  return (
    <div className="bg-[#F9FAFB] pt-52 relative bg-header">
      <div
        className="visible relative z-10 mx-auto flex max-w-5xl flex-col items-center p-6 sm:p-6  lg:flex-row lg:justify-between"
        id="heroContainer"
      >
        <div className="z-10 py-20 pt-28 sm:py-24 sm:pt-40 lg:py-32">
          <h1 className="relative mx-auto max-w-sm  text-center text-2xl font-bold tracking-tight  text-slate-800 sm:text-3xl lg:mx-0 lg:max-w-lg lg:text-right lg:text-4xl">
            با <span className="text-gradient pr-2 ">اهرم</span> حرفه‌ای
            سرمایه‌گذاری کنید.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-center text-xl text-slate-900 lg:mx-0 lg:text-right">
            واحد سرمایه‌گذاری اهرم، تشکیل شده از صندوق‌های سرمایه‌گذاری می‌باشد
            که با استفاده از آن می‌توانید در ارزهای دیجیتال سرمایه‌گذاری کنید.
          </p>
          <div className="mx-auto mt-6 flex max-w-sm flex-col gap-3 sm:flex-row sm:justify-start lg:mx-0">
            <div className="sm:w-1/2 lg:w-auto">
              <a
                href="https://ahrominvest.ir/app"
                className="transition flex w-full items-center text-lg justify-center rounded-2xl px-7 py-4 bg-ahrom text-white shadow-sm hover:opacity-90  sm:w-auto"
              >
                شروع سرمایه‌گذاری
              </a>
            </div>
            <div className="sm:w-1/2 lg:w-auto">
              <a
                href="#consulting"
                className="transition flex w-full items-center text-lg rounded-2xl px-7 py-4 justify-center border-2 border-slate-400 bg-white text-slate-700 hover:bg-slate-400 hover:text-white sm:w-auto"
              >
                درخواست مشاوره
              </a>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <img
            src="https://ahrominvest.ir/page/assets/images/5.webp"
            alt="سرمایه‌گذاری اهرم"
            draggable="false"
          />
        </div>
      </div>
      
    </div>
  );
}
