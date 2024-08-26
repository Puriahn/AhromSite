"use client";

import Moshavere from "@/Components/Moshavere/Moshavere";
import Nemudar from "./nemudar/Nemudar";
import HeaderPage from "./HeaderPage";
import { useSelector } from "react-redux";

export default function page({ params }) {
  const names = useSelector((state) => state.Sandoq.sandoq);
  return (
    <>
      <HeaderPage
        name={names !== null ? names[params.sandoq]["name_fa"] : ""}
        description={
          names !== null ? names[params.sandoq]["introduction_description"] : ""
        }
      />
      <Nemudar
        name={names !== null ? names[params.sandoq]["name_fa"] : ""}
        soal={names !== null ? names[params.sandoq]["benefit_description"] : ""}
        param={params.sandoq}
      />
      <Moshavere />
    </>
  );
}

/* const [sandoq, setSandoq] = useState();
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
  }, []); */
