import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { RealtimeCostGetResponseData } from "../models";
export interface RealtimeCostApiGetRequest {
    accountId: number | string;
    level: string;
    date: string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class RealtimeCostApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: RealtimeCostApiGetRequest): Promise<RealtimeCostGetResponseData>;
    getWithHttpInfo(request: RealtimeCostApiGetRequest): Promise<ApiResponse<RealtimeCostGetResponseData>>;
}
