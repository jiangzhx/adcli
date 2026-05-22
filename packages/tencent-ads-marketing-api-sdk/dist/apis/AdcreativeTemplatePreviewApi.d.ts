import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdcreativeTemplatePreviewGetRequest, AdcreativeTemplatePreviewGetResponseData } from "../models";
export interface AdcreativeTemplatePreviewApiGetRequest {
    data: AdcreativeTemplatePreviewGetRequest;
}
export declare class AdcreativeTemplatePreviewApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: AdcreativeTemplatePreviewApiGetRequest): Promise<AdcreativeTemplatePreviewGetResponseData>;
    getWithHttpInfo(request: AdcreativeTemplatePreviewApiGetRequest): Promise<ApiResponse<AdcreativeTemplatePreviewGetResponseData>>;
}
