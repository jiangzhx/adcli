import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdcreativePreviewsAddRequest, AdcreativePreviewsGetResponseData, FilteringStruct } from "../models";
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
    add(request: AdcreativePreviewsApiAddRequest): Promise<unknown>;
    addWithHttpInfo(request: AdcreativePreviewsApiAddRequest): Promise<ApiResponse<unknown>>;
    get(request: AdcreativePreviewsApiGetRequest): Promise<AdcreativePreviewsGetResponseData>;
    getWithHttpInfo(request: AdcreativePreviewsApiGetRequest): Promise<ApiResponse<AdcreativePreviewsGetResponseData>>;
}
