import { Inter } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/layout/NavigationBar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kaligrafi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body className={`max-w-screen w-screen bg-[#FAF1EA] ${inter.className}`}>
        <NavigationBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
