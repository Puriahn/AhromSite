'use client'

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


export default function Timer({finished}) {
  const [remainingTime, setRemainingTime] = useState(119000);
 
    
    function onTiomeOut(){
        finished(false)
        setRemainingTime(20000)
    }

  useEffect(() => {
    const timer = setTimeout(onTiomeOut, 119000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevRT) => prevRT - 1000);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);


   let min = Math.floor((remainingTime/1000/60) << 0)
   let sec = Math.floor((remainingTime/1000) % 60)
  return (<div
  className='pt-3 font-light text-sm select-none'
    id="question-time"
  >   ارسال مجدد کد تایید تا {min>0&&min} {min>0&&' دقیقه و'  } {sec} ثانیه دیگر</div>)
}
