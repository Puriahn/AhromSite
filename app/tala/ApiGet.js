"use client";
import axios from "axios";
import dataa from "../../fake-api.json";
import { useEffect, useState } from "react";

export default function ApiGett() {
  const [data, setData] = useState(dataa);
  async function Get(){
        await axios.get('https://api.ahrominvest.ir/market/').then(res=>{
            setData(res)
            console.log(res)
        }).catch(error=>{
            console.log(error)
        })
    }
   
  useEffect(() => {
    const interval = setInterval(() => {
      Get()
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  console.log(data)
  return <div>aa</div>
}



       