"use client";

import { useEffect } from "react";
import { useRouter } from "next/router";
import { isUserSignedIn } from "@/api/auth";

export default function ProtectedLayout({ children }) {
  const router = useRouter();

  useEffect(() => {
    if (!isUserSignedIn()) {
      router.push("/login");
    }
  }, [router]);

  return isUserSignedIn() ? <>{children}</> : null;
}
