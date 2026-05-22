import { ApiClient, type ApiResponse } from "./client";
import type { AdsAddRequest, AdsAddResponseData, AdsDeleteRequest, AdsDeleteResponseData, AdsGetResponseData, AdsUpdateConfiguredStatusRequest, AdsUpdateConfiguredStatusResponseData, AdsUpdateRequest, AdsUpdateResponseData } from "../model/index";
export interface AdsApiAddRequest {
    data: AdsAddRequest;
}
export interface AdsApiDeleteRequest {
    data: AdsDeleteRequest;
}
export interface AdsApiGetRequest {
    accountId: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    isDeleted?: boolean;
    weixinOfficialAccountsUpgradeEnabled?: boolean;
    fields?: unknown;
}
export interface AdsApiUpdateRequest {
    data: AdsUpdateRequest;
}
export interface AdsApiUpdateConfiguredStatusRequest {
    data: AdsUpdateConfiguredStatusRequest;
}
export declare class AdsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: AdsApiAddRequest): Promise<AdsAddResponseData>;
    addWithHttpInfo(request: AdsApiAddRequest): Promise<ApiResponse<AdsAddResponseData>>;
    delete(request: AdsApiDeleteRequest): Promise<AdsDeleteResponseData>;
    deleteWithHttpInfo(request: AdsApiDeleteRequest): Promise<ApiResponse<AdsDeleteResponseData>>;
    get(request: AdsApiGetRequest): Promise<AdsGetResponseData>;
    getWithHttpInfo(request: AdsApiGetRequest): Promise<ApiResponse<AdsGetResponseData>>;
    update(request: AdsApiUpdateRequest): Promise<AdsUpdateResponseData>;
    updateWithHttpInfo(request: AdsApiUpdateRequest): Promise<ApiResponse<AdsUpdateResponseData>>;
    updateConfiguredStatus(request: AdsApiUpdateConfiguredStatusRequest): Promise<AdsUpdateConfiguredStatusResponseData>;
    updateConfiguredStatusWithHttpInfo(request: AdsApiUpdateConfiguredStatusRequest): Promise<ApiResponse<AdsUpdateConfiguredStatusResponseData>>;
}
