// Ported from github.com/bububa/kwai-marketing-api/model/response.go

export interface Response {
  isError(): boolean;
  error(): string;
}

export class BaseResponse extends Error implements Response {
  request_id?: string;
  data?: unknown;
  code?: number;

  constructor(init: { message?: string; request_id?: string; data?: unknown; code?: number } = {}) {
    super(init.message ?? "");
    this.name = "KuaishouApiError";
    this.request_id = init.request_id;
    this.data = init.data;
    this.code = init.code;
  }

  isError() {
    return (this.code ?? 0) !== 0;
  }

  error() {
    return this.message;
  }
}

export function isResponse(value: unknown): value is Response {
  return (
    typeof value === "object" &&
    value != null &&
    typeof (value as Response).isError === "function" &&
    typeof (value as Response).error === "function"
  );
}
