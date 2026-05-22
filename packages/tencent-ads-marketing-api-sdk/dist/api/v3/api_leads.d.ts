import { ApiClient, type ApiResponse } from "./client";
import type { LeadsAddRequest, LeadsAddResponseData, LeadsUpdateRequest, LeadsUpdateResponseData } from "../../model/v3/index";
export interface LeadsApiAddRequest {
    data: LeadsAddRequest;
}
export interface LeadsApiUpdateRequest {
    data: LeadsUpdateRequest;
}
export declare class LeadsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: LeadsApiAddRequest): Promise<LeadsAddResponseData>;
    addWithHttpInfo(request: LeadsApiAddRequest): Promise<ApiResponse<LeadsAddResponseData>>;
    update(request: LeadsApiUpdateRequest): Promise<LeadsUpdateResponseData>;
    updateWithHttpInfo(request: LeadsApiUpdateRequest): Promise<ApiResponse<LeadsUpdateResponseData>>;
}
