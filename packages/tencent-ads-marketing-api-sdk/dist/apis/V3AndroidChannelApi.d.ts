import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AndroidChannelGetResponseData } from "../models";
export interface V3AndroidChannelApiGetRequest {
    accountId: number | string;
    appId: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class V3AndroidChannelApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3AndroidChannelApiGetRequest): Promise<AndroidChannelGetResponseData>;
    getWithHttpInfo(request: V3AndroidChannelApiGetRequest): Promise<ApiResponse<AndroidChannelGetResponseData>>;
}
