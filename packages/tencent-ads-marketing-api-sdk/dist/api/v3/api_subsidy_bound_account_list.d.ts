import { ApiClient, type ApiResponse } from "./client";
import type { SubsidyBoundAccountListGetResponseData } from "../../model/v3/index";
export interface SubsidyBoundAccountListApiGetRequest {
    accountId: number | string;
    page: number;
    pageSize: number;
    fields?: unknown;
}
export declare class SubsidyBoundAccountListApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: SubsidyBoundAccountListApiGetRequest): Promise<SubsidyBoundAccountListGetResponseData>;
    getWithHttpInfo(request: SubsidyBoundAccountListApiGetRequest): Promise<ApiResponse<SubsidyBoundAccountListGetResponseData>>;
}
