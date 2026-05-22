import { ApiClient, type ApiResponse } from "./client";
import type { CreativeTemplatePreviewsGetRequest, CreativeTemplatePreviewsGetResponseData } from "../../model/v3/index";
export interface CreativeTemplatePreviewsApiGetRequest {
    data: CreativeTemplatePreviewsGetRequest;
}
export declare class CreativeTemplatePreviewsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: CreativeTemplatePreviewsApiGetRequest): Promise<CreativeTemplatePreviewsGetResponseData>;
    getWithHttpInfo(request: CreativeTemplatePreviewsApiGetRequest): Promise<ApiResponse<CreativeTemplatePreviewsGetResponseData>>;
}
