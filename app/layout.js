import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/Components/Navbar/navbar";
import Footer from "@/Components/Footer";
import ReduxProvider from "@/lib/ReduxProvider";
import NextTopLoader from 'nextjs-toploader';


const inter = Inter({ subsets: ["latin"] });
const Yekan = localFont({
  src: [
    {
      path: "../public/Font/Vazirmatn-RD-Bold.8e17c255.woff2",
      weight: "700",
    },
    {
      path: "../public/Font/Vazirmatn-RD-Medium.4a1ab646.woff2",
      weight: "500",
    },
    {
      path: "../public/Font/Vazirmatn-RD-Regular.a49678eb.woff2",
      weight: "400",
    },
    {
      path: "../public/Font/Vazirmatn-RD-SemiBold.63d3850b.woff2",
      weight: "600",
    },
    {
      path:'../public/Font/iranyekanweblight.woff2',
      weight:'300'
    }
  ],
});
const IranSans = localFont({
  src: [
    {
      path: "../public/IRANSans-web.woff",
      weight: "400",
    },
  ],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa-IR">
      <body
        suppressHydrationWarning={true}
        dir="rtl"
        className={Yekan.className}
      >
        <NextTopLoader color="#084642" height={8} showSpinner={false} />
        <NavBar />
        <ReduxProvider>{children}</ReduxProvider>
        <Footer />
      </body>
    </html>
  );
}
