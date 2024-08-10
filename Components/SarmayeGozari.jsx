export default function SarmayeGozari() {
  return (
    <div class="relative  lg:pt-[7.5rem] pb-[35px] bg-[#F9FAFB]">
      <div
        class="visible relative z-10 mx-auto flex max-w-5xl flex-col items-center sm:p-6  lg:flex-row lg:justify-between"
        id="heroContainer"
      >
        <div class="z-10 py-20 pt-28 sm:py-24 sm:pt-40 lg:py-28">
          <h1 class="relative mx-auto max-w-sm text-center text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl lg:mx-0 lg:max-w-lg lg:text-right lg:text-4xl">
            با <span class="text-ahrom">اهرم</span> حرفه‌ای سرمایه‌گذاری کنید.
          </h1>
          <p class="mx-auto mt-6 max-w-2xl text-center text-lg text-slate-900 lg:mx-0 lg:text-right">
            واحد سرمایه‌گذاری اهرم، تشکیل شده از صندوق‌های سرمایه‌گذاری می‌باشد
            که با استفاده از آن می‌توانید در ارزهای دیجیتال سرمایه‌گذاری کنید.
          </p>
          <div class="mx-auto mt-6 flex max-w-sm flex-col gap-3 sm:flex-row sm:justify-start lg:mx-0">
            <div class="sm:w-1/2 lg:w-auto">
              <a
                href="https://ahrominvest.ir/app"
                class="flex w-full items-center justify-center bg-ahrom text-white shadow-sm hover:opacity-90  sm:w-auto h-[3.25rem] rounded-xl px-[2rem]"
              >
                شروع سرمایه‌گذاری
              </a>
            </div>
            <div class="sm:w-1/2 lg:w-auto">
              <a
                href="#consulting"
                class="h-[3.25rem] rounded-xl px-[2rem] flex w-full items-center justify-center border-2 border-slate-400 bg-white text-slate-700 hover:bg-slate-400 hover:text-white sm:w-auto"
              >
                درخواست مشاوره
              </a>
            </div>
          </div>
        </div>
        <div class="hidden lg:block">
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
