"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Spinner from "./Spinner";
import NavBar from "./navBar";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const [checked, setChecked] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("accessToken");
    if (!token) {
      router.replace("/sign-in");
    }
    setChecked(true);
  }, [pathname]);

  if (!checked) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <NavBar />
      {children}
    </>
  );
}
