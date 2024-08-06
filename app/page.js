import DarbareMa from "@/Components/DarbareMa";
import Moshavere from "@/Components/Moshavere/Moshavere";
import SarmayeGozari from "@/Components/SarmayeGozari";
import SarmayeGozariInterduction from "@/Components/SarmayeGozariInterduction";
import ShoruSarmayeGozari from "@/Components/ShoruSarmayeGozari";
import SoalatMotedavel from "@/Components/SoalatMotedavel";
import VizhegihayeSandoq from "@/Components/VizhegihayeSandoq";

export default function Home() {
  return (
    <>
      
      <SarmayeGozari />
      <SarmayeGozariInterduction />
      <VizhegihayeSandoq/>
      <SoalatMotedavel/>
      <DarbareMa/>
      <ShoruSarmayeGozari/>
      <Moshavere/>
    </>
  );
}
