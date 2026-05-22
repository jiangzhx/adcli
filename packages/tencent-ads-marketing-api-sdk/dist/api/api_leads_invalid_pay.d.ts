import { ApiClient, type ApiResponse } from "./client";
import type { LeadsInvalidPayGetRequest, LeadsInvalidPayGetResponseData } from "../model/index";
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
