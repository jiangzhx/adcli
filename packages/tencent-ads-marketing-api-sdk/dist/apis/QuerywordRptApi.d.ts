import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QuerywordRptGetRequest, QuerywordRptGetResponseData } from "../models";
export interface QuerywordRptApiGetRequest {
    data: QuerywordRptGetRequest;
}
export declare class QuerywordRptApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: QuerywordRptApiGetRequest): Promise<QuerywordRptGetResponseData>;
    getWithHttpInfo(request: QuerywordRptApiGetRequest): Promise<ApiResponse<QuerywordRptGetResponseData>>;
}
