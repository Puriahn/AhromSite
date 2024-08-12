'use client'
import { useDispatch } from "react-redux";
import { giftActions } from "@/lib/slices/GiftCard";


export default function Drawings() {
    const dispatch=useDispatch()
  function handleInputClick(id) {
    dispatch(giftActions.drawing(id))
  }

  return (
    <section className="space-y-4">
      <section>
        <h2>انتخاب طرح</h2>
      </section>
      <section
        className="flex space-x-reverse space-x-3 overflow-auto lg:grid lg:grid-cols-12 lg:gap-4 lg:space-x-0"
        id="template"
      >
        <input
          onClick={() => handleInputClick(1)}
          type="image"
          className="w-16 h-16 rounded-xl  focus:border  border-black  focus:p-1"
          src="https://ahrominvest.ir/page/image-gift/cover/base4.jpg"
          id="base4"
        />
        <input
          onClick={() => handleInputClick(2)}
          type="image"
          className="w-16 h-16 rounded-xl focus:border  border-black  focus:p-1"
          src="https://ahrominvest.ir/page/image-gift/cover/base1.jpg"
          id="base1"
        />
        <input
          onClick={() => handleInputClick(3)}
          type="image"
          className="w-16 h-16 rounded-xl focus:border  border-black  focus:p-1"
          src="https://ahrominvest.ir/page/image-gift/cover/base2.jpg"
          id="base2"
        />
        <input
          onClick={() => handleInputClick(4)}
          type="image"
          className="w-16 h-16 rounded-xl focus:border  border-black  focus:p-1"
          src="https://ahrominvest.ir/page/image-gift/cover/base3.jpg"
          id="base3"
        />
        <input
          onClick={() => handleInputClick(5)}
          type="image"
          className="w-16 h-16 rounded-xl focus:border  border-black  focus:p-1"
          src="https://ahrominvest.ir/page/image-gift/cover/base5.jpg"
          id="base5"
        />
        <input
          onClick={() => handleInputClick(6)}
          type="image"
          className="w-16 h-16 rounded-xl focus:border  border-black  focus:p-1"
          src="https://ahrominvest.ir/page/image-gift/cover/birthday1.jpg"
          id="birthday1"
        />
        <input
          onClick={() => handleInputClick(7)}
          type="image"
          className="w-16 h-16 rounded-xl focus:border  border-black  focus:p-1"
          src="https://ahrominvest.ir/page/image-gift/cover/birthday2.jpg"
          id="birthday2"
        />
        <input
          onClick={() => handleInputClick(8)}
          type="image"
          className="w-16 h-16 rounded-xl focus:border  border-black  focus:p-1"
          src="https://ahrominvest.ir/page/image-gift/cover/birthday3.jpg"
          id="birthday3"
        />
        <input
          onClick={() => handleInputClick(9)}
          type="image"
          className="w-16 h-16 rounded-xl focus:border  border-black  focus:p-1"
          src="https://ahrominvest.ir/page/image-gift/cover/boyday1.jpg"
          id="boyday1"
        />
        <input
          onClick={() => handleInputClick(10)}
          type="image"
          className="w-16 h-16 rounded-xl focus:border  border-black  focus:p-1"
          src="https://ahrominvest.ir/page/image-gift/cover/boyday2.jpg"
          id="boyday2"
        />
        <input
          onClick={() => handleInputClick(11)}
          type="image"
          className="w-16 h-16 rounded-xl focus:border  border-black  focus:p-1"
          src="https://ahrominvest.ir/page/image-gift/cover/dad1.jpg"
          id="dad1"
        />
        <input
          onClick={() => handleInputClick(12)}
          type="image"
          className="w-16 h-16 rounded-xl focus:border  border-black  focus:p-1"
          src="https://ahrominvest.ir/page/image-gift/cover/dad2.jpg"
          id="dad2"
        />
        <input
          onClick={() => handleInputClick(13)}
          type="image"
          className="w-16 h-16 rounded-xl focus:border  border-black  focus:p-1"
          src="https://ahrominvest.ir/page/image-gift/cover/girlday1.jpg"
          id="girlday1"
        />
        <input
          onClick={() => handleInputClick(14)}
          type="image"
          className="w-16 h-16 rounded-xl focus:border  border-black  focus:p-1"
          src="https://ahrominvest.ir/page/image-gift/cover/love1.jpg"
          id="love1"
        />
        <input
          onClick={() => handleInputClick(15)}
          type="image"
          className="w-16 h-16 rounded-xl focus:border  border-black  focus:p-1"
          src="https://ahrominvest.ir/page/image-gift/cover/mom1.jpg"
          id="mom1"
        />
        <input
          onClick={() => handleInputClick(16)}
          type="image"
          className="w-16 h-16 rounded-xl focus:border  border-black  focus:p-1"
          src="https://ahrominvest.ir/page/image-gift/cover/mom2.jpg"
          id="mom2"
        />
        <input
          onClick={() => handleInputClick(17)}
          type="image"
          className="w-16 h-16 rounded-xl focus:border  border-black  focus:p-1"
          src="https://ahrominvest.ir/page/image-gift/cover/nowroz1.jpg"
          id="nowroz1"
        />
        <input
          onClick={() => handleInputClick(18)}
          type="image"
          className="w-16 h-16 rounded-xl focus:border  border-black  focus:p-1"
          src="https://ahrominvest.ir/page/image-gift/cover/nowroz2.jpg"
          id="nowroz2"
        />
      </section>
    </section>
  );
}
