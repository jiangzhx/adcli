import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdcreativeTemplatePreviewsGetRequest, AdcreativeTemplatePreviewsGetResponseData } from "../models";
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
