import BakshAvalNemudar from "./BakhsAvalNemudar";
import HeadreNemudar from "./HeaderNemudar";
import Table from "./Table";

export default function Nemudar() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-6 pt-20 sm:px-8 lg:pt-24">
        <HeadreNemudar />
        <BakshAvalNemudar />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Table />
          <div className="relative">
            <div id="parent_chart_zomorod_container" className="mx-3">
              <div className="flex mb-4">
                <div className="me-1">
                  <div
                    id="zomorod_candle_chart_button"
                    className="bg-ahrom rounded-full flex justify-center items-center cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      enable-background="new 0 0 24 24"
                      height="24px"
                      viewBox="0 0 24 24"
                      width="24px"
                      fill="#FFFFFF"
                    >
                      <g>
                        <rect fill="none" height="24" width="24" />
                      </g>
                      <g>
                        <g>
                          <path d="M9,4H7v2H5v12h2v2h2v-2h2V6H9V4z M9,16H7V8h2V16z" />
                          <path d="M19,8h-2V4h-2v4h-2v7h2v5h2v-5h2V8z M17,13h-2v-3h2V13z" />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div
                    id="zomorod_line_chart_button"
                    className="bg-ahrom rounded-full hidden justify-center items-center cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 -960 960 960"
                      width="24"
                      fill="#ffffff"
                    >
                      <path d="m140-220-60-60 300-300 160 160 284-320 56 56-340 384-160-160-240 240Z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <a
                    href="https://ahrominvest.ir/chart?symbol=zomorod"
                    target="_blank"
                    className="bg-ahrom rounded-lg flex justify-center items-center cursor-pointer"
                  >
                    <p className="text-white m-0 font-16 py-1 px-3">
                      نمودار پیشرفته
                    </p>
                  </a>
                </div>
              </div>
              <div data-name="zomorod" id="zomorod_chart_container"></div>
            </div>
            <div
              id="loading_chart_zomorod"
              className="top-1/2 right-1/2 hidden justify-center items-center bg-white"
            >
              <div className="spinner h-6 w-6 animate-spin rounded-full border-[3px] border-black border-r-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl py-5 flex justify-center">
        <div className="relative w-full h-[200px] sm:h-[300px] lg:h-[500px]">
          <div
            id="detailChart"
            className="DetailChart w-full h-full absolute"
            dir="ltr"
          ></div>
        </div>
      </section>
    </>
  );
}
