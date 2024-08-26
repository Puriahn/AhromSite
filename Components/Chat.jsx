
import Script from "next/script";

export default function ChatWidget() {
  return (
    <Script
    id="goftino-widget"
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: `
      !function(){
        var i="U5y2WD", a=window, d=document;
        function g(){
          var g=d.createElement('script'),
          s="https://www.goftino.com/widget/" + i,
          l=localStorage.getItem("goftino_" + i);
          g.async = !0;
          g.src = l ? s + "?o=" + l : s;
          d.getElementsByTagName('head')[0].appendChild(g);
        }
        "complete" === d.readyState ? g() : a.attachEvent ? a.attachEvent("onload", g) : a.addEventListener("load", g, !1);
      }();
      `,
    }}
  />
  );
}
