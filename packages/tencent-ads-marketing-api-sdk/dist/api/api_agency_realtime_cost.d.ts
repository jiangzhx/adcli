import { ApiClient, type ApiResponse } from "./client";
import type { AgencyRealtimeCostGetResponseData } from "../model/index";
export interface AgencyRealtimeCostApiGetRequest {
    accountId: number | string;
    fields?: unknown;
}
export declare class AgencyRealtimeCostApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: AgencyRealtimeCostApiGetRequest): Promise<AgencyRealtimeCostGetResponseData>;
    getWithHttpInfo(request: AgencyRealtimeCostApiGetRequest): Promise<ApiResponse<AgencyRealtimeCostGetResponseData>>;
}
