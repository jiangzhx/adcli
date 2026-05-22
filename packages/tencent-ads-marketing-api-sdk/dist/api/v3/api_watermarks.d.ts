import { ApiClient, type ApiResponse } from "./client";
import type { WatermarksAddRequest, WatermarksAddResponseData, WatermarksGetResponseData } from "../../model/v3/index";
export interface WatermarksApiAddRequest {
    data: WatermarksAddRequest;
}
export interface WatermarksApiGetRequest {
    accountId?: number | string;
    organizationId?: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class WatermarksApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: WatermarksApiAddRequest): Promise<WatermarksAddResponseData>;
    addWithHttpInfo(request: WatermarksApiAddRequest): Promise<ApiResponse<WatermarksAddResponseData>>;
    get(request: WatermarksApiGetRequest): Promise<WatermarksGetResponseData>;
    getWithHttpInfo(request: WatermarksApiGetRequest): Promise<ApiResponse<WatermarksGetResponseData>>;
}
