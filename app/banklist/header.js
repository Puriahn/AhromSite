import Link from "next/link";

export default function Header() {
  return (
    <div className="relative pt-[7.5rem] bg-gray-50">
      <div
        className="visible relative z-10 mx-auto flex max-w-5xl flex-col items-center p-6 sm:p-6  lg:flex-row lg:justify-between"
        id="heroContainer"
      >
        <div className="z-10 py-20 pt-28 sm:py-24 sm:pt-40 lg:py-32">
          <h1 className="relative mx-auto max-w-sm  text-center text-2xl font-bold tracking-tight  text-slate-800 sm:text-3xl lg:mx-0 lg:max-w-lg lg:text-right lg:text-4xl">
            شماره حساب‌ها
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-slate-900 lg:mx-0 lg:text-right">
            برای واریز وجه از طریق بانک می‌توانید از شماره حساب‌های شرکت استفاده
            کنید.
          </p>
          <div className="mx-auto mt-6 flex max-w-sm flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start lg:mx-0">
            <div className="sm:w-1/2 lg:w-auto">
              <Link
                href="/#view"
                className="flex w-full items-center justify-center bg-ahrom text-white shadow-sm hover:opacity-90  sm:w-auto h-[3.25rem] rounded-xl px-[2rem]"
              >
                مشاهده
              </Link>
            </div>
          </div>
        </div>
        <span id="view"></span>
        <div className="hidden lg:block">
          <img
            className="w-72 h-72"
            src="https://ahrominvest.ir/page/banklist.png"
            alt="شماره حساب‌ها"
            draggable="false"
          />
        </div>
      </div>
    </div>
  );
}
