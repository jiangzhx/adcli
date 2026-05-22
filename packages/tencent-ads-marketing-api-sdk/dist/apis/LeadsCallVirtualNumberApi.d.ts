import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LeadsCallVirtualNumberGetRequest, LeadsCallVirtualNumberGetResponseData } from "../models";
export interface LeadsCallVirtualNumberApiGetRequest {
    data: LeadsCallVirtualNumberGetRequest;
}
export declare class LeadsCallVirtualNumberApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: LeadsCallVirtualNumberApiGetRequest): Promise<LeadsCallVirtualNumberGetResponseData>;
    getWithHttpInfo(request: LeadsCallVirtualNumberApiGetRequest): Promise<ApiResponse<LeadsCallVirtualNumberGetResponseData>>;
}
