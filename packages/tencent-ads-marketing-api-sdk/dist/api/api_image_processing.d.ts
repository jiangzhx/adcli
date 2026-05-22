import { ApiClient, type ApiResponse } from "./client";
import type { ImageProcessingAddRequest, ImageProcessingAddResponseData } from "../model/index";
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
