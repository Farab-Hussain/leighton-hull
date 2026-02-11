/* eslint-disable react-hooks/rules-of-hooks */
import axios, { AxiosError, Method } from "axios";
import { useCallback, useEffect, useState } from "react";
import type { FailedResponse, RequestOptions, ResponseModel } from "@/api/types.d";
import { _TOKEN_IS_EXPIRED_, _TOKEN_REFRESH_FAILED_, _WRONG_REFRESH_TOKEN_ } from "@/api/error-codes";

export const ACCESS_TOKEN_KEY = "access_token_for_gwb_web";
export const REFRESH_TOKEN_KEY = "refresh_token_for_gwb_web";
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

type UseApiError = { code: number; message: string };
type UseApi<T> = {
  reload: () => void;
  data: T | null;
  loading: boolean;
  error: UseApiError | null;
  success: boolean;
};

export default class ApiSlice {
  static baseURL: string = API_URL;
  static defaultAuth: boolean = false;

  static get accessToken(): string | null {
    return typeof window !== "undefined" ? localStorage.getItem(ACCESS_TOKEN_KEY) : null;
  }

  static get refreshToken(): string | null {
    return typeof window !== "undefined" ? localStorage.getItem(REFRESH_TOKEN_KEY) : null;
  }

  static setAccessToken(token: string | null) {
    if (typeof window !== "undefined") {
      if (token) localStorage.setItem(ACCESS_TOKEN_KEY, token);
      else localStorage.removeItem(ACCESS_TOKEN_KEY);
    }
  }

  static setRefreshToken(token: string | null) {
    if (typeof window !== "undefined") {
      if (token) localStorage.setItem(REFRESH_TOKEN_KEY, token);
      else localStorage.removeItem(REFRESH_TOKEN_KEY);
    }
  }

  static async refreshTokens(): Promise<boolean> {
    if (!this.refreshToken) return false;

    try {
      const rsp = await this.request<{ accessToken: string; refreshToken: string }>(
        "/auth/refresh",
        "POST",
        { refreshToken: this.refreshToken },
        { auth: false }
      );
      if (!rsp.meta.error && rsp.data?.accessToken && rsp.data?.refreshToken) {
        this.setAccessToken(rsp.data.accessToken);
        this.setRefreshToken(rsp.data.refreshToken);
        return true;
      }
      return false;
    } catch {
      return false;
    }
  }

  static async request<T = unknown>(
    url: string = "",
    method: Method = "GET",
    payload: object | FormData | null = null,
    options: RequestOptions = null
  ): Promise<ResponseModel<T>> {
    let headers: Record<string, string> = {
      Timezone: (-new Date().getTimezoneOffset() / 60).toString(),
      "Content-Type": "application/json"
    };

    if (this.defaultAuth || options?.auth) {
      if (!this.accessToken) {
        const refreshed = await this.refreshTokens();
        if (!refreshed) throw new Error("No access token found");
      }
      headers.Authorization = `Bearer ${this.accessToken}`;
    }

    if (options?.headers) headers = { ...headers, ...options.headers };

    try {
      const response = await axios({
        url: this.baseURL + url,
        method,
        headers,
        data: payload || undefined,
        responseType: "json"
      });
      return response.data;
    } catch (err: unknown) {
      const axiosError = err as AxiosError<ResponseModel<T>>;
      const response: ResponseModel<T> =
        axiosError.response?.data ||
        ({
          data: null,
          meta: {
            status: 400,
            error: { code: 4000, message: "Unknown Error" }
          }
        } as ResponseModel<T>);

      if (response.meta.error?.code === _TOKEN_IS_EXPIRED_) {
        if (await this.refreshTokens()) {
          return this.request(url, method, payload, options);
        }
      } else if (response.meta.error?.code === _WRONG_REFRESH_TOKEN_ || response.meta.error?.code === _TOKEN_REFRESH_FAILED_) {
        this.setAccessToken(null);
        this.setRefreshToken(null);
      }

      return response;
    }
  }

  static useApi<T>(fetcher: () => Promise<ResponseModel<T>>, deps: unknown[] = []): UseApi<T> {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<UseApiError | null>(null);

    const getData = useCallback(async () => {
      setLoading(true);
      try {
        const rsp = await fetcher();
        if (!rsp.meta.error) {
          setData(rsp.data);
          setError(null);
        } else {
          setData(null);
          setError({
            code: rsp.meta.error.code,
            message: rsp.meta.error.message
          });
        }
      } finally {
        setLoading(false);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);

    useEffect(() => {
      getData();
    }, [getData]);

    return {
      data,
      loading,
      error,
      success: !loading && !error,
      reload: getData
    };
  }

  static error(): Promise<ResponseModel<null>> {
    return Promise.resolve({
      data: null,
      meta: { status: 400, error: { code: 4000, message: "Unknown error" } }
    });
  }

  static mockRequest<T>(data: T, delay = 1000): Promise<ResponseModel<T>> {
    return new Promise(resolve => setTimeout(() => resolve({ data, meta: { status: 200, error: null } }), delay));
  }
}

export function isFailedResponse(response: ResponseModel): response is FailedResponse {
  return response.meta.error !== null;
}
