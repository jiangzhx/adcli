import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LabelAudiencesAddRequest, LabelAudiencesAddResponseData } from "../models";
export interface LabelAudiencesApiAddRequest {
    data: LabelAudiencesAddRequest;
}
export declare class LabelAudiencesApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: LabelAudiencesApiAddRequest): Promise<LabelAudiencesAddResponseData>;
    addWithHttpInfo(request: LabelAudiencesApiAddRequest): Promise<ApiResponse<LabelAudiencesAddResponseData>>;
}
