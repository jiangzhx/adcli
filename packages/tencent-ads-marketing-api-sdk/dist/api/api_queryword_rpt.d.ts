import { ApiClient, type ApiResponse } from "./client";
import type { QuerywordRptGetRequest, QuerywordRptGetResponseData } from "../model/index";
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
