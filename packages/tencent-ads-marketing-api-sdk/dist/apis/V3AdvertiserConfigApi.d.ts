import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdvertiserConfigAddRequest, AdvertiserConfigGetResponseData } from "../models";
export interface V3AdvertiserConfigApiAddRequest {
    data: AdvertiserConfigAddRequest;
}
export interface V3AdvertiserConfigApiGetRequest {
    accountId: number | string;
    organizationId?: number | string;
    fields?: unknown;
}
export declare class V3AdvertiserConfigApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3AdvertiserConfigApiAddRequest): Promise<unknown>;
    addWithHttpInfo(request: V3AdvertiserConfigApiAddRequest): Promise<ApiResponse<unknown>>;
    get(request: V3AdvertiserConfigApiGetRequest): Promise<AdvertiserConfigGetResponseData>;
    getWithHttpInfo(request: V3AdvertiserConfigApiGetRequest): Promise<ApiResponse<AdvertiserConfigGetResponseData>>;
}
