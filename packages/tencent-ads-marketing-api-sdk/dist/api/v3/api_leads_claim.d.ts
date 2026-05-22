import { ApiClient, type ApiResponse } from "./client";
import type { LeadsClaimUpdateRequest, LeadsClaimUpdateResponseData } from "../../model/v3/index";
export interface LeadsClaimApiUpdateRequest {
    data: LeadsClaimUpdateRequest;
}
export declare class LeadsClaimApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    update(request: LeadsClaimApiUpdateRequest): Promise<LeadsClaimUpdateResponseData>;
    updateWithHttpInfo(request: LeadsClaimApiUpdateRequest): Promise<ApiResponse<LeadsClaimUpdateResponseData>>;
}
