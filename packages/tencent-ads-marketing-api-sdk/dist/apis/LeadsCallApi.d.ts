import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LeadsCallCreateRequest, LeadsCallCreateResponseData } from "../models";
export interface LeadsCallApiCreateRequest {
    data: LeadsCallCreateRequest;
}
export declare class LeadsCallApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    create(request: LeadsCallApiCreateRequest): Promise<LeadsCallCreateResponseData>;
    createWithHttpInfo(request: LeadsCallApiCreateRequest): Promise<ApiResponse<LeadsCallCreateResponseData>>;
}
