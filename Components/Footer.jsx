import ApplicationDownload from "./ApplicationDownload";

export default function Footer() {
  return (<>
  <ApplicationDownload/>
    <footer className="relative h-96 bg-secondary hidden lg:block bg-[#1F1E2B] mt-8">
      <div className="mx-auto max-w-5xl p-6 text-sm leading-6 lg:p-10 lg:px-0">
        <div className="flex flex-col justify-between space-y-6 pb-10 text-slate-400 lg:flex-row lg:items-baseline lg:justify-around">
          <div className="z-10 basis-1/3 flex-col items-start">
            <h2 className="mb-3 font-semibold text-slate-100">تماس با ما</h2>
            <ul className="space-y-4">
              <li>
                <div className="flex flex-row-reverse justify-end gap-x-2 hover:text-slate-100">
                  <span>
                    البرز، کرج، بلوار بلال، ساختمان پارسیان، طبقه ۴، واحد ۲۲
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
              </li>
              <li>
                <a href="mailto:info@ahrominvest.net">
                  <div className="flex flex-row-reverse justify-end gap-x-2 hover:text-slate-100">
                    <span>info@ahrominvest.ir</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <circle cx="12" cy="12" r="4"></circle>
                      <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
                    </svg>
                  </div>
                </a>
              </li>
              <li>
                <a href="tel:02634000253">
                  <div className="flex flex-row-reverse justify-end gap-x-2 hover:text-slate-100">
                    <span>۰۲۶-۳۴۰۰۰۲۵۳</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <rect
                        x="5"
                        y="2"
                        width="14"
                        height="20"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="12" y1="18" x2="12.01" y2="18"></line>
                    </svg>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className="z-10 basis-1/3">
            <div>
              <h2 className="mb-3 font-semibold text-slate-100">نماد ها</h2>
            </div>
            <div className=" flex space-x-reverse space-x-4">
              <div className="w-20 h-auto flex justify-center items-center bg-white rounded-lg p-1">
                <a
                  href="https://logo.samandehi.ir/Verify.aspx?id=360817&p=xlaogvkaobpdmcsirfthjyoe"
                  target="_blank"
                >
                  <img
                    src="https://ahrominvest.ir/page/samandehi.png"
                    alt="لوگو ساماندهی"
                  />
                </a>
              </div>
              <div className="w-20 h-20 flex justify-center items-center bg-white rounded-lg p-1">
                <a
                  href="https://iranblockchain.org/blockchain-ecosystem/?gv_search=%D8%B3%D8%B1%D9%85%D8%A7%DB%8C%D9%87%E2%80%8C%DA%AF%D8%B0%D8%A7%D8%B1%DB%8C+%D8%A7%D9%87%D8%B1%D9%85&filter_16=&mode=any"
                  target="_blank"
                >
                  <img
                    src="https://ahrominvest.ir/page/blockchainAssociation.png"
                    alt="لوگو انجمن بلاک‌چین ایران"
                  />
                </a>
              </div>
              <div className="w-20 h-auto flex justify-center items-center bg-white rounded-lg p-1">
                <a
                  href="https://profile.iwmf.ir/organizations/ahrominvest.ir"
                  target="_blank"
                >
                  <img
                    src="https://ahrominvest.ir/page/iwmf.png"
                    alt="لوگو فین تک"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse items-center justify-between gap-6 pt-10 lg:flex-row-reverse">
          <p className="rtl text-center text-slate-400">
            تمامی حقوق برای شرکت پردازش اطلاعات مالی اهرم محفوظ می‌باشد.
          </p>
          <div className="flex gap-4 text-slate-400">
            <p className="rtl text-center text-slate-400">
              <a href="https://ahrominvest.ir/privacy">حریم خصوصی</a> |{" "}
              <a href="https://ahrominvest.ir/terms">شرایط استفاده</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
    </>

  );
}
