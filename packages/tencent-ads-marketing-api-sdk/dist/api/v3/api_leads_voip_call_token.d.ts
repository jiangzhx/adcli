import { ApiClient, type ApiResponse } from "./client";
import type { LeadsVoipCallTokenGetResponseData } from "../../model/v3/index";
export interface LeadsVoipCallTokenApiGetRequest {
    accountId: number | string;
    userId: number | string;
    requestId?: string;
    fields?: unknown;
}
export declare class LeadsVoipCallTokenApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: LeadsVoipCallTokenApiGetRequest): Promise<LeadsVoipCallTokenGetResponseData>;
    getWithHttpInfo(request: LeadsVoipCallTokenApiGetRequest): Promise<ApiResponse<LeadsVoipCallTokenGetResponseData>>;
}
