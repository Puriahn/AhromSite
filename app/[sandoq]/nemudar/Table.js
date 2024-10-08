import Spinner from "@/Components/Common/Spinner";
import toFarsiNumber from "@/Components/utils/ToFarsiNumber";

const chart = [
  { label: "بازدهی امروز", percent: "1day_percentage_24h" },
  { label: "بازدهی هفتگی", percent: "7day_percentage" },
  { label: "بازدهی ماهانه", percent: "1month_percentage" },
  { label: "بازدهی سه ماه", percent: "3month_percentage" },
  { label: "بازدهی شش ماه", percent: "6month_percentage" },
  { label: "بازدهی سالانه", percent: "1year_percentage" },
  { label: "بازدهی ازابتدا", percent: "start_percentage" },
];

export default function Table({ sandoq }) {
  function hazfManfi(x) {
    if (x[0] == "-") {
      return x.slice(1);
    }
    return x;
  }

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
          {chart.map((col) => (
            <tr key={col.label}>
              <td className="whitespace-nowrap border border-slate-200 px-3 py-5 dark:border-navy-500 lg:px-5">
                <p className="text-sm+ font-medium font-16 text-slate-800 dark:text-navy-100">
                  {col.label}
                </p>
              </td>
              <td className="whitespace-nowrap border border-r-0 border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5">
                {sandoq ? (
                  <p
                    dir="ltr"
                    className={`font-medium font-16 text-right ${
                      parseFloat(sandoq[col.percent]) < 0
                        ? "text-rose-500"
                        : "text-green-800"
                    } `}
                  >
                    {sandoq[col.percent] === null
                      ? "-"
                      : hazfManfi(
                          toFarsiNumber(
                            parseFloat(sandoq[col.percent]).toFixed(2)
                          )
                        )}
                    {sandoq[col.percent] !== null && "%"}
                  </p>
                ) : (
                  <div className="flex items-center justify-center">
                    <Spinner/>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/*import data from "../../fake-api.json";


*/
