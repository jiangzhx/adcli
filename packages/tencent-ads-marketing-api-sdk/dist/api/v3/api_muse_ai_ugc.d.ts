import { ApiClient, type ApiResponse } from "./client";
import type { MuseAiUgcAddRequest, MuseAiUgcAddResponseData } from "../../model/v3/index";
export interface MuseAiUgcApiAddRequest {
    data: MuseAiUgcAddRequest;
}
export declare class MuseAiUgcApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: MuseAiUgcApiAddRequest): Promise<MuseAiUgcAddResponseData>;
    addWithHttpInfo(request: MuseAiUgcApiAddRequest): Promise<ApiResponse<MuseAiUgcAddResponseData>>;
}
