import Moshavere from "@/Components/Moshavere/Moshavere";
import Nemudar from "./Nemudar";
import SoalatMotedavelAmitist from "./SoalatMotedaveAmitist";
import HeaderPage from "./HeaderPage";
import ApiGett from "./ApiGet";

export default function page() {
  return (
    <>
      <HeaderPage/>
      <Nemudar />
      <SoalatMotedavelAmitist/>
      <Moshavere />
    </>
  );
}