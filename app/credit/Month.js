"use client";

import { useDispatch, useSelector } from "react-redux";
import { etebarActions } from "@/lib/slices/Etebar";

const w = [
  { month: 6, label: " ۶ ماه" },
  { month: 9, label: "   ۹ ماه" },
  { month: 12, label: " ۱۲ ماه" },
];

export default function Month() {
  const month = useSelector((state) => state.EtebarPul.month);
  const dispatch = useDispatch();

  function handleMonth(mon) {
    dispatch(etebarActions.month(mon));
  }

  return (
    <div className="space-y-2">
      <div>
        <p className="text-black">مدت بازپرداخت</p>
      </div>
      <div className="flex justify-start space-x-3 space-x-reverse">
        {w.map((item) => (
          <button
            key={item.month}
            onClick={() => handleMonth(item.month)}
            className={`${
              item.month === month
                ? "bg-ahrom text-white"
                : "bg-gray-200 text-black"
            } rounded-xl w-14 py-1 px-2 text-base`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
