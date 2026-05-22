import { ApiClient, type ApiResponse } from "./client";
import type { LeadsCallCreateRequest, LeadsCallCreateResponseData } from "../model/index";
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
