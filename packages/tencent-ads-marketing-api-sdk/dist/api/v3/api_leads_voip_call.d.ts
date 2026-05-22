import { ApiClient, type ApiResponse } from "./client";
import type { LeadsVoipCallAddRequest, LeadsVoipCallAddResponseData } from "../../model/v3/index";
export interface LeadsVoipCallApiAddRequest {
    data: LeadsVoipCallAddRequest;
}
export declare class LeadsVoipCallApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: LeadsVoipCallApiAddRequest): Promise<LeadsVoipCallAddResponseData>;
    addWithHttpInfo(request: LeadsVoipCallApiAddRequest): Promise<ApiResponse<LeadsVoipCallAddResponseData>>;
}
