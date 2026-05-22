import { ApiClient, type ApiResponse } from "./client";
import type { DynamicCreativePreviewsAddRequest, DynamicCreativePreviewsAddResponseData } from "../../model/v3/index";
export interface DynamicCreativePreviewsApiAddRequest {
    data: DynamicCreativePreviewsAddRequest;
}
export declare class DynamicCreativePreviewsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: DynamicCreativePreviewsApiAddRequest): Promise<DynamicCreativePreviewsAddResponseData>;
    addWithHttpInfo(request: DynamicCreativePreviewsApiAddRequest): Promise<ApiResponse<DynamicCreativePreviewsAddResponseData>>;
}
