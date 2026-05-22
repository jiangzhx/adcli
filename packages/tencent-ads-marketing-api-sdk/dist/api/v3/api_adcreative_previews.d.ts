import { ApiClient, type ApiResponse } from "./client";
import type { AdcreativePreviewsAddRequest, AdcreativePreviewsAddResponseData, AdcreativePreviewsGetResponseData, FilteringStruct } from "../../model/v3/index";
export interface AdcreativePreviewsApiAddRequest {
    data: AdcreativePreviewsAddRequest;
}
export interface AdcreativePreviewsApiGetRequest {
    accountId: number | string;
    filtering: FilteringStruct[];
    fields?: unknown;
}
export declare class AdcreativePreviewsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: AdcreativePreviewsApiAddRequest): Promise<AdcreativePreviewsAddResponseData>;
    addWithHttpInfo(request: AdcreativePreviewsApiAddRequest): Promise<ApiResponse<AdcreativePreviewsAddResponseData>>;
    get(request: AdcreativePreviewsApiGetRequest): Promise<AdcreativePreviewsGetResponseData>;
    getWithHttpInfo(request: AdcreativePreviewsApiGetRequest): Promise<ApiResponse<AdcreativePreviewsGetResponseData>>;
}
