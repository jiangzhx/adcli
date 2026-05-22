import { ApiClient, type ApiResponse } from "./client";
import type { AdcreativeTemplatePreviewsGetRequest, AdcreativeTemplatePreviewsGetResponseData } from "../model/index";
export interface AdcreativeTemplatePreviewsApiGetRequest {
    data: AdcreativeTemplatePreviewsGetRequest;
}
export declare class AdcreativeTemplatePreviewsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: AdcreativeTemplatePreviewsApiGetRequest): Promise<AdcreativeTemplatePreviewsGetResponseData>;
    getWithHttpInfo(request: AdcreativeTemplatePreviewsApiGetRequest): Promise<ApiResponse<AdcreativeTemplatePreviewsGetResponseData>>;
}
