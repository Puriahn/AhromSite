import Image from "next/image";
import Link from "next/link";
export default function NavBar() {
  return (
    <>
      <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://ahrominvest.ir/page/assets/images/logo.png"
              className="h-16"
              alt="Flowbite Logo"
            />
            <span className="self-center text-3xl  whitespace-nowrap dark:text-black">
              سرمایه گذاری اهرم
            </span>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 ltr:space-x-reverse">
            <button
              type="button"
              className="text-white bg-emerald-950 hover:bg-emerald-800 font-medium text-lg rounded-2xl px-5 py-2 md:py-4 text-center dark:focus:ring-blue-800"
            >
                <Link href='downloadapp'>
              دانلود اپلیکیشن
              </Link>
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className=" text-black text-xl flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
              <li>
                <a
                  href="#"
                  className=" block py-2 px-3 rounded md:hover:text-zinc-600 md:p-0"
                  aria-current="page"
                >
                  خانه
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 rounded md:hover:text-zinc-600 md:p-0"
                >
                  ویژگی ها
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 rounded md:hover:text-zinc-600 md:p-0"
                >
                  دریافت اعتبار
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 rounded md:hover:text-zinc-600 md:p-0"
                >
                  درباره ما
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 rounded md:hover:text-zinc-600 md:p-0"
                >
                  صندوق
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 rounded md:hover:text-zinc-600 md:p-0"
                >
                  بیشتر
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
/*<div classNameName="fixed w-full">
  <headr>
    <nav className="bg-gray-200 h-28 py-5 shadow shadow-gray-300 w-100 px-8">
      <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
        <div className="md:order-1 flex ">
          <Link href="/">
            <img
              classNameName="h-16 "
              src="https://ahrominvest.ir/page/assets/images/logo.png"
            />
          </Link>
          <h2 classNameName="py-5 px-5 text-black text-3xl">سرمایه گذاری اهرم</h2>
        </div>
        <div className="text-black text-xl order-3 w-full md:w-auto md:order-2">
          <ul className="flex justify-between font-medium">
            <li className="md:px-4 md:py-2 hover:text-zinc-600">
              <a href="#">خانه</a>
            </li>

            <li className="md:px-4 md:py-2 hover:text-zinc-600">
              <a href="#">ویژگی ها</a>
            </li>
            <li className="md:px-4 md:py-2 hover:text-zinc-600">
              <a href="#">دریافت اعتبار</a>
            </li>
            <li className="md:px-4 md:py-2 hover:text-zinc-600">
              <a href="#">درباره ما</a>
            </li>
            <li className="md:px-4 md:py-2 hover:text-zinc-600">
              <a href="#">صندوق</a>
            </li>
            <li className="md:px-4 md:py-2 hover:text-zinc-600">
              <a href="#">بیشتر</a>
            </li>
          </ul>
        </div>
        <div className="order-2 md:order-3">
          <button className="px-4 py-2 bg-emerald-950 hover:bg-emerald-800 text-gray-50 rounded-xl flex items-center gap-2 h-14">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            <span classNameName="text-2xl">دانلود اپلیکیشن</span>
          </button>
        </div>
      </div>
    </nav>
  </headr>
</div>;*/
