export type RequestOptions = null | {
  auth?: boolean;
  headers?: Record<string, string>;
  responseType?: ResponseType;
  excludeTargetUserId?: boolean;
};

export interface ApiResponseError {
  code: number;
  message: string;
  info?: unknown;
}

export type FailedResponse = {
  meta: {
    error: ApiResponseError;
    status: number;
  };
  data: null;
};

export type SuccessResponse<T = unknown> = {
  meta: {
    error: null;
    status: number;
  };
  data: T;
};

export type ResponseModel<T = unknown> = FailedResponse | SuccessResponse<T>;
