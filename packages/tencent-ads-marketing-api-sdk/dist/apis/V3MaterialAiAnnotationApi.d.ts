import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { MaterialAiAnnotationAddRequest, MaterialAiAnnotationAddResponseData } from "../models";
export interface V3MaterialAiAnnotationApiAddRequest {
    data: MaterialAiAnnotationAddRequest;
}
export declare class V3MaterialAiAnnotationApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3MaterialAiAnnotationApiAddRequest): Promise<MaterialAiAnnotationAddResponseData>;
    addWithHttpInfo(request: V3MaterialAiAnnotationApiAddRequest): Promise<ApiResponse<MaterialAiAnnotationAddResponseData>>;
}
