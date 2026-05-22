import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LeadCluesGetRequest, LeadCluesGetResponseData, LeadCluesUpdateRequest } from "../models";
export interface LeadCluesApiGetRequest {
    data: LeadCluesGetRequest;
}
export interface LeadCluesApiUpdateRequest {
    data: LeadCluesUpdateRequest;
}
export declare class LeadCluesApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: LeadCluesApiGetRequest): Promise<LeadCluesGetResponseData>;
    getWithHttpInfo(request: LeadCluesApiGetRequest): Promise<ApiResponse<LeadCluesGetResponseData>>;
    update(request: LeadCluesApiUpdateRequest): Promise<unknown>;
    updateWithHttpInfo(request: LeadCluesApiUpdateRequest): Promise<ApiResponse<unknown>>;
}
