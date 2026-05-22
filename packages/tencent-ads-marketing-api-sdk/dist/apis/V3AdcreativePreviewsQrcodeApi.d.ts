import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdcreativePreviewsQrcodeGetResponseData } from "../models";
export interface V3AdcreativePreviewsQrcodeApiGetRequest {
    accountId: number | string;
    adgroupId: number | string;
    fields?: unknown;
}
export declare class V3AdcreativePreviewsQrcodeApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3AdcreativePreviewsQrcodeApiGetRequest): Promise<AdcreativePreviewsQrcodeGetResponseData>;
    getWithHttpInfo(request: V3AdcreativePreviewsQrcodeApiGetRequest): Promise<ApiResponse<AdcreativePreviewsQrcodeGetResponseData>>;
}
