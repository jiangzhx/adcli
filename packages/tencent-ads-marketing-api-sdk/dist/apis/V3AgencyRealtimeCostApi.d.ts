import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AgencyRealtimeCostGetResponseData } from "../models";
export interface V3AgencyRealtimeCostApiGetRequest {
    accountId: number | string;
    fields?: unknown;
}
export declare class V3AgencyRealtimeCostApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3AgencyRealtimeCostApiGetRequest): Promise<AgencyRealtimeCostGetResponseData>;
    getWithHttpInfo(request: V3AgencyRealtimeCostApiGetRequest): Promise<ApiResponse<AgencyRealtimeCostGetResponseData>>;
}
