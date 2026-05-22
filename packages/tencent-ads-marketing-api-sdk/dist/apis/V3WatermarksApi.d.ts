import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { WatermarksAddRequest, WatermarksAddResponseData, WatermarksGetResponseData } from "../models";
export interface V3WatermarksApiAddRequest {
    data: WatermarksAddRequest;
}
export interface V3WatermarksApiGetRequest {
    accountId?: number | string;
    organizationId?: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class V3WatermarksApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3WatermarksApiAddRequest): Promise<WatermarksAddResponseData>;
    addWithHttpInfo(request: V3WatermarksApiAddRequest): Promise<ApiResponse<WatermarksAddResponseData>>;
    get(request: V3WatermarksApiGetRequest): Promise<WatermarksGetResponseData>;
    getWithHttpInfo(request: V3WatermarksApiGetRequest): Promise<ApiResponse<WatermarksGetResponseData>>;
}
