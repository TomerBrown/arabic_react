import { SetStateAction, useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { AxiosRequestConfig, CanceledError } from "axios";

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: unknown[],
  onSuccess?: (data: T) => void
) => {
  const [data, setData] = useState<T>({} as T);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(
    () => {
      const controller = new AbortController();
      setLoading(true);
      apiClient
        .post(endpoint, {
          ...requestConfig,
          signal: controller.signal,
        })
        .then((response: { data: T }) => {
          setData(response.data as T);
          data && onSuccess && onSuccess(response.data as T);
          setLoading(false);
          setError("");
        })
        .catch((error: { message: SetStateAction<string> }) => {
          if (error instanceof CanceledError) {
            return;
          }
          setError(error.message);
          setLoading(false);
        });

      return () => controller.abort();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...(deps || [])]
  );

  return { data, error, loading };
};

export default useData;
