import { useQuery , useMutation, QueryClient } from "react-query";
import axiosInstance from ".";
import { toast } from "react-toastify";

export const useQueryWrapper = (key: string, url: string, options?: any) => {
  const getAPICall = async () => {
    const {
      data: { data },
    } = await axiosInstance.get(url);
    return data;
  };
  return useQuery(key, getAPICall, options);
};

export const postRequest = async ({ url, data }: any) => {
  const response = await axiosInstance.post(url, data);
  return response?.data || response;
};

export const putRequest = async ({ url, data }: any) => {
  const response = await axiosInstance.put(url, data);
  return response?.data || response;
};
export const patchRequest = async ({ url, data }: any) => {
  const response = await axiosInstance.patch(url, data);
  return response?.data || response;
};

export const deleteRequest = async ({ url, data }: any) => {
  const config = { data };
  const response = await axiosInstance.delete(url, config);
  return response?.data || response;
};

// TODO: write JSDocs for this function
export const useMutationWrapper = (makeAPICall: any, onSuccess?: any, onError?: any): any => {
  return useMutation(makeAPICall, {
    onSuccess: (res) => {
      if (onSuccess) {
        onSuccess(res);
      }
    },

    onError: (error: any) => {
      if (onError) {
        onError(error);
      } else {
        const err = error as Record<any, any>;
        const message: any = err?.response?.data?.message;
        if (Array.isArray(message)) {
          message.map((errorMsg) =>
            toast.error(`${errorMsg ?? "An error occured"}`, {
              autoClose: false,
            }),
          );
        } else {
          toast.error(`${message ?? "An error occured"}`);
        }
      }
    },
  });
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 600, // this is in millisecond
      retry: 0,
    },
  },
});
