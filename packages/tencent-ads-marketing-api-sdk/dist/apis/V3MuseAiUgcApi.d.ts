import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { MuseAiUgcAddRequest, MuseAiUgcAddResponseData } from "../models";
export interface V3MuseAiUgcApiAddRequest {
    data: MuseAiUgcAddRequest;
}
export declare class V3MuseAiUgcApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3MuseAiUgcApiAddRequest): Promise<MuseAiUgcAddResponseData>;
    addWithHttpInfo(request: V3MuseAiUgcApiAddRequest): Promise<ApiResponse<MuseAiUgcAddResponseData>>;
}
