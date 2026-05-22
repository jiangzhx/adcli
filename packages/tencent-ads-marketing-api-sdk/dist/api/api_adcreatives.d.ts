import { ApiClient, type ApiResponse } from "./client";
import type { AdcreativesAddRequest, AdcreativesAddResponseData, AdcreativesDeleteRequest, AdcreativesDeleteResponseData, AdcreativesGetResponseData, AdcreativesUpdateRequest, AdcreativesUpdateResponseData } from "../model/index";
export interface AdcreativesApiAddRequest {
    data: AdcreativesAddRequest;
}
export interface AdcreativesApiDeleteRequest {
    data: AdcreativesDeleteRequest;
}
export interface AdcreativesApiGetRequest {
    accountId: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    isDeleted?: boolean;
    linkPageTypeCompatible?: boolean;
    weixinOfficialAccountsUpgradeEnabled?: boolean;
    fields?: unknown;
}
export interface AdcreativesApiUpdateRequest {
    data: AdcreativesUpdateRequest;
}
export declare class AdcreativesApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: AdcreativesApiAddRequest): Promise<AdcreativesAddResponseData>;
    addWithHttpInfo(request: AdcreativesApiAddRequest): Promise<ApiResponse<AdcreativesAddResponseData>>;
    delete(request: AdcreativesApiDeleteRequest): Promise<AdcreativesDeleteResponseData>;
    deleteWithHttpInfo(request: AdcreativesApiDeleteRequest): Promise<ApiResponse<AdcreativesDeleteResponseData>>;
    get(request: AdcreativesApiGetRequest): Promise<AdcreativesGetResponseData>;
    getWithHttpInfo(request: AdcreativesApiGetRequest): Promise<ApiResponse<AdcreativesGetResponseData>>;
    update(request: AdcreativesApiUpdateRequest): Promise<AdcreativesUpdateResponseData>;
    updateWithHttpInfo(request: AdcreativesApiUpdateRequest): Promise<ApiResponse<AdcreativesUpdateResponseData>>;
}
