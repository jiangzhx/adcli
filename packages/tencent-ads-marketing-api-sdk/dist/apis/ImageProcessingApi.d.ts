import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ImageProcessingAddRequest, ImageProcessingAddResponseData } from "../models";
export interface ImageProcessingApiAddRequest {
    data: ImageProcessingAddRequest;
}
export declare class ImageProcessingApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: ImageProcessingApiAddRequest): Promise<ImageProcessingAddResponseData>;
    addWithHttpInfo(request: ImageProcessingApiAddRequest): Promise<ApiResponse<ImageProcessingAddResponseData>>;
}
