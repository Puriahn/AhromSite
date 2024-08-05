import DarbareMa from "@/Components/DarbareMa";
import NavBar from "@/Components/Navbar/navbar";
import SarmayeGozari from "@/Components/SarmayeGozari";
import SarmayeGozariInterduction from "@/Components/SarmayeGozariInterduction";
import SoalatMotedavel from "@/Components/SoalatMotedavel";
import VizhegihayeSandoq from "@/Components/VizhegihayeSandoq";

export default function Home() {
  return (
    <>
      <NavBar />
      <SarmayeGozari />
      <SarmayeGozariInterduction />
      <VizhegihayeSandoq/>
      <SoalatMotedavel/>
      <DarbareMa/>
    </>
  );
}
