export default function InputMablaq(){
    return<div className="col-span-12">
    <label
      htmlFor="invest_amount"
      className="block pb-2 text-sm font-medium text-slate-900 after:text-red-600 after:content-['*']"
    >
      مبلغ سرمایه‌گذاری (تومان)
    </label>
    <input
      id="invest_amount"
      type="text"
      name="invest_amount"
      className="block w-full rounded-xl border border-slate-300 bg-white p-3 text-sm placeholder-slate-400 shadow-sm focus:border-ahrom focus:outline-none focus:ring-1 focus:ring-ahrom"
      placeholder="مبلغ سرمایه‌گذاری خود را وارد کنید. "
      min="1"
      maxLength="14"
    />
  </div>
}