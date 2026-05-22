import { ApiClient, type ApiResponse } from "./client";
import type { AgencyGetResponseData } from "../../model/v3/index";
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
