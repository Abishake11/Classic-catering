import Client from "./AxiosClient";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// ✅ Create Submission
const contactApi = async (data) => {
  console.log(data);
  try {
    const response = await Client.post("/submit", data);
    return response.data;
  } catch (error) {
    throw error?.response?.data || error.message;
  }
};

export const useContactApi = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: contactApi,
    onSuccess: () => {
      // 🔥 Refresh submissions list automatically
      queryClient.invalidateQueries(["submissions"]);
    },
  });
};

// ✅ Fetch Submissions
const fetchSubmissions = async () => {
  try {
    const res = await Client.get("/submissions");
    return res?.data?.submissions || [];
  } catch (error) {
    throw error?.response?.data || error.message;
  }
};

export const useSubmissions = () => {
  return useQuery({
    queryKey: ["submissions"],
    queryFn: fetchSubmissions,
  });
};