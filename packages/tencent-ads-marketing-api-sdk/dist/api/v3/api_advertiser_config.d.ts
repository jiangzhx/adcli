import { ApiClient, type ApiResponse } from "./client";
import type { AdvertiserConfigAddRequest, AdvertiserConfigGetResponseData } from "../../model/v3/index";
export interface AdvertiserConfigApiAddRequest {
    data: AdvertiserConfigAddRequest;
}
export interface AdvertiserConfigApiGetRequest {
    accountId: number | string;
    organizationId?: number | string;
    fields?: unknown;
}
export declare class AdvertiserConfigApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: AdvertiserConfigApiAddRequest): Promise<unknown>;
    addWithHttpInfo(request: AdvertiserConfigApiAddRequest): Promise<ApiResponse<unknown>>;
    get(request: AdvertiserConfigApiGetRequest): Promise<AdvertiserConfigGetResponseData>;
    getWithHttpInfo(request: AdvertiserConfigApiGetRequest): Promise<ApiResponse<AdvertiserConfigGetResponseData>>;
}
