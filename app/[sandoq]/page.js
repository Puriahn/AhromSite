"use client";

import axios from "axios";
import Moshavere from "@/Components/Moshavere/Moshavere";
import Nemudar from "./Nemudar";



import HeaderPage from "./HeaderPage";
import { useState, useEffect } from "react";

export default function page({ params }) {
  const [sandoq, setSandoq] = useState();
  async function Get() {
    await axios
      .get("https://ahrominvest.ir/api/dev/cards")
      .then((res) => {
        if (res.data[params.sandoq] === undefined) {
          throw new Error("not found");
        }
        setSandoq(res.data[params.sandoq]);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }
  useEffect(() => {
    Get()
    const interval = setInterval(() => {
      Get();
    }, 60000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <>
      <HeaderPage
        name={sandoq ? sandoq["name_fa"] : ""}
        description={sandoq ? sandoq["introduction_description"] : ""}
      />
      <Nemudar name={sandoq ? sandoq["name_fa"] : ""} param={params.sandoq} soal={sandoq ? sandoq["benefit_description"] : ""} />
      <Moshavere />
    </>
  );
}
