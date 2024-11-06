"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isUserSignedIn } from "@/api/auth";

export default function ProtectedLayout({ children }) {
  const router = useRouter();
  const [signedIn, setSignedIn] = useState(false);

  useEffect(() => {
    const checkSignInStatus = async () => {
      const signedIn = await isUserSignedIn();
      if (!signedIn) {
        router.push("/login");
      } else {
        setSignedIn(true);
      }
    };
    checkSignInStatus();
  }, [router]);

  return <>{children}</>;
}
