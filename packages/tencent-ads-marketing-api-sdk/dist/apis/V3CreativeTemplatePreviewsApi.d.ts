import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CreativeTemplatePreviewsGetRequest, CreativeTemplatePreviewsGetResponseData } from "../models";
export interface V3CreativeTemplatePreviewsApiGetRequest {
    data: CreativeTemplatePreviewsGetRequest;
}
export declare class V3CreativeTemplatePreviewsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3CreativeTemplatePreviewsApiGetRequest): Promise<CreativeTemplatePreviewsGetResponseData>;
    getWithHttpInfo(request: V3CreativeTemplatePreviewsApiGetRequest): Promise<ApiResponse<CreativeTemplatePreviewsGetResponseData>>;
}
