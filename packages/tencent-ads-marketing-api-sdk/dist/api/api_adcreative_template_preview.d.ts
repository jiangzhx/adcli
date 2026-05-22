import { ApiClient, type ApiResponse } from "./client";
import type { AdcreativeTemplatePreviewGetRequest, AdcreativeTemplatePreviewGetResponseData } from "../model/index";
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
