import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DynamicAdVideoAddRequest, DynamicAdVideoAddResponseData, DynamicAdVideoGetResponseData } from "../models";
export interface DynamicAdVideoApiAddRequest {
    data: DynamicAdVideoAddRequest;
}
export interface DynamicAdVideoApiGetRequest {
    accountId: number | string;
    productCatalogId: number | string;
    productMode: string;
    productOuterId: string;
    dynamicAdTemplateId: number | string;
    fields?: unknown;
}
export declare class DynamicAdVideoApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: DynamicAdVideoApiAddRequest): Promise<DynamicAdVideoAddResponseData>;
    addWithHttpInfo(request: DynamicAdVideoApiAddRequest): Promise<ApiResponse<DynamicAdVideoAddResponseData>>;
    get(request: DynamicAdVideoApiGetRequest): Promise<DynamicAdVideoGetResponseData>;
    getWithHttpInfo(request: DynamicAdVideoApiGetRequest): Promise<ApiResponse<DynamicAdVideoGetResponseData>>;
}
