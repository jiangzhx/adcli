import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { RealtimeCostGetResponseData } from "../models";
export interface V3RealtimeCostApiGetRequest {
    accountId: number | string;
    level: string;
    date: string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class V3RealtimeCostApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3RealtimeCostApiGetRequest): Promise<RealtimeCostGetResponseData>;
    getWithHttpInfo(request: V3RealtimeCostApiGetRequest): Promise<ApiResponse<RealtimeCostGetResponseData>>;
}
