"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import BakshAvalNemudar from "./BakhsAvalNemudar";
import HeadreNemudar from "./HeaderNemudar";
import TableAndPishrafte from "./Table&Pishrafte";
import SoalatMotedavelZomorod from "../SoalatMotedaveZomorod";
import CirculeChart from "./CirculeChart";

export default function Nemudar({ name, soal, param }) {
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
        <HeadreNemudar name={name} />
        <BakshAvalNemudar sandoq={sandoq} />
        <TableAndPishrafte sandoq={sandoq} param={param} />
      </section>

      <CirculeChart />
      <SoalatMotedavelZomorod
        percent={sandoq}
        soal={soal}
        name={name}
        key={name}
      />
    </>
  );
}
