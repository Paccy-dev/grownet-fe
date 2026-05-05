"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export function useRequireAuth() {
  const user = {
    id: 23,
    email: "max@gmail.com",
    username: "max",
  };
  //   const { user, isLoading } = useAuth();

  const { isLoading } = useAuth();

  const router = useRouter();

  useEffect(() => {
    // Wait until auth state is resolved before checking
    if (!isLoading && !user) {
      router.push("/login");
    }
  }, [user, isLoading, router]);

  return { user, isLoading };
}
