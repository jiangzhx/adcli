import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LeadsClaimUpdateRequest, LeadsClaimUpdateResponseData } from "../models";
export interface V3LeadsClaimApiUpdateRequest {
    data: LeadsClaimUpdateRequest;
}
export declare class V3LeadsClaimApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    update(request: V3LeadsClaimApiUpdateRequest): Promise<LeadsClaimUpdateResponseData>;
    updateWithHttpInfo(request: V3LeadsClaimApiUpdateRequest): Promise<ApiResponse<LeadsClaimUpdateResponseData>>;
}
