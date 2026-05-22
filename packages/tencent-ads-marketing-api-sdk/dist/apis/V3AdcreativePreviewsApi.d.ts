import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdcreativePreviewsAddRequest, AdcreativePreviewsAddResponseData, AdcreativePreviewsGetResponseData, FilteringStruct } from "../models";
export interface V3AdcreativePreviewsApiAddRequest {
    data: AdcreativePreviewsAddRequest;
}
export interface V3AdcreativePreviewsApiGetRequest {
    accountId: number | string;
    filtering: FilteringStruct[];
    fields?: unknown;
}
export declare class V3AdcreativePreviewsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3AdcreativePreviewsApiAddRequest): Promise<AdcreativePreviewsAddResponseData>;
    addWithHttpInfo(request: V3AdcreativePreviewsApiAddRequest): Promise<ApiResponse<AdcreativePreviewsAddResponseData>>;
    get(request: V3AdcreativePreviewsApiGetRequest): Promise<AdcreativePreviewsGetResponseData>;
    getWithHttpInfo(request: V3AdcreativePreviewsApiGetRequest): Promise<ApiResponse<AdcreativePreviewsGetResponseData>>;
}
