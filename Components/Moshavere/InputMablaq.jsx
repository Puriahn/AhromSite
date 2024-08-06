export default function InputMablaq(){
    return<div className="col-span-12">
    <label
      for="invest_amount"
      className="block pb-2 text-xl font-medium text-slate-900 after:text-red-600 after:content-['*']"
    >
      مبلغ سرمایه‌گذاری (تومان)
    </label>
    <input
      id="invest_amount"
      type="text"
      name="invest_amount"
      className="block w-full rounded-xl border border-slate-300 bg-white p-3 text-sm placeholder-slate-400 shadow-sm focus:border-ahrom focus:outline-none focus:ring-1 focus:ring-ahrom"
      placeholder="مبلغ سرمایه‌گذاری خود را وارد کنید. "
      oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
      min="1"
      maxlength="14"
    />
  </div>
}