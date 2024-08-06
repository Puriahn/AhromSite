"use client";
import { usePathname, useRouter } from "next/navigation";
export default function ScrollButton({ children, classes, scroll }) {
  const path = usePathname();
  const router = useRouter();
  function handlePush() {
    router.push("/")
    handleScroll();
  }
  function handleScroll() {
    setTimeout(() => {
      window.scrollTo({ top: scroll, behavior: "smooth" });
    }, 200);
  }

  return (
    <button
      onClick={path === "/" ? handleScroll : handlePush}
      className={classes}
    >
      {children}
    </button>
  );
}
