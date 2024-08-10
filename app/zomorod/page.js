import SoalatMotedavel from "@/Components/SoalatMotedavel/SoalatMotedavel";
import Header from "./Header";
import Moshavere from "@/Components/Moshavere/Moshavere";
import Nemudar from "./Nemudar";

export default function page() {
  return (
    <>
      <Header />
      <Nemudar />
      <SoalatMotedavel />
      <Moshavere />
    </>
  );
}
