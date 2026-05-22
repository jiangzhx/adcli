import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DynamicCreativePreviewsAddRequest, DynamicCreativePreviewsAddResponseData } from "../models";
export interface V3DynamicCreativePreviewsApiAddRequest {
    data: DynamicCreativePreviewsAddRequest;
}
export declare class V3DynamicCreativePreviewsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3DynamicCreativePreviewsApiAddRequest): Promise<DynamicCreativePreviewsAddResponseData>;
    addWithHttpInfo(request: V3DynamicCreativePreviewsApiAddRequest): Promise<ApiResponse<DynamicCreativePreviewsAddResponseData>>;
}
