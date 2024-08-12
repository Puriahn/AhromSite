import Drawings from "./Drawings";
import FormAndInput from "./FormAndInput";
import Header from "./header";
import Prices from "./Prices";

export default function GiftCard() {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-5xl py-14 px-4 space-y-14">
        <Prices/>
        <Drawings/>
        <FormAndInput/>
      </div>
    </>
  );
}
