import { ApiClient, type ApiResponse } from "./client";
import type { AndroidChannelGetResponseData } from "../../model/v3/index";
export interface AndroidChannelApiGetRequest {
    accountId: number | string;
    appId: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class AndroidChannelApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: AndroidChannelApiGetRequest): Promise<AndroidChannelGetResponseData>;
    getWithHttpInfo(request: AndroidChannelApiGetRequest): Promise<ApiResponse<AndroidChannelGetResponseData>>;
}
