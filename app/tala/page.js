import Moshavere from "@/Components/Moshavere/Moshavere";
import Nemudar from "./Nemudar";
import SoalatMotedavelTala from "./SoalatMotedaveTala";
import HeaderPage from "./HeaderPage";

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
