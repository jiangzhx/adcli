export class ApiException extends Error {
  readonly statusCode?: number;
  readonly responseBody?: unknown;
  readonly headers?: Headers;

  constructor(message: string, options: { statusCode?: number; responseBody?: unknown; headers?: Headers } = {}) {
    super(message);
    this.name = "ApiException";
    this.statusCode = options.statusCode;
    this.responseBody = options.responseBody;
    this.headers = options.headers;
  }
}
