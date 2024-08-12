import BakshAvalNemudar from "./BakhsAvalNemudar";
import HeadreNemudar from "./HeaderNemudar";
import TableAndPishrafte from "./Table&Pishrafte";

export default function Nemudar() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-6 pt-20 sm:px-8 lg:pt-24">
        <HeadreNemudar />
        <BakshAvalNemudar />
        <TableAndPishrafte/>
      </section>

      <section className="mx-auto max-w-5xl py-5 flex justify-center">
        <div className="relative w-full h-[200px] sm:h-[300px] lg:h-[500px]">
          <div
            id="detailChart"
            className="DetailChart w-full h-full absolute"
            dir="ltr"
          ></div>
        </div>
      </section>
    </>
  );
}
