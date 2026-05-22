import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DynamicAdVideoAddRequest, DynamicAdVideoAddResponseData, DynamicAdVideoGetResponseData } from "../models";
export interface V3DynamicAdVideoApiAddRequest {
    data: DynamicAdVideoAddRequest;
}
export interface V3DynamicAdVideoApiGetRequest {
    accountId: number | string;
    productCatalogId: number | string;
    productMode: string;
    productOuterId: string;
    dynamicAdTemplateId: number | string;
    fields?: unknown;
}
export declare class V3DynamicAdVideoApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3DynamicAdVideoApiAddRequest): Promise<DynamicAdVideoAddResponseData>;
    addWithHttpInfo(request: V3DynamicAdVideoApiAddRequest): Promise<ApiResponse<DynamicAdVideoAddResponseData>>;
    get(request: V3DynamicAdVideoApiGetRequest): Promise<DynamicAdVideoGetResponseData>;
    getWithHttpInfo(request: V3DynamicAdVideoApiGetRequest): Promise<ApiResponse<DynamicAdVideoGetResponseData>>;
}
