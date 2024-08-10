export default function Table() {
  return (
    <div className="is-scrollbar-hidden overflow-x-auto rounded-lg">
      <table className="w-full h-full">
        <thead>
          <tr>
            <th className="whitespace-nowrap border bg-gray-50 border-slate-200 px-3 py-3 font-semibold uppercase text-slate-800 dark:border-navy-500 dark:text-navy-100 lg:px-5">
              زمان
            </th>
            <th className="whitespace-nowrap border bg-gray-50 border-slate-200 px-3 py-3 font-semibold uppercase text-slate-800 dark:border-navy-500 dark:text-navy-100 lg:px-5">
              برپایه تومان
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="whitespace-nowrap border border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5">
              <p className="text-sm+ font-medium font-16 text-slate-800 dark:text-navy-100">
                بازدهی امروز
              </p>
            </td>
            <td className="whitespace-nowrap border border-r-0 border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5">
              <p
                dir="ltr"
                className="font-medium font-16 text-right text-green-800"
              >
                ۰.۷۳ %
              </p>
            </td>
          </tr>
          <tr>
            <td className="whitespace-nowrap border border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5">
              <p className="text-sm+ font-medium font-16 text-slate-800 dark:text-navy-100">
                بازدهی هفتگی
              </p>
            </td>
            <td className="whitespace-nowrap border border-r-0 border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5">
              <p dir="ltr" className="font-medium font-16 text-right text-rose-500">
                ۷.۱۴ %
              </p>
            </td>
          </tr>
          <tr>
            <td className="whitespace-nowrap border border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5">
              <p className="text-sm+ font-medium font-16 text-slate-800 dark:text-navy-100">
                بازدهی ماهانه
              </p>
            </td>
            <td className="whitespace-nowrap border border-r-0 border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5">
              <p
                dir="ltr"
                className="font-medium font-16 text-right text-green-800"
              >
                ۱.۳۱ %
              </p>
            </td>
          </tr>
          <tr>
            <td className="whitespace-nowrap border border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5">
              <p className="text-sm+ font-medium font-16 text-slate-800 dark:text-navy-100">
                بازدهی سه ماه
              </p>
            </td>
            <td className="whitespace-nowrap border border-r-0 border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5">
              <p dir="ltr" className="font-medium font-16 text-right text-rose-500">
                ۵.۹۸ %
              </p>
            </td>
          </tr>
          <tr>
            <td className="whitespace-nowrap border border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5">
              <p className="text-sm+ font-medium font-16 text-slate-800 dark:text-navy-100">
                بازدهی شش ماه
              </p>
            </td>
            <td className="whitespace-nowrap border border-r-0 border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5">
              <p
                dir="ltr"
                className="font-medium font-16 text-right text-green-800"
              >
                ۱۶.۵۵ %
              </p>
            </td>
          </tr>
          <tr>
            <td className="whitespace-nowrap border border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5">
              <p className="text-sm+ font-medium font-16 text-slate-800 dark:text-navy-100">
                بازدهی سالانه
              </p>
            </td>
            <td className="whitespace-nowrap border border-r-0 border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5">
              <p
                dir="ltr"
                className="font-medium font-16 text-right text-green-800"
              >
                ۴۷.۳۸ %
              </p>
            </td>
          </tr>
          <tr>
            <td className="whitespace-nowrap border border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5">
              <p className="text-sm+ font-medium font-16 text-slate-800 dark:text-navy-100">
                بازدهی ازابتدا
              </p>
            </td>
            <td className="whitespace-nowrap border border-r-0 border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5">
              <p
                dir="ltr"
                className="font-medium font-16 text-right text-green-800"
              >
                ۱۵۰.۸۰ %
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
