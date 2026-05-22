import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LeadsInvalidPayGetRequest, LeadsInvalidPayGetResponseData } from "../models";
export interface LeadsInvalidPayApiGetRequest {
    data: LeadsInvalidPayGetRequest;
}
export declare class LeadsInvalidPayApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: LeadsInvalidPayApiGetRequest): Promise<LeadsInvalidPayGetResponseData>;
    getWithHttpInfo(request: LeadsInvalidPayApiGetRequest): Promise<ApiResponse<LeadsInvalidPayGetResponseData>>;
}
