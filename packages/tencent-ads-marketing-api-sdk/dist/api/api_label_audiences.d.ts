import { ApiClient, type ApiResponse } from "./client";
import type { LabelAudiencesAddRequest, LabelAudiencesAddResponseData } from "../model/index";
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
