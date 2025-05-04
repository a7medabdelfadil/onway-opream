"use client";
import "~/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import "react-toastify/dist/ReactToastify.css";
import { TRPCReactProvider } from "~/trpc/react";
import NavBar from "../_components/navBar";
import ThemeProvider from "./providers/themeProvider";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Spinner from "~/_components/Spinner";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const router = useRouter();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const isAuthPage = pathname === "/sign-in";

  useEffect(() => {
    const checkAuth = () => {
      const token = Cookies.get("accessToken"); 

      if (token) {
        setIsAuthenticated(true); 
      } else {
        setIsAuthenticated(false); 
      }

      setLoading(false);
    };

    checkAuth();
  }, []);

  // useEffect(() => {
  //   if (!loading && !isAuthenticated && !isAuthPage) {
  //     router.push("/sign-in"); 
  //   }
  // }, [isAuthenticated, isAuthPage, router, loading]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Spinner />
      </div>
    ); 
  }

  return (
    <html
      lang="en"
      className={`${GeistSans.variable}`}
      suppressHydrationWarning
    >
      <head>
        <title>Opream</title>
        <meta name="description" content="MarketPlace Person" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body className="bg-bgSecondary">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {!isAuthPage && isAuthenticated && <NavBar />}
          <TRPCReactProvider>{children}</TRPCReactProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
