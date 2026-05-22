import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ComponentDetailGetResponseData } from "../models";
export interface V3ComponentDetailApiGetRequest {
    accountId?: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    organizationId?: number | string;
    adContext?: unknown;
    fields?: unknown;
}
export declare class V3ComponentDetailApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3ComponentDetailApiGetRequest): Promise<ComponentDetailGetResponseData>;
    getWithHttpInfo(request: V3ComponentDetailApiGetRequest): Promise<ApiResponse<ComponentDetailGetResponseData>>;
}
