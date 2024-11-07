"use client";

import { useEffect } from "react";
import { isUserSignedIn } from "@/api/auth";
import { useRouter } from "next/navigation";

export default function Layout({ children }) {
  const router = useRouter();

  useEffect(() => {
    const checkSignInStatus = async () => {
      const signedIn = await isUserSignedIn();
      if (signedIn == null) {
        router.push("/login");
      }
      if (signedIn.email !== "admin@admin.com") {
        router.push("/");
      }
      if (!signedIn) {
        router.push("/login");
      }
    };
    checkSignInStatus();
  }, []);
  return <>{children}</>;
}
