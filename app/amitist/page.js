import Moshavere from "@/Components/Moshavere/Moshavere";
import Nemudar from "./Nemudar";
import SoalatMotedavelAmitist from "./SoalatMotedaveAmitist";
import HeaderPage from "./HeaderPage";


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
