import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { SubsidyBoundAccountListGetResponseData } from "../models";
export interface V3SubsidyBoundAccountListApiGetRequest {
    accountId: number | string;
    page: number;
    pageSize: number;
    fields?: unknown;
}
export declare class V3SubsidyBoundAccountListApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3SubsidyBoundAccountListApiGetRequest): Promise<SubsidyBoundAccountListGetResponseData>;
    getWithHttpInfo(request: V3SubsidyBoundAccountListApiGetRequest): Promise<ApiResponse<SubsidyBoundAccountListGetResponseData>>;
}
