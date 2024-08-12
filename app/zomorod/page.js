import Moshavere from "@/Components/Moshavere/Moshavere";
import Nemudar from "./Nemudar";
import SoalatMotedavelZomorod from "./SoalatMotedaveZomorod";
import HeaderPage from "./HeaderPage";

export default function page() {
  return (
    <>
      <HeaderPage/>
      <Nemudar />
      <SoalatMotedavelZomorod/>
      <Moshavere />
    </>
  );
}
