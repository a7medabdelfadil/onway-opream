import {
  useMutation,
  type UseMutationOptions,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import Cookies from "js-cookie";
import { type AuthResponse, login } from "../features/auth";
import axiosInstance from "~/lib/axios";

export const useAuth = () => {
  return useQuery({
    queryKey: ["auth"],
    queryFn: async () => {
      const token = Cookies.get("accessToken");
      if (!token) return null;

      const response = await axiosInstance.get("/users/me");

      return response.data;
    },
    staleTime: 1000 * 60 * 10,
  });
};

export const useLogin = (
  options?: UseMutationOptions<AuthResponse, Error, { email: string; password: string }>
) => {
  const queryClient = useQueryClient();

  return useMutation<AuthResponse, Error, { email: string; password: string }>({
    mutationFn: login,
    onSuccess: (data, variables, context) => {
      queryClient.setQueryData(["auth"], data.data);
      void queryClient.invalidateQueries({ queryKey: ["auth"] });

      options?.onSuccess?.(data, variables, context);
    },
    onError: (error, variables, context) => {
      options?.onError?.(error, variables, context);
    },
    ...options,
  });
};


// export const useLogout = () => {
//   const queryClient = useQueryClient();

//   return () => {
//     Cookies.remove("accessToken");
//     Cookies.remove("refreshToken");
    
//     queryClient.setQueryData(["auth"], null);
//     queryClient.invalidateQueries({ queryKey: ["auth"] });

//     console.log("User logged out ✅");
//   };
// };
