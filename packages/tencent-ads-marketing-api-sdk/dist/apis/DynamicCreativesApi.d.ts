import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DynamicCreativesAddRequest, DynamicCreativesAddResponseData, DynamicCreativesGetResponseData, DynamicCreativesUpdateRequest, DynamicCreativesUpdateResponseData } from "../models";
export interface DynamicCreativesApiAddRequest {
    data: DynamicCreativesAddRequest;
}
export interface DynamicCreativesApiGetRequest {
    accountId: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export interface DynamicCreativesApiUpdateRequest {
    data: DynamicCreativesUpdateRequest;
}
export declare class DynamicCreativesApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: DynamicCreativesApiAddRequest): Promise<DynamicCreativesAddResponseData>;
    addWithHttpInfo(request: DynamicCreativesApiAddRequest): Promise<ApiResponse<DynamicCreativesAddResponseData>>;
    get(request: DynamicCreativesApiGetRequest): Promise<DynamicCreativesGetResponseData>;
    getWithHttpInfo(request: DynamicCreativesApiGetRequest): Promise<ApiResponse<DynamicCreativesGetResponseData>>;
    update(request: DynamicCreativesApiUpdateRequest): Promise<DynamicCreativesUpdateResponseData>;
    updateWithHttpInfo(request: DynamicCreativesApiUpdateRequest): Promise<ApiResponse<DynamicCreativesUpdateResponseData>>;
}
