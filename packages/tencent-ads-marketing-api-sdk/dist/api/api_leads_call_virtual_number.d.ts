import { ApiClient, type ApiResponse } from "./client";
import type { LeadsCallVirtualNumberGetRequest, LeadsCallVirtualNumberGetResponseData } from "../model/index";
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
