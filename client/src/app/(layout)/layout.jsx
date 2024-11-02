import NavigationBar from "@/components/layout/NavigationBar";
import Footer from "@/components/layout/Footer";

export default function Layout({ children }) {
  return (
    <>
      <NavigationBar />
      <main className="min-h-screen pt-14 md:pt-20">{children}</main>
      <Footer />
    </>
  );
}
