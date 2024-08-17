import Moshavere from "@/Components/Moshavere/Moshavere";
import Nemudar from "./Nemudar";
import SoalatMotedavelYaghot from "./SoalatMotedaveYaghot";
import HeaderPage from "./HeaderPage";


export default function page() {
  return (
    <>
      <HeaderPage/>
      <Nemudar />
      <SoalatMotedavelYaghot/>
      <Moshavere />
    </>
  );
}
