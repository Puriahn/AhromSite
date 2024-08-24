"use client";

import OfCanEtelaat from "@/app/credit/OfCan/OfCanEtelaat";
import OfCanPhone from "@/app/credit/OfCan/OfCanPhone";
import OfCanCodeMeli from "@/app/credit/OfCan/OfCanCodeMeli";
import OfCanPedar from "@/app/credit/OfCan/OfCanPedar";
import OfCanTayid from "@/app/credit/OfCan/OfCanTayid";
import OfCanAddress from "@/app/credit/OfCan/OfCanAddress";
import OfCanQarardad from "@/app/credit/OfCan/OfCanQarardad";

export default function OfCan() {
 

  return (
    <>
    <OfCanEtelaat/> 
    <OfCanPhone/>
    <OfCanCodeMeli/>
    <OfCanPedar/>
    <OfCanTayid/>
    <OfCanAddress/>
    <OfCanQarardad/>
    </>
  );
}
