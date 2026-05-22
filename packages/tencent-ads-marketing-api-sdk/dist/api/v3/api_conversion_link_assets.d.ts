import { ApiClient, type ApiResponse } from "./client";
import type { ConversionLinkAssetsAddRequest, ConversionLinkAssetsAddResponseData, ConversionLinkAssetsGetResponseData, ConversionLinkAssetsUpdateRequest, ConversionLinkAssetsUpdateResponseData, FilteringStruct } from "../../model/v3/index";
export interface ConversionLinkAssetsApiAddRequest {
    data: ConversionLinkAssetsAddRequest;
}
export interface ConversionLinkAssetsApiGetRequest {
    accountId: number | string;
    filtering: FilteringStruct[];
    page?: number;
    pageSize?: number;
    key?: string;
    fields?: unknown;
}
export interface ConversionLinkAssetsApiUpdateRequest {
    data: ConversionLinkAssetsUpdateRequest;
}
export declare class ConversionLinkAssetsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: ConversionLinkAssetsApiAddRequest): Promise<ConversionLinkAssetsAddResponseData>;
    addWithHttpInfo(request: ConversionLinkAssetsApiAddRequest): Promise<ApiResponse<ConversionLinkAssetsAddResponseData>>;
    get(request: ConversionLinkAssetsApiGetRequest): Promise<ConversionLinkAssetsGetResponseData>;
    getWithHttpInfo(request: ConversionLinkAssetsApiGetRequest): Promise<ApiResponse<ConversionLinkAssetsGetResponseData>>;
    update(request: ConversionLinkAssetsApiUpdateRequest): Promise<ConversionLinkAssetsUpdateResponseData>;
    updateWithHttpInfo(request: ConversionLinkAssetsApiUpdateRequest): Promise<ApiResponse<ConversionLinkAssetsUpdateResponseData>>;
}
