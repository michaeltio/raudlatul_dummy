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
      <body className={`bg-primaryWhite font-ptserif ${inter.className}`}>
        <NavigationBar />
        <main className="min-h-screen md:pt-20 pt-14">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
