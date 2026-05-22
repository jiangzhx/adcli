import { ApiClient, type ApiResponse } from "./client";
import type { AdcreativePreviewsQrcodeGetResponseData } from "../../model/v3/index";
export interface AdcreativePreviewsQrcodeApiGetRequest {
    accountId: number | string;
    adgroupId: number | string;
    fields?: unknown;
}
export declare class AdcreativePreviewsQrcodeApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: AdcreativePreviewsQrcodeApiGetRequest): Promise<AdcreativePreviewsQrcodeGetResponseData>;
    getWithHttpInfo(request: AdcreativePreviewsQrcodeApiGetRequest): Promise<ApiResponse<AdcreativePreviewsQrcodeGetResponseData>>;
}
