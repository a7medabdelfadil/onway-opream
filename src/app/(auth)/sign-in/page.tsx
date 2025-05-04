"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Button from "~/_components/Button";
import Input from "~/_components/Input";
import Spinner from "~/_components/Spinner";
import { Text } from "~/_components/Text";
import { useInitializeLanguage, useLanguageStore } from "~/APIs/store";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { login } from "~/APIs/features/auth";
import Cookies from "js-cookie";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const router = useRouter();

  const isLoadingLang = useLanguageStore((state) => state.isLoading);

  useInitializeLanguage();

  const loginMutation = useMutation({
    mutationFn: async () => {
      return login({ email, password });
    },
    onSuccess: (data) => {
      const tokens = data.data.tokens;
      Cookies.set("accessToken", tokens.accessToken);
      Cookies.set("refreshToken", tokens.refreshToken);
      router.push("/");
    },
    onError: () => {
      console.error("Login failed");
    },
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    loginMutation.mutate();
  };

  if (isLoadingLang) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <div className="flex h-screen">
        {/* Left Section */}
        <div className="flex max-h-screen w-full items-start justify-center overflow-auto bg-bgPrimary py-16 pt-40 scrollbar-hide md:w-1/2 xl:w-2/3">
          <div className="w-4/5 lg:w-2/3 xl:w-1/2">
            <img
              src="/images/opreamIcon.png"
              alt="Opream Icon"
              className="mb-8"
            />
            <Text font={"bold"} size={"4xl"} className="mb-2">
              Welcome Back
            </Text>
            <form
               onSubmit={handleSubmit}
              className="space-y-8 py-8"
            >
              <Input
                className="bg-bgInput"
                border="none"
                type="email"
                label="Email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Input
                label="Password"
                className="bg-bgInput"
                border="none"
                placeholder="Enter your password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {loginMutation.isError && (
                <Text className="text-red-500">Login failed</Text>
              )}

              <Button
                type="submit"
                className="mb-10 py-6"
                color="primary"
                disabled={loginMutation.isPending}
              >
                {loginMutation.isPending ? "Logging..." : "Login"}
              </Button>
            </form>
          </div>
        </div>
        {/* Right Section */}
        <div className="hidden bg-primary2 md:block md:w-1/2 xl:w-1/3">
          <img
            src="/images/signinPerson.png"
            alt="Right Side"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </>
  );
}

export default Signin;