export default function Assetmix() {
  return (
    <>
      <div className="relative bg-gray-50 pt-[7.5rem]">
        <div
          className="visible relative z-10 mx-auto flex max-w-5xl flex-col items-center p-6 sm:p-6  lg:flex-row lg:justify-between"
          id="heroContainer"
        >
          <div className="z-10 py-20 pt-28 sm:py-24 sm:pt-40 lg:py-32">
            <h1 className="relative mx-auto max-w-sm  text-center text-2xl font-bold tracking-tight  text-slate-800 sm:text-3xl lg:mx-0 lg:max-w-lg lg:text-right lg:text-4xl">
              ترکیب دارایی‌ها
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-slate-900 lg:mx-0 lg:text-right">
              در این صفحه می‌توانید ترکیب دارایی صندوق های سرمایه‌گذاری را
              مشاهده کنید.
            </p>
            <div className="mx-auto mt-6 flex max-w-sm flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start lg:mx-0">
              <div className="sm:w-1/2 lg:w-auto">
                <a
                  href="#view"
                  className="flex w-full items-center justify-center bg-ahrom text-white shadow-sm hover:opacity-90  sm:w-auto h-[3.25rem] rounded-xl px-[2rem]"
                >
                  مشاهده
                </a>
              </div>
            </div>
          </div>
          <span id="view"></span>
          <div className="hidden lg:block">
            <img
              className=" w-72 h-72"
              src="https://ahrominvest.ir/page/assetmix.png"
              alt="ترکیب دارایی‌ها"
              draggable="false"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-5xl pt-14 px-4 space-y-14">
        <div className="w-full py-5 px-3 lg:px-5 bg-[#40B5C4] text-white rounded-lg">
          <p>
            درصد دارایی‌ها به طور تقریبی بوده و با توجه به شرایط ممکن است تغییر
            ۵ تا ۱۰ درصدی داشته باشد.
          </p>
        </div>
        <div className="is-scrollbar-hidden min-w-full overflow-x-auto  overflow-hidden rounded-lg">
          <table className="w-full box-border">
            <thead className="box-border">
              <tr className="box-border">
                <th className="whitespace-nowrap box-border border bg-gray-50 border-slate-200 px-3 py-3 font-semibold uppercase text-slate-800 dark:border-navy-500 dark:text-navy-100 lg:px-5">
                  نام صندوق
                </th>
                <th className="whitespace-nowrap box-border border bg-gray-50 border-slate-200 px-3 py-3 font-semibold uppercase text-slate-800 dark:border-navy-500 dark:text-navy-100 lg:px-5">
                  ارز دیجیتال ریسک کم
                </th>
                <th className="whitespace-nowrap box-border border bg-gray-50 border-slate-200 px-3 py-3 font-semibold uppercase text-slate-800 dark:border-navy-500 dark:text-navy-100 lg:px-5">
                  ارز دیجیتال ریسک متوسط
                </th>
                <th className="whitespace-nowrap box-border border bg-gray-50 border-slate-200 px-3 py-3 font-semibold uppercase text-slate-800 dark:border-navy-500 dark:text-navy-100 lg:px-5">
                  ارز دیجیتال ریسک زیاد
                </th>
                <th className="whitespace-nowrap box-border border bg-gray-50 border-slate-200 px-3 py-3 font-semibold uppercase text-slate-800 dark:border-navy-500 dark:text-navy-100 lg:px-5">
                  وجه نقد
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="whitespace-nowrap border border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5">
                  <p className="text-sm+ font-medium font-16 text-slate-800 dark:text-navy-100">
                    زمرد
                  </p>
                </td>
                <td className="whitespace-nowrap border border-r-0 border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5">
                  <p className="text-sm+ font-medium font-16 text-slate-800 dark:text-navy-100">
                    % ۶۰
                  </p>
                </td>
                <td className="whitespace-nowrap border border-r-0 border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5">
                  <p className="text-sm+ font-medium font-16 text-slate-800 dark:text-navy-100">
                    % ۲۰
                  </p>
                </td>
                <td className="whitespace-nowrap border border-r-0 border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5">
                  <p className="text-sm+ font-medium font-16 text-slate-800 dark:text-navy-100">
                    % ۱۰
                  </p>
                </td>
                <td className="whitespace-nowrap border border-r-0 border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5">
                  <p className="text-sm+ font-medium font-16 text-slate-800 dark:text-navy-100">
                    % ۱۰
                  </p>
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap border border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5">
                  <p className="text-sm+ font-medium font-16 text-slate-800 dark:text-navy-100">
                    کهربا
                  </p>
                </td>
                <td className="whitespace-nowrap border border-r-0 border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5">
                  <p className="text-sm+ font-medium font-16 text-slate-800 dark:text-navy-100">
                    % ۴۰
                  </p>
                </td>
                <td className="whitespace-nowrap border border-r-0 border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5">
                  <p className="text-sm+ font-medium font-16 text-slate-800 dark:text-navy-100">
                    % ۳۵
                  </p>
                </td>
                <td className="whitespace-nowrap border border-r-0 border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5">
                  <p className="text-sm+ font-medium font-16 text-slate-800 dark:text-navy-100">
                    % ۱۵
                  </p>
                </td>
                <td className="whitespace-nowrap border border-r-0 border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5">
                  <p className="text-sm+ font-medium font-16 text-slate-800 dark:text-navy-100">
                    % ۱۰
                  </p>
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap border border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5">
                  <p className="text-sm+ font-medium font-16 text-slate-800 dark:text-navy-100">
                    یاقوت
                  </p>
                </td>
                <td className="whitespace-nowrap border border-r-0 border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5">
                  <p className="text-sm+ font-medium font-16 text-slate-800 dark:text-navy-100">
                    % ۲۰
                  </p>
                </td>
                <td className="whitespace-nowrap border border-r-0 border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5">
                  <p className="text-sm+ font-medium font-16 text-slate-800 dark:text-navy-100">
                    % ۴۵
                  </p>
                </td>
                <td className="whitespace-nowrap border border-r-0 border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5">
                  <p className="text-sm+ font-medium font-16 text-slate-800 dark:text-navy-100">
                    % ۲۵
                  </p>
                </td>
                <td className="whitespace-nowrap border border-r-0 border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5">
                  <p className="text-sm+ font-medium font-16 text-slate-800 dark:text-navy-100">
                    % ۱۰
                  </p>
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap border border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5">
                  <p className="text-sm+ font-medium font-16 text-slate-800 dark:text-navy-100">
                    الماس
                  </p>
                </td>
                <td className="whitespace-nowrap border border-r-0 border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5">
                  <p className="text-sm+ font-medium font-16 text-slate-800 dark:text-navy-100">
                    % ۴۰
                  </p>
                </td>
                <td className="whitespace-nowrap border border-r-0 border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5">
                  <p className="text-sm+ font-medium font-16 text-slate-800 dark:text-navy-100">
                    % ۲۰
                  </p>
                </td>
                <td className="whitespace-nowrap border border-r-0 border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5">
                  <p className="text-sm+ font-medium font-16 text-slate-800 dark:text-navy-100">
                    % ۰
                  </p>
                </td>
                <td className="whitespace-nowrap border border-r-0 border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5">
                  <p className="text-sm+ font-medium font-16 text-slate-800 dark:text-navy-100">
                    % ۴۰
                  </p>
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap border border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5">
                  <p className="text-sm+ font-medium font-16 text-slate-800 dark:text-navy-100">
                    آمیتیست
                  </p>
                </td>
                <td className="whitespace-nowrap border border-r-0 border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5">
                  <p className="text-sm+ font-medium font-16 text-slate-800 dark:text-navy-100">
                    % ۲۰
                  </p>
                </td>
                <td className="whitespace-nowrap border border-r-0 border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5">
                  <p className="text-sm+ font-medium font-16 text-slate-800 dark:text-navy-100">
                    % ۰
                  </p>
                </td>
                <td className="whitespace-nowrap border border-r-0 border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5">
                  <p className="text-sm+ font-medium font-16 text-slate-800 dark:text-navy-100">
                    % ۷۰
                  </p>
                </td>
                <td className="whitespace-nowrap border border-r-0 border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5">
                  <p className="text-sm+ font-medium font-16 text-slate-800 dark:text-navy-100">
                    % ۱۰
                  </p>
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap border border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5">
                  <p className="text-sm+ font-medium font-16 text-slate-800 dark:text-navy-100">
                    طلا
                  </p>
                </td>
                <td className="whitespace-nowrap border border-r-0 border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5">
                  <p className="text-sm+ font-medium font-16 text-slate-800 dark:text-navy-100">
                    % ۰
                  </p>
                </td>
                <td className="whitespace-nowrap border border-r-0 border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5">
                  <p className="text-sm+ font-medium font-16 text-slate-800 dark:text-navy-100">
                    % ۰
                  </p>
                </td>
                <td className="whitespace-nowrap border border-r-0 border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5">
                  <p className="text-sm+ font-medium font-16 text-slate-800 dark:text-navy-100">
                    % ۰
                  </p>
                </td>
                <td className="whitespace-nowrap border border-r-0 border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5">
                  <p className="text-sm+ font-medium font-16 text-slate-800 dark:text-navy-100">
                    % ۰
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>{" "}
    </>
  );
}
