'use client'
import SoalatMotedavelEtebar from "./SoalatMotedavelEtebar";
import Prices from './Prices.js'
import MazayayeTarh from "./MazayayeTarh";
import LeftPart from "./LeftPart";
import NavEtebar from "./NavEtebar";
import { showActions } from "@/lib/slices/OfCan";
import OfCan from "@/app/credit/OfCan/OfCan";
import { useDispatch,useSelector } from "react-redux";


export default function Etebar() {
  const showStatus=useSelector(state=>state.Show.showStatus)
  const dispatch=useDispatch()



  function handleShow(){
    dispatch(showActions.status('etelaat'))
  }
  return (
    <>
    <NavEtebar classes={showStatus!==null?'brightness-50':''}/>
    
    <OfCan/>
    <section className={`bg-credit-full-page bg-[#F4F7FB] pt-[7rem] ${showStatus!==null&&'brightness-50'}`}> 
      <div
        className="mx-auto max-w-5xl py-[45px] lg:py-12 space-y-10"
        id="heroContainer"
      >
        <div className="hidden lg:block">
          <h1 className="text-2xl font-bold text-black">
            دریافت اعتبار ارز دیجیتال
          </h1>
        </div>
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col space-y-10 lg:space-y-0 lg:space-x-10 lg:space-x-reverse lg:flex-row">
            <div className="w-full lg:w-2/3 bg-white py-3 px-4 rounded-lg space-y-5 lg:space-y-10">
              <div>
                <p className="text-justify md:text-lg text-black hidden lg:block">
                  مبلغ درخواستی و مدت زمان بازپرداخت را مشخص کنید.
                </p>
                <h1 className="text-2xl font-bold text-black lg:hidden">
                  دریافت اعتبار ارز دیجیتال
                </h1>
              </div>

              <div className="space-y-5">
                <Prices/>

                <section
                  id="btn3"
                  onClick={handleShow}
                  className="flex bottom-0 cursor-pointer z-50 w-full bg-ahrom lg:hidden items-center px-4 rounded-lg"
                >
                  <div className="flex justify-center w-full py-2.5">
                    <p
                      id="moblieSizeGetCreditTxt"
                      className="text-white font-extrabold"
                    >
                      دریافت اعتبار
                    </p>
                  </div>
                </section>

                <MazayayeTarh/>

                <SoalatMotedavelEtebar/>
              </div>
            </div>
            <LeftPart/>
          </div>
        </div>
      </div>
      
    </section>
    </>
  );
}
