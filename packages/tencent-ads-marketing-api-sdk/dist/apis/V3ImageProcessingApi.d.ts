import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ImageProcessingAddRequest, ImageProcessingAddResponseData } from "../models";
export interface V3ImageProcessingApiAddRequest {
    data: ImageProcessingAddRequest;
}
export declare class V3ImageProcessingApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3ImageProcessingApiAddRequest): Promise<ImageProcessingAddResponseData>;
    addWithHttpInfo(request: V3ImageProcessingApiAddRequest): Promise<ApiResponse<ImageProcessingAddResponseData>>;
}
