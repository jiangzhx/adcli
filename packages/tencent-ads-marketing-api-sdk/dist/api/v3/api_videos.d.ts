import { ApiClient, type ApiResponse } from "./client";
import type { VideosAddResponseData, VideosDeleteRequest, VideosDeleteResponseData, VideosGetResponseData, VideosUpdateRequest, VideosUpdateResponseData } from "../../model/v3/index";
export interface VideosApiAddRequest {
    videoFile: Blob;
    signature: string;
    accountId?: number | string;
    organizationId?: number | string;
    description?: string;
    adcreativeTemplateId?: number | string;
}
export interface VideosApiDeleteRequest {
    data: VideosDeleteRequest;
}
export interface VideosApiGetRequest {
    accountId?: number | string;
    organizationId?: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    labelId?: number | string;
    businessScenario?: number;
    fields?: unknown;
}
export interface VideosApiUpdateRequest {
    data: VideosUpdateRequest;
}
export declare class VideosApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: VideosApiAddRequest): Promise<VideosAddResponseData>;
    addWithHttpInfo(request: VideosApiAddRequest): Promise<ApiResponse<VideosAddResponseData>>;
    delete(request: VideosApiDeleteRequest): Promise<VideosDeleteResponseData>;
    deleteWithHttpInfo(request: VideosApiDeleteRequest): Promise<ApiResponse<VideosDeleteResponseData>>;
    get(request: VideosApiGetRequest): Promise<VideosGetResponseData>;
    getWithHttpInfo(request: VideosApiGetRequest): Promise<ApiResponse<VideosGetResponseData>>;
    update(request: VideosApiUpdateRequest): Promise<VideosUpdateResponseData>;
    updateWithHttpInfo(request: VideosApiUpdateRequest): Promise<ApiResponse<VideosUpdateResponseData>>;
}
