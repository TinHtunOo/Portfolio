import "@/app/_styles/globals.css";
import { Inter_Tight } from "next/font/google";
import Navbar from "./_components/Navbar";
import "animate.css";

const inter = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter_tight",
});

export const metadata = {
  title: "TinHtunOo",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-body `}>
        {" "}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
