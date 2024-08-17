import { useEffect, useRef } from "react";


export default function Modal({ children, open}) {
  const dialog = useRef();
  useEffect(() => {
    const modal = dialog.current;
    if (open) {
      modal.showModal();
    }
    return () => modal.close();
  }, [open]);
  return (
    <dialog ref={dialog} className=" w-1/3 h-fit min-w-64 min-h-60 shadow-2xl rounded-lg no-scrollbar bg-white backdrop:backdrop-blur-md ">
      {children}
    </dialog>
  )

}
