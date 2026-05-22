import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LeadsCallTokenGetRequest, LeadsCallTokenGetResponseData } from "../models";
export interface LeadsCallTokenApiGetRequest {
    data: LeadsCallTokenGetRequest;
}
export declare class LeadsCallTokenApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: LeadsCallTokenApiGetRequest): Promise<LeadsCallTokenGetResponseData>;
    getWithHttpInfo(request: LeadsCallTokenApiGetRequest): Promise<ApiResponse<LeadsCallTokenGetResponseData>>;
}
