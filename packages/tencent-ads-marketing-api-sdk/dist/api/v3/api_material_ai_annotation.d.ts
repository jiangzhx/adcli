import { ApiClient, type ApiResponse } from "./client";
import type { MaterialAiAnnotationAddRequest, MaterialAiAnnotationAddResponseData } from "../../model/v3/index";
export interface MaterialAiAnnotationApiAddRequest {
    data: MaterialAiAnnotationAddRequest;
}
export declare class MaterialAiAnnotationApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: MaterialAiAnnotationApiAddRequest): Promise<MaterialAiAnnotationAddResponseData>;
    addWithHttpInfo(request: MaterialAiAnnotationApiAddRequest): Promise<ApiResponse<MaterialAiAnnotationAddResponseData>>;
}
