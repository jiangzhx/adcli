import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { VideosAddResponseData, VideosDeleteRequest, VideosDeleteResponseData, VideosGetResponseData, VideosUpdateRequest, VideosUpdateResponseData } from "../models";
export interface V3VideosApiAddRequest {
    videoFile: Blob;
    signature: string;
    accountId?: number | string;
    organizationId?: number | string;
    description?: string;
    adcreativeTemplateId?: number | string;
}
export interface V3VideosApiDeleteRequest {
    data: VideosDeleteRequest;
}
export interface V3VideosApiGetRequest {
    accountId?: number | string;
    organizationId?: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    labelId?: number | string;
    businessScenario?: number;
    fields?: unknown;
}
export interface V3VideosApiUpdateRequest {
    data: VideosUpdateRequest;
}
export declare class V3VideosApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3VideosApiAddRequest): Promise<VideosAddResponseData>;
    addWithHttpInfo(request: V3VideosApiAddRequest): Promise<ApiResponse<VideosAddResponseData>>;
    delete(request: V3VideosApiDeleteRequest): Promise<VideosDeleteResponseData>;
    deleteWithHttpInfo(request: V3VideosApiDeleteRequest): Promise<ApiResponse<VideosDeleteResponseData>>;
    get(request: V3VideosApiGetRequest): Promise<VideosGetResponseData>;
    getWithHttpInfo(request: V3VideosApiGetRequest): Promise<ApiResponse<VideosGetResponseData>>;
    update(request: V3VideosApiUpdateRequest): Promise<VideosUpdateResponseData>;
    updateWithHttpInfo(request: V3VideosApiUpdateRequest): Promise<ApiResponse<VideosUpdateResponseData>>;
}
