import Moshavere from "@/Components/Moshavere/Moshavere";
import Nemudar from "./Nemudar";
import SoalatMotedavelYaghot from "./SoalatMotedaveYaghot";
import HeaderPage from "./HeaderPage";
import ApiGett from "./ApiGet";

export default function page() {
  return (
    <>
      <HeaderPage/>
      <Nemudar />
      <SoalatMotedavelYaghot/>
      <ApiGett/>
      <Moshavere />
    </>
  );
}
