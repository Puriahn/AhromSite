import Moshavere from "@/Components/Moshavere/Moshavere";
import Nemudar from "./Nemudar";
import SoalatMotedavelKahroba from "./SoalatMotedaveKahroba";
import HeaderPage from "./HeaderPage";
import ApiGett from "./ApiGet";

export default function page() {
  return (
    <>
      <HeaderPage/>
      <Nemudar />
      <SoalatMotedavelKahroba/>
      <Moshavere />
    </>
  );
}
