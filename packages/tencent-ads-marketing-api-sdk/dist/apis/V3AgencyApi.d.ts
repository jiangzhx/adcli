import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AgencyGetResponseData } from "../models";
export interface V3AgencyApiGetRequest {
    fields: string[];
    page: number;
    pageSize: number;
    accountId?: number | string;
}
export declare class V3AgencyApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3AgencyApiGetRequest): Promise<AgencyGetResponseData>;
    getWithHttpInfo(request: V3AgencyApiGetRequest): Promise<ApiResponse<AgencyGetResponseData>>;
}
