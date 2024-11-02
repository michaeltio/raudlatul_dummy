import NavigationBar from "@/components/layout/NavigationBar";
import Footer from "@/components/layout/Footer";
import { useEffect, useState } from "react";
import { auth } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      try {
        if (user) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
          router.push("/login");
        }
      } catch (error) {
        console.error("Error checking authentication state:", error);
      }
    });

    return () => unsubscribe(); 
  }, [router]);

  return (
    <>
      <NavigationBar isAuthenticated={isAuthenticated} />
      <main className="min-h-screen pt-14 md:pt-20">{children}</main>
      <Footer />
    </>
  );
}
