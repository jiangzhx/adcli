import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ConversionLinkAssetsAddRequest, ConversionLinkAssetsAddResponseData, ConversionLinkAssetsGetResponseData, ConversionLinkAssetsUpdateRequest, ConversionLinkAssetsUpdateResponseData, FilteringStruct } from "../models";
export interface V3ConversionLinkAssetsApiAddRequest {
    data: ConversionLinkAssetsAddRequest;
}
export interface V3ConversionLinkAssetsApiGetRequest {
    accountId: number | string;
    filtering: FilteringStruct[];
    page?: number;
    pageSize?: number;
    key?: string;
    fields?: unknown;
}
export interface V3ConversionLinkAssetsApiUpdateRequest {
    data: ConversionLinkAssetsUpdateRequest;
}
export declare class V3ConversionLinkAssetsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3ConversionLinkAssetsApiAddRequest): Promise<ConversionLinkAssetsAddResponseData>;
    addWithHttpInfo(request: V3ConversionLinkAssetsApiAddRequest): Promise<ApiResponse<ConversionLinkAssetsAddResponseData>>;
    get(request: V3ConversionLinkAssetsApiGetRequest): Promise<ConversionLinkAssetsGetResponseData>;
    getWithHttpInfo(request: V3ConversionLinkAssetsApiGetRequest): Promise<ApiResponse<ConversionLinkAssetsGetResponseData>>;
    update(request: V3ConversionLinkAssetsApiUpdateRequest): Promise<ConversionLinkAssetsUpdateResponseData>;
    updateWithHttpInfo(request: V3ConversionLinkAssetsApiUpdateRequest): Promise<ApiResponse<ConversionLinkAssetsUpdateResponseData>>;
}
