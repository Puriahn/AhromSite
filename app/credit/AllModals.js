import ModalAddress from "./ModalAddress";
import ModalCodeMeli from "./ModalCodeMeli";
import ModalPedar from "./ModalPedar";
import ModalPhone from "./ModalPhone";
import ModalQarardad from "./ModalQarardad";
import ModalTayid from "./ModalTayid";

export default function AllModals(){
    return <>
    <ModalPhone/>
    <ModalCodeMeli/>
    <ModalPedar/>
    <ModalTayid/>
    <ModalAddress/>
    <ModalQarardad/>
    </>
}