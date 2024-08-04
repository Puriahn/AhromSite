import Image from "next/image";
import Link from "next/link";
import DropDownSandoq from "./DropDownSandoq";
import DropDownBishtar from "./DropDownBishtar";
export default function NavBar() {
  return (
    <>
      <nav className="bg-stone-50 fixed w-full z-20 top-0 start-0 border-b border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://ahrominvest.ir/page/assets/images/logo.png"
              className="h-16"
              alt="Ahrom Logo"
            />
            <span className="self-center text-3xl  whitespace-nowrap dark:text-black">
              سرمایه گذاری اهرم
            </span>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 ltr:space-x-reverse">
            <button
              type="button"
              className="text-white bg-emerald-950 hover:bg-emerald-800 font-medium text-lg rounded-2xl px-5 py-2 lg:py-4 text-center dark:focus:ring-blue-800"
            >
              <Link href="downloadapp">دانلود اپلیکیشن</Link>
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
            <ul
              aria-labelledby="dropdownHoverButton"
              className=" text-black text-xl flex flex-col p-4 md:p-0 mt-4 font-medium invisible lg:visible rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0  "
            >
              <li>
                <Link
                  href="/"
                  className=" block py-2 px-3 rounded md:hover:text-zinc-600 md:p-0"
                  aria-current="page"
                >
                  خانه
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 rounded md:hover:text-zinc-600 md:p-0"
                >
                  ویژگی ها
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 rounded md:hover:text-zinc-600 md:p-0"
                >
                  دریافت اعتبار
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 rounded md:hover:text-zinc-600 md:p-0"
                >
                  درباره ما
                </Link>
              </li>
              <DropDownSandoq />
              
                <DropDownBishtar />
            
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
