import Client from "./AxiosClient";

export const loginApi = async (data) => {
  const response = await Client.post("/auth/login", data);
  return response.data;
};