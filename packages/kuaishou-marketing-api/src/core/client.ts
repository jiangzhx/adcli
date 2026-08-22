// Ported from github.com/bububa/kwai-marketing-api/core/client.go

import { BaseResponse, isResponse, jsonUnmarshal } from "../model";
import type { GetRequest, PostRequest, UploadRequest } from "../model";
import { ACTIVATE_URL, BASE_URL, OAUTH_URL } from "./const";
import { printError, printGetRequest, printHttpResponse, printPostJsonRequest, printPostMultipartRequest } from "./debug";

export type FetchLike = (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>;

export type SDKClientOptions = {
  fetch?: FetchLike;
  baseUrl?: string;
  oauthUrl?: string;
  activateUrl?: string;
  timeoutMs?: number;
  debug?: boolean;
};

const DEFAULT_TIMEOUT_MS = 60_000;

export class SDKClient {
  readonly appId: number | string;
  readonly secret: string;
  debug = false;
  private readonly fetchImpl: FetchLike;
  private readonly timeoutMs: number;
  baseUrl: string;
  oauthUrl: string;
  activateUrl: string;

  constructor(appId: number | string, secret: string, options: SDKClientOptions = {}) {
    this.appId = appId;
    this.secret = secret;
    this.fetchImpl = options.fetch ?? fetch;
    this.baseUrl = options.baseUrl ?? BASE_URL;
    this.oauthUrl = options.oauthUrl ?? OAUTH_URL;
    this.activateUrl = options.activateUrl ?? ACTIVATE_URL;
    this.timeoutMs = options.timeoutMs ?? DEFAULT_TIMEOUT_MS;
    this.debug = options.debug ?? false;
  }

  AppID() {
    return this.appId;
  }

  Secret() {
    return this.secret;
  }

  setDebug(debug: boolean) {
    this.debug = debug;
  }

  postUrl(req: PostRequest) {
    return `${this.baseUrl}/${req.path()}`;
  }

  getUrl(req: GetRequest) {
    return `${this.baseUrl}/${req.path()}?${req.encode()}`;
  }

  uploadUrl(req: UploadRequest) {
    return `${this.baseUrl}/${req.path()}`;
  }

  async post<T>(accessToken: string, req: PostRequest, signal?: AbortSignal): Promise<T> {
    const envelope = await this.sendJson<T>("POST", this.postUrl(req), accessToken, req.encode(), signal);
    return unwrapData<T>(envelope);
  }

  async get<T>(accessToken: string, req: GetRequest, signal?: AbortSignal): Promise<T> {
    const envelope = await this.sendJson<T>("GET", this.getUrl(req), accessToken, undefined, signal);
    return unwrapData<T>(envelope);
  }

  async getOnBody<T>(accessToken: string, req: PostRequest, signal?: AbortSignal): Promise<T> {
    const envelope = await this.sendJson<T>("GET", this.postUrl(req), accessToken, req.encode(), signal);
    return unwrapData<T>(envelope);
  }

  async getBytes(accessToken: string, req: GetRequest, signal?: AbortSignal): Promise<Uint8Array> {
    const url = this.getUrl(req);
    printGetRequest(url, this.debug);
    const response = await this.fetchImpl(url, {
      method: "GET",
      headers: accessToken ? { "Access-Token": accessToken } : undefined,
      signal: signal ?? AbortSignal.timeout(this.timeoutMs),
    });
    return new Uint8Array(await response.arrayBuffer());
  }

  async upload<T>(accessToken: string, req: UploadRequest, signal?: AbortSignal): Promise<T> {
    const form = new FormData();
    const debugFields: Record<string, string> = {};
    for (const field of req.encode()) {
      if (field.reader) {
        const blob = toBlob(field.reader);
        form.append(field.key, blob, field.value);
        debugFields[field.key] = `@${field.value}`;
      } else {
        form.append(field.key, field.value);
        debugFields[field.key] = field.value;
      }
    }
    const url = this.uploadUrl(req);
    printPostMultipartRequest(url, debugFields, this.debug);
    const headers = new Headers();
    if (accessToken) {
      headers.set("Access-Token", accessToken);
    }
    const envelope = await this.parseEnvelope<T>(
      await this.fetchImpl(url, {
        method: "POST",
        headers,
        body: form,
        signal: signal ?? AbortSignal.timeout(this.timeoutMs),
      }),
    );
    return unwrapData<T>(envelope);
  }

  async postRaw(accessToken: string, url: string, body: Uint8Array, signal?: AbortSignal): Promise<BaseResponse> {
    return this.sendJson("POST", url, accessToken, body, signal);
  }

  private async sendJson<T>(
    method: "GET" | "POST",
    url: string,
    accessToken: string,
    body: Uint8Array | undefined,
    signal?: AbortSignal,
  ): Promise<BaseResponse> {
    if (method === "GET" && !body) {
      printGetRequest(url, this.debug);
    } else if (body) {
      printPostJsonRequest(url, body, this.debug);
    }
    const headers = new Headers({ "Content-Type": "application/json" });
    if (accessToken) {
      headers.set("Access-Token", accessToken);
    }
    try {
      return await this.parseEnvelope<T>(
        await this.fetchImpl(url, {
          method,
          headers,
          body: body ? toFetchBody(body) : undefined,
          signal: signal ?? AbortSignal.timeout(this.timeoutMs),
        }),
      );
    } catch (error) {
      printError(error, this.debug);
      throw error;
    }
  }

  private async parseEnvelope<T>(response: globalThis.Response): Promise<BaseResponse> {
    const text = await response.text();
    printHttpResponse(text, this.debug);
    const parsed = text ? jsonUnmarshal<Partial<BaseResponse> & { data?: T }>(text) : {};
    return new BaseResponse({
      message: parsed.message,
      request_id: parsed.request_id,
      data: parsed.data,
      code: parsed.code,
    });
  }
}

export function NewSDKClient(appId: number | string, secret: string, options?: SDKClientOptions) {
  return new SDKClient(appId, secret, options);
}

function unwrapData<T>(envelope: BaseResponse): T {
  if (envelope.isError() || isResponse(envelope) && envelope.isError()) {
    throw envelope;
  }
  return envelope.data as T;
}

function toBlob(reader: Blob | ArrayBuffer | Uint8Array): Blob {
  if (reader instanceof Blob) {
    return reader;
  }
  return new Blob([toFetchBody(reader instanceof ArrayBuffer ? new Uint8Array(reader) : reader)]);
}

function toFetchBody(body: Uint8Array): Uint8Array<ArrayBuffer> {
  return new Uint8Array(body);
}
