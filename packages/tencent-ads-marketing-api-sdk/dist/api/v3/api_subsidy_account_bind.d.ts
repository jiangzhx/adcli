import { ApiClient, type ApiResponse } from "./client";
import type { SubsidyAccountBindAddRequest, SubsidyAccountBindAddResponseData } from "../../model/v3/index";
export interface SubsidyAccountBindApiAddRequest {
    data: SubsidyAccountBindAddRequest;
}
export declare class SubsidyAccountBindApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: SubsidyAccountBindApiAddRequest): Promise<SubsidyAccountBindAddResponseData>;
    addWithHttpInfo(request: SubsidyAccountBindApiAddRequest): Promise<ApiResponse<SubsidyAccountBindAddResponseData>>;
}
