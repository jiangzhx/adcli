import { ApiClient, type ApiResponse } from "./client";
import type { LeadsCallTokenGetRequest, LeadsCallTokenGetResponseData } from "../model/index";
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
