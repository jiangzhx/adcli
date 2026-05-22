import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LeadsVoipCallAddRequest, LeadsVoipCallAddResponseData } from "../models";
export interface V3LeadsVoipCallApiAddRequest {
    data: LeadsVoipCallAddRequest;
}
export declare class V3LeadsVoipCallApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3LeadsVoipCallApiAddRequest): Promise<LeadsVoipCallAddResponseData>;
    addWithHttpInfo(request: V3LeadsVoipCallApiAddRequest): Promise<ApiResponse<LeadsVoipCallAddResponseData>>;
}
