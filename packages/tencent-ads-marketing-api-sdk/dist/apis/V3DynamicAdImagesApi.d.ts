import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DynamicAdImagesAddRequest, DynamicAdImagesAddResponseData, DynamicAdImagesGetResponseData } from "../models";
export interface V3DynamicAdImagesApiAddRequest {
    data: DynamicAdImagesAddRequest;
}
export interface V3DynamicAdImagesApiGetRequest {
    accountId: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class V3DynamicAdImagesApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3DynamicAdImagesApiAddRequest): Promise<DynamicAdImagesAddResponseData>;
    addWithHttpInfo(request: V3DynamicAdImagesApiAddRequest): Promise<ApiResponse<DynamicAdImagesAddResponseData>>;
    get(request: V3DynamicAdImagesApiGetRequest): Promise<DynamicAdImagesGetResponseData>;
    getWithHttpInfo(request: V3DynamicAdImagesApiGetRequest): Promise<ApiResponse<DynamicAdImagesGetResponseData>>;
}
