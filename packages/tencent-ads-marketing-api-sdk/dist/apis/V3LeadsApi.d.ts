import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LeadsAddRequest, LeadsAddResponseData, LeadsUpdateRequest, LeadsUpdateResponseData } from "../models";
export interface V3LeadsApiAddRequest {
    data: LeadsAddRequest;
}
export interface V3LeadsApiUpdateRequest {
    data: LeadsUpdateRequest;
}
export declare class V3LeadsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3LeadsApiAddRequest): Promise<LeadsAddResponseData>;
    addWithHttpInfo(request: V3LeadsApiAddRequest): Promise<ApiResponse<LeadsAddResponseData>>;
    update(request: V3LeadsApiUpdateRequest): Promise<LeadsUpdateResponseData>;
    updateWithHttpInfo(request: V3LeadsApiUpdateRequest): Promise<ApiResponse<LeadsUpdateResponseData>>;
}
