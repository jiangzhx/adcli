// Generated from tencentad/marketing-api-go-sdk pkg/api/client.go
// Do not edit manually.
import JSONbig from "json-bigint";
import { DefaultConfiguration } from "../config/configuration.js";
const JSONBigStringParser = JSONbig({ storeAsString: true });
export const SDK_VERSION = "1.7.84";
export class ApiClient {
    basePath = DefaultConfiguration.basePath;
    fetchImpl;
    accessToken;
    defaultHeaders = new Headers();
    constructor(options = {}) {
        this.fetchImpl = options.fetch ?? fetch;
        if (options.basePath) {
            this.basePath = options.basePath;
        }
        this.setUserAgent("Tencent Ads Marketing API SDK");
        this.addDefaultHeader("X-Sdk-Language", "node");
        this.addDefaultHeader("X-Sdk-Version", SDK_VERSION);
    }
    getBasePath() {
        return this.basePath;
    }
    setBasePath(basePath) {
        this.basePath = basePath;
        return this;
    }
    setUserAgent(userAgent) {
        this.addDefaultHeader("User-Agent", userAgent);
        return this;
    }
    addDefaultHeader(name, value) {
        this.defaultHeaders.set(name, value);
        return this;
    }
    setAccessToken(token) {
        this.accessToken = token;
        this.addDefaultHeader("Access-Token", token);
        return this;
    }
    buildUrl(path, queryParams = [], basePathOverride) {
        const requestBasePath = basePathOverride ?? this.basePath;
        const basePath = requestBasePath.endsWith("/") ? requestBasePath : `${requestBasePath}/`;
        const relativePath = path.startsWith("/") ? path.slice(1) : path;
        const url = new URL(relativePath, basePath);
        for (const param of queryParams) {
            if (param.value == null) {
                continue;
            }
            if (Array.isArray(param.value)) {
                if (param.collectionFormat === "multi") {
                    url.searchParams.append(param.name, JSON.stringify(param.value));
                    continue;
                }
                if (param.collectionFormat !== "csv") {
                    throw new ApiException(`Unsupported collection format for query parameter '${param.name}'`);
                }
                url.searchParams.append(param.name, param.value.map((value) => this.parameterToString(value)).join(","));
                continue;
            }
            url.searchParams.append(param.name, this.parameterToString(param.value));
        }
        this.applyAuthQueryParams(url);
        return url;
    }
    async request(options) {
        const response = await this.requestWithHttpInfo(options);
        return response.data;
    }
    async requestWithHttpInfo(options) {
        const request = this.buildRequest(options);
        const response = await this.fetchImpl(request);
        const responseBody = await this.readResponseBody(response, options.responseType);
        if (!response.ok) {
            throw new ApiException(`HTTP ${response.status}`, {
                statusCode: response.status,
                responseBody,
                headers: response.headers,
            });
        }
        return {
            data: this.unwrapResponseData(responseBody, options.responseType),
            statusCode: response.status,
            headers: response.headers,
        };
    }
    buildRequest(options) {
        const headers = new Headers(this.defaultHeaders);
        for (const [name, value] of Object.entries(options.headers ?? {})) {
            headers.set(name, value);
        }
        if (!headers.has("Accept")) {
            headers.set("Accept", "application/json");
        }
        if (options.contentType && options.contentType !== "multipart/form-data") {
            headers.set("Content-Type", options.contentType);
        }
        let body;
        if (options.method !== "GET" && (options.formParams || options.files)) {
            const contentType = options.contentType ?? "application/x-www-form-urlencoded";
            if (contentType === "multipart/form-data") {
                body = this.buildMultipartFormBody(options.formParams, options.files);
            }
            else if (contentType === "application/x-www-form-urlencoded") {
                headers.set("Content-Type", contentType);
                const formBody = new URLSearchParams();
                for (const [name, value] of Object.entries(options.formParams ?? {})) {
                    if (value != null) {
                        formBody.append(name, this.parameterToString(value));
                    }
                }
                body = formBody;
            }
            else {
                throw new ApiException(`Unsupported form content type '${contentType}'`);
            }
        }
        else if (options.method !== "GET" && options.body != null) {
            const contentType = options.contentType ?? "application/json";
            headers.set("Content-Type", contentType);
            body = contentType === "application/json" ? JSON.stringify(options.body) : String(options.body);
        }
        return new Request(this.buildUrl(options.path, options.queryParams, options.basePath), {
            method: options.method,
            headers,
            body,
        });
    }
    buildMultipartFormBody(formParams = {}, files = {}) {
        const formBody = new FormData();
        for (const [name, value] of Object.entries(formParams)) {
            if (value != null) {
                formBody.append(name, this.parameterToString(value));
            }
        }
        for (const [name, value] of Object.entries(files)) {
            if (value != null) {
                formBody.append(name, value);
            }
        }
        return formBody;
    }
    async readResponseBody(response, responseType = "json") {
        if (responseType === "arrayBuffer") {
            return response.arrayBuffer();
        }
        const text = await response.text();
        if (!text) {
            return undefined;
        }
        if (responseType === "text") {
            return text;
        }
        const contentType = response.headers.get("Content-Type") ?? "";
        if (contentType.includes("application/json")) {
            return parseJsonPreservingLargeIntegers(text);
        }
        return text;
    }
    unwrapResponseData(responseBody, responseType = "json") {
        if (responseType !== "json" || !isRecord(responseBody) || typeof responseBody.code !== "number") {
            return responseBody;
        }
        if (responseBody.code !== 0) {
            throw new ApiException(getApiErrorMessage(responseBody), {
                responseBody,
            });
        }
        return responseBody.data;
    }
    parameterToString(value) {
        if (value instanceof Date) {
            return value.toISOString();
        }
        if (typeof value === "object" && value !== null) {
            return JSON.stringify(value);
        }
        return String(value);
    }
    applyAuthQueryParams(url) {
        if (!this.accessToken) {
            return;
        }
        url.searchParams.set("access_token", this.accessToken);
        url.searchParams.set("timestamp", Math.floor(Date.now() / 1000).toString());
        url.searchParams.set("nonce", createNonce());
    }
}
export class ApiException extends Error {
    statusCode;
    responseBody;
    headers;
    constructor(message, options = {}) {
        super(message);
        this.name = "ApiException";
        this.statusCode = options.statusCode;
        this.responseBody = options.responseBody;
        this.headers = options.headers;
    }
}
export function parseJsonPreservingLargeIntegers(text) {
    return JSONBigStringParser.parse(text);
}
function isRecord(value) {
    return typeof value === "object" && value !== null && !Array.isArray(value);
}
function getApiErrorMessage(responseBody) {
    if (typeof responseBody.message === "string" && responseBody.message) {
        return responseBody.message;
    }
    if (typeof responseBody.message_cn === "string" && responseBody.message_cn) {
        return responseBody.message_cn;
    }
    return `Tencent Ads API error: ${responseBody.code}`;
}
function createNonce() {
    return crypto.randomUUID().replaceAll("-", "").slice(0, 20);
}
