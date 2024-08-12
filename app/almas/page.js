import Moshavere from "@/Components/Moshavere/Moshavere";
import Nemudar from "./Nemudar";
import SoalatMotedavelAlmas from "./SoalatMotedavelAlmas";
import HeaderPage from "./HeaderPage";

export default function page() {
  return (
    <>
      <HeaderPage/>
      <Nemudar />
      <SoalatMotedavelAlmas/>
      <Moshavere />
    </>
  );
}
