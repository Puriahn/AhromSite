'use client'

import Link from "next/link";

export default function App() {
    let deviceType='both'
    if (typeof window !== 'undefined') {
    if (navigator.userAgent.match(/Android/i)){
        deviceType='android'
    }
    else if (navigator.userAgent.match(/iPhone/i)){
        deviceType='iphone'
    }
  }
    
  return (
    <>
      <main className="relative mx-auto lg:pt-24" id="top">
        <div className="mx-auto max-w-5xl space-y-12 pb-3 lg:pb-10 pt-28 lg:pt-12">
          <div className="mx-auto max-w-5xl px-8 lg:px-0 space-y-8">
            <div className="flex justify-center">
              <div className="flex items-center">
                <div className="hidden lg:block border rounded-xl border-slate-300 pt-2 pb-1 px-2 space-y-1">
                  <div>
                    <img
                      src="https://ahrominvest.ir/page/qr.svg"
                      className="w-40 h-40"
                    />
                  </div>
                  <div>
                    <p className="text-md text-black  font-black flex justify-center">
                      برای دانلود اسکن کنید!
                    </p>
                  </div>
                </div>
              </div>
              <img
                className="w-96"
                src="https://ahrominvest.ir/page/advertise.png"
                alt=""
              />
            </div>
            <div className="space-y-8 px-3 py-5 lg:px-10 lg:py-10 ">
              <div id="android_container" className={`space-y-2 ${deviceType!=='android'&&deviceType!=='both'?' hidden':''}`}>
                <div>
                  <p className="text-xl font-semibold">برای سیستم‌عامل اندروید</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 w-full">
                  <Link
                    id="da1"
                    href="https://app.ahrominvest.ir/ahrom.apk"
                    className="hover:cursor-pointer flex justify-between items-center bg-black rounded-md px-2.5 h-12"
                  >
                    <div className="flex space-x-1 space-x-reverse">
                      <div>
                        <img
                          className="w-10 h-10 text-black"
                          src="https://ahrominvest.ir/page/android.png"
                          alt=""
                        />
                      </div>
                      <div className="flex items-center">
                        <p className="text-md text-white">دانلود مستقیم اندروید</p>
                      </div>
                    </div>
                    <div className="flex justify-center items-center">
                      <svg
                        className="w-5 h-5 fill-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        style={{ rotate: "90deg" }}
                      >
                        <path d="M241 337c-9.4 9.4-24.6 9.4-33.9 0L47 177c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l143 143L367 143c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L241 337z" />
                      </svg>
                    </div>
                  </Link>
                  <Link
                    id="da1"
                    href="https://cafebazaar.ir/app/app.ahrominvest.ir"
                    className="hover:cursor-pointer flex justify-between items-center bg-black rounded-md px-2.5 h-12"
                  >
                    <div className="flex space-x-1 space-x-reverse">
                      <div>
                        <svg
                          className="w-10 h-10 fill-white"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 180 180"
                        >
                          <path d="M131.363 75.1494L131.354 75.1408C130.081 74.2319 127.604 72.9886 122.856 71.8654C121.437 71.531 119.802 71.2052 117.944 70.9137C115.605 70.5364 112.887 70.202 109.756 69.919C109.61 69.9019 109.463 69.8933 109.317 69.8847C108.681 68.3842 108.027 66.858 107.322 65.2461C106.952 64.3886 106.599 63.5141 106.221 62.5966C106.178 62.4851 106.135 62.3737 106.083 62.2622C104.707 58.8754 103.262 55.4028 100.759 52.3161C97.9803 48.8863 94.3332 47 90.497 47C86.6607 47 83.0137 48.8863 80.2354 52.3161C77.7323 55.3942 76.2873 58.8754 74.911 62.2536C74.868 62.3651 74.8164 62.4766 74.7734 62.5966C74.4036 63.5141 74.0509 64.3886 73.6724 65.2461C72.9757 66.858 72.322 68.3842 71.6855 69.8847C71.5393 69.8933 71.393 69.9105 71.2468 69.919C68.0987 70.1934 65.3892 70.5364 63.041 70.9137C61.1916 71.2138 59.566 71.531 58.1467 71.8654C53.3987 72.9801 50.9214 74.2233 49.6484 75.1408C49.6398 75.1494 49.6312 75.1493 49.6312 75.1579C49.1753 75.4837 48.9431 76.0411 49.0119 76.5984L49.4248 79.6508C50.0527 84.2209 50.715 89.5884 51.816 95.1274C52.6417 99.3031 53.7255 103.582 55.2136 107.672C55.7985 109.284 56.4522 110.861 57.1747 112.405C62.0346 122.162 71.0834 129.476 81.9729 132.023C84.7082 132.666 87.5639 133 90.497 133C93.4215 133 96.26 132.666 98.9867 132.031C110.083 129.45 119.269 121.913 124.077 111.89C124.636 110.664 125.152 109.412 125.626 108.135C129.006 99.063 130.313 89.0568 131.389 81.117L131.991 76.5898C132.051 76.0325 131.819 75.4752 131.363 75.1494ZM90.497 69.1902C86.6349 69.1902 83.1255 69.2588 79.9429 69.3874C80.115 68.9844 80.287 68.5815 80.4676 68.1699C80.8719 67.2353 81.259 66.2835 81.6288 65.3575C82.489 63.2311 83.3233 61.1819 84.3641 59.3555C84.8458 58.4981 85.3791 57.7007 85.9812 56.9547C86.7639 55.9944 88.381 54.3825 90.497 54.3825C92.6129 54.3825 94.23 55.9944 95.0128 56.9547C95.6149 57.7007 96.1482 58.5067 96.6298 59.3555C97.6706 61.1819 98.505 63.2311 99.3651 65.3575C99.735 66.275 100.122 67.2267 100.526 68.1699C100.707 68.5815 100.879 68.9844 101.051 69.3874C97.8685 69.2588 94.359 69.1902 90.497 69.1902Z" />
                          "
                        </svg>
                      </div>
                      <div className="flex items-center">
                        <p className="text-md text-white">دانلود از کافه بازار</p>
                      </div>
                    </div>
                    <div className="flex justify-center items-center">
                      <svg
                        className="w-5 h-5 fill-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        style={{ rotate: "90deg" }}
                      >
                        <path d="M241 337c-9.4 9.4-24.6 9.4-33.9 0L47 177c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l143 143L367 143c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L241 337z" />
                      </svg>
                    </div>
                  </Link>
                  <Link
                    id="da1"
                    href="https://myket.ir/app/app.ahrominvest.ir"
                    className="hover:cursor-pointer flex justify-between items-center bg-black rounded-md px-2.5 h-12"
                  >
                    <div className="flex space-x-1 space-x-reverse">
                      <div>
                        <svg
                          className="w-10 h-10 fill-white"
                          xmlns="http://www.w3.org/2000/svg"
                          width="180"
                          height="180"
                          viewBox="0 0 180 180"
                          fill="none"
                        >
                          <path
                            d="M141.683 76.1638C140.977 60.3518 127.99 47.8 112.015 47.8C103.158 47.8 95.1707 51.7122 89.7371 57.8523C84.3034 51.7122 76.3159 47.8 67.459 47.8C51.81 47.8 38.9865 59.8627 37.8455 75.2944C37.7911 75.6204 37.7911 76.0551 37.7911 76.4355V109.961C37.7911 114.091 41.1057 117.405 45.2353 117.405H45.3982C49.5278 117.405 52.8424 114.091 52.8424 109.961V77.5222H52.8967C52.8967 69.3717 59.5258 62.7426 67.6763 62.7426C75.8268 62.7426 82.4559 69.3717 82.4559 77.5222H82.5102V104.908C82.5102 109.038 85.8248 112.352 89.9544 112.352H90.1174C94.247 112.352 97.5615 109.038 97.5615 104.908V77.4678C97.6158 69.3173 104.191 62.7969 112.341 62.7969C120.492 62.7969 127.121 69.426 127.121 77.5765H127.175V110.07C127.175 114.145 130.49 117.405 134.51 117.405H134.674C138.749 117.405 142.009 114.091 142.009 110.07V76.9245C141.683 76.5441 141.683 76.3811 141.683 76.1638Z"
                            fill="white"
                          />
                          <path
                            d="M113.591 120.285C113.265 119.742 112.178 120.829 112.178 120.829C108.048 125.284 99.5176 128.164 90.6607 128.164C81.8039 128.164 73.3273 125.284 69.1434 120.829C69.1434 120.829 68.0567 119.687 67.7307 120.285C67.296 120.937 67.948 121.97 67.948 121.97C73.2186 129.577 81.2605 133 90.6607 133C100.061 133 108.103 129.577 113.374 121.97C113.428 121.97 114.026 120.937 113.591 120.285Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <div className="flex items-center">
                        <p className="text-md text-white">دانلود از مایکت</p>
                      </div>
                    </div>
                    <div className="flex justify-center items-center">
                      <svg
                        className="w-5 h-5 fill-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        style={{ rotate: "90deg" }}
                      >
                        <path d="M241 337c-9.4 9.4-24.6 9.4-33.9 0L47 177c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l143 143L367 143c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L241 337z" />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>

              <div id="ios_container" className={`space-y-2 ${deviceType!=='iphone'&&deviceType!=='both'?' hidden':''}`}>
                <div>
                  <p className="text-xl font-semibold">برای سیستم‌عامل IOS</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 w-full">
                  <Link
                    id="di1"
                    href="http://app.ahrominvest.ir"
                    className="flex justify-between items-center bg-black rounded-md px-2.5 h-12"
                  >
                    <div className="flex space-x-2 space-x-reverse">
                      <div>
                        <div>
                          <img
                            className="w-10 h-10 text-black"
                            src="https://ahrominvest.ir/page/apple.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="flex items-center">
                        <p className="text-md text-white">وب اپلیکیشن</p>
                      </div>
                    </div>
                    <div className="flex justify-center items-center">
                      <svg
                        className="w-5 h-5 fill-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        style={{ rotate: "90deg" }}
                      >
                        <path d="M241 337c-9.4 9.4-24.6 9.4-33.9 0L47 177c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l143 143L367 143c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L241 337z" />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
