import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { SubsidyAccountBindAddRequest, SubsidyAccountBindAddResponseData } from "../models";
export interface V3SubsidyAccountBindApiAddRequest {
    data: SubsidyAccountBindAddRequest;
}
export declare class V3SubsidyAccountBindApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3SubsidyAccountBindApiAddRequest): Promise<SubsidyAccountBindAddResponseData>;
    addWithHttpInfo(request: V3SubsidyAccountBindApiAddRequest): Promise<ApiResponse<SubsidyAccountBindAddResponseData>>;
}
