'use client'

import { useState, useEffect } from "react";
import axios from "axios";
import BakshAvalNemudar from "./BakhsAvalNemudar";
import HeadreNemudar from "./HeaderNemudar";
import TableAndPishrafte from "./Table&Pishrafte";
import SoalatMotedavelZomorod from "./SoalatMotedaveZomorod";


export default function Nemudar({name,param,soal}) {
  const [sandoq, setsandoq] = useState();
  async function Get() {
    await axios
      .get("https://ahrominvest.ir/api/dev/market")
      .then((res) => {
        setsandoq(res.data[param]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    Get();
    const interval = setInterval(() => {
      Get();
    }, 60000);
    return () => clearInterval(interval);
  }, []);
       

  return (
    <>
      <section className="mx-auto max-w-5xl px-6 pt-20 sm:px-8 lg:pt-24">
        <HeadreNemudar name={name}/>
        <BakshAvalNemudar sandoq={sandoq} param={param}/>
        <TableAndPishrafte sandoq={sandoq} param={param}/>
      </section>

      <section className="mx-auto max-w-5xl py-5 flex justify-center">
        <div className="relative w-full h-[200px] sm:h-[300px] lg:h-[500px]">
          <div
            id="detailChart"
            className="DetailChart w-full h-full absolute"
            dir="ltr"
          ></div>
        </div>
      </section>
      <SoalatMotedavelZomorod
        percent={sandoq}
        soal={soal}
        name={name}
        key={name}
      />
    </>
  );
}
