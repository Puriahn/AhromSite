import Link from "next/link";

export default function SarmayeGozari() {
  return (
    <div className="relative  lg:pt-[7.5rem] pb-[10px] bg-[#F9FAFB]">
      <div
        className="visible relative z-10 mx-auto flex max-w-5xl flex-col items-center sm:p-6  lg:flex-row lg:justify-between"
        id="heroContainer"
      >
        <div className="z-10 py-20 pt-28 sm:py-24 sm:pt-40 lg:py-28">
          <h1 className="relative mx-auto max-w-sm text-center text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl lg:mx-0 lg:max-w-lg lg:text-right lg:text-4xl">
            با <span className="text-ahrom" style={{lineHeight: '2'}}>اهرم</span> حرفه‌ای سرمایه‌گذاری کنید.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-slate-900 lg:mx-0 lg:text-right">
            واحد سرمایه‌گذاری اهرم، تشکیل شده از صندوق‌های سرمایه‌گذاری می‌باشد
            که با استفاده از آن می‌توانید در ارزهای دیجیتال سرمایه‌گذاری کنید.
          </p>
          <div className="mx-auto mt-6 flex max-w-sm flex-col gap-3 sm:flex-row sm:justify-start lg:mx-0">
            <div className="sm:w-1/2 lg:w-auto">
              <Link
                href="/application"
                className="flex w-full items-center justify-center bg-ahrom text-white shadow-sm hover:opacity-90  sm:w-auto h-[3.25rem] rounded-xl px-[32px]"
              >
                شروع سرمایه‌گذاری
              </Link>
            </div>
            <div className="sm:w-1/2 lg:w-auto">
              <Link
                href="/#consulting"
                className="h-[3.25rem] rounded-xl px-[2rem] flex w-full items-center justify-center border-2 border-slate-400 bg-white text-slate-700 hover:bg-slate-400 hover:text-white sm:w-auto"
              >
                درخواست مشاوره
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <img
            style={{ width: "500px", height: "auto" }}
            src="https://ahrominvest.ir/page/assets/images/5.webp"
            alt="سرمایه‌گذاری اهرم"
            draggable="false"
          />
        </div>
      </div>
    </div>
  );
}
