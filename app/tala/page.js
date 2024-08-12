import Moshavere from "@/Components/Moshavere/Moshavere";
import Nemudar from "./Nemudar";
import SoalatMotedavelTala from "./SoalatMotedaveTala";
import HeaderPage from "./HeaderPage";
import ApiGett from "./ApiGet";

export default function page() {
  return (
    <>
      <HeaderPage/>
      <Nemudar />
      <SoalatMotedavelTala/>
      <Moshavere />
    </>
  );
}
