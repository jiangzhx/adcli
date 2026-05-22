import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DynamicAdImagesAddRequest, DynamicAdImagesAddResponseData, DynamicAdImagesGetResponseData } from "../models";
export interface DynamicAdImagesApiAddRequest {
    data: DynamicAdImagesAddRequest;
}
export interface DynamicAdImagesApiGetRequest {
    accountId: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class DynamicAdImagesApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: DynamicAdImagesApiAddRequest): Promise<DynamicAdImagesAddResponseData>;
    addWithHttpInfo(request: DynamicAdImagesApiAddRequest): Promise<ApiResponse<DynamicAdImagesAddResponseData>>;
    get(request: DynamicAdImagesApiGetRequest): Promise<DynamicAdImagesGetResponseData>;
    getWithHttpInfo(request: DynamicAdImagesApiGetRequest): Promise<ApiResponse<DynamicAdImagesGetResponseData>>;
}
