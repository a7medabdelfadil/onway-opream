import type { ReactNode } from "react";
import { useBooleanValue } from "~/APIs/store";

const Container = ({ children }: { children: ReactNode }) => {
    const bool = useBooleanValue((state) => state.boolean)
  return <div
  className={`mx-[20px] mt-5 ${bool ? "lg:ml-[320px]" : "lg:ml-[110px]"} transition ease-in duration-300 transform`}>{children}</div>;
};

export default Container;
