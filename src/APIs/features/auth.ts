import axiosInstance from "~/lib/axios";
export interface AuthResponse {
  data: {
    tokens: {
      accessToken: string;
      refreshToken: string;
    };
    name: string;
    email: string;
    phoneNumber: string;
    photos: {
      id: number;
      type: string;
      url: string;
      name: string;
      rejectionReason: string | null;
      status: string;
    }[];
    notes: string[];
    gender: "MALE" | "FEMALE";
    verifiedPassenger: boolean;
    verifiedDriver: boolean;
  };
  status: number;
  message: string | null;
}

export const login = async (formData: { email: string; password: string }) => {
  const response = await axiosInstance.post<AuthResponse>(
    "/users/login",
    formData
  );
  
  return response.data; 
};
