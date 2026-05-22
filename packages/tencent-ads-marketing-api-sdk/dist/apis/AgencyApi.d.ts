import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AgencyGetResponseData } from "../models";
export interface AgencyApiGetRequest {
    fields: string[];
    page: number;
    pageSize: number;
    accountId?: number | string;
}
export declare class AgencyApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: AgencyApiGetRequest): Promise<AgencyGetResponseData>;
    getWithHttpInfo(request: AgencyApiGetRequest): Promise<ApiResponse<AgencyGetResponseData>>;
}
