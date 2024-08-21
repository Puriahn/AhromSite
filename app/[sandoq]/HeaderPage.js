import Link from "next/link";
export default function HeaderPage({ name, description }) {
  return (
    <div className="relative pt-[7.5rem] bg-gray-50">
      <div
        className="visible relative z-10 mx-auto flex max-w-5xl flex-col items-center p-6 sm:p-6  lg:flex-row lg:justify-between"
        id="heroContainer"
      >
        <div className="z-10 py-20 pt-28 sm:py-24 sm:pt-40 lg:py-32">
          {name === "" ? (
            <div className="container mx-4 sm:mx-3 m h-36">
              <div className="info ">
                <div className="text1 skeleton"></div>
                <div className="text2 mt-3 skeleton "></div>
              </div>
            </div>
          ) : (
            <>
              <h1 className="relative mx-auto max-w-sm  text-center text-2xl font-bold tracking-tight  text-slate-800 sm:text-3xl lg:mx-0 lg:max-w-lg lg:text-right lg:text-4xl">
                صندوق ارز دیجیتال{" "}
                <span
                  className={`${name === "   " && "animate-pulse"} text-ahrom anima`}
                  style={{ lineHeight: "2" }}
                >
                  {name}
                </span>
              </h1>
              <p
                className={` ${name === "" && "animate-pulse w-64 border bg-slate-700"} mx-auto mt-6 max-w-2xl text-center text-xl text-slate-900 lg:mx-0 lg:text-right`}
              >
                {description}
              </p>
            </>
          )}

          <div className="mx-auto mt-6 flex max-w-sm flex-col gap-3 sm:flex-row sm:justify-start lg:mx-0">
            <div className="sm:w-1/2 lg:w-auto">
              <Link
                href="/application"
                className="flex w-full items-center justify-center bg-ahrom text-white shadow-sm hover:opacity-90  sm:w-auto h-[3.25rem] rounded-xl px-[2rem]"
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
            src="https://ahrominvest.ir/home/img/card/1.png"
            className="h-52 w-52"
            alt="سرمایه‌گذاری اهرم"
            draggable="false"
          />
        </div>
      </div>
    </div>
  );
}
