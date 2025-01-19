import type { ReactNode } from "react";
import { useBooleanValue, useLanguageStore } from "~/APIs/store";

const Container = ({ children }: { children: ReactNode }) => {
  const bool = useBooleanValue((state) => state.boolean); 
  const language = useLanguageStore((state) => state.language);

  return (
    <div
      dir={language === "ar" ? "rtl" : "ltr"} 
      className={`mt-5 transform transition duration-300 ease-in ${
        bool
          ? language === "ar"
            ? "lg:mr-[320px] lg:ml-[110px]"
            : "lg:ml-[320px] lg:mr-[110px]"
          : language === "ar"
          ? "lg:mr-[110px] lg:ml-[20px]"
          : "lg:ml-[110px] lg:mr-[20px]"
      }`}
    >
      {children}
    </div>
  );
};

export default Container;
