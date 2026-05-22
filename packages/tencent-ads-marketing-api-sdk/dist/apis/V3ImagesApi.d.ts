import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ImagesAddResponseData, ImagesDeleteRequest, ImagesDeleteResponseData, ImagesGetResponseData, ImagesUpdateRequest, ImagesUpdateResponseData } from "../models";
export interface V3ImagesApiAddRequest {
    uploadType: string;
    signature: string;
    accountId?: number | string;
    organizationId?: number | string;
    file?: Blob;
    bytes?: string;
    imageUsage?: string;
    description?: string;
    resizeWidth?: number;
    resizeHeight?: number;
    resizeFileSize?: number;
}
export interface V3ImagesApiDeleteRequest {
    data: ImagesDeleteRequest;
}
export interface V3ImagesApiGetRequest {
    accountId?: number | string;
    organizationId?: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    labelId?: number | string;
    businessScenario?: number;
    fields?: unknown;
}
export interface V3ImagesApiUpdateRequest {
    data: ImagesUpdateRequest;
}
export declare class V3ImagesApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3ImagesApiAddRequest): Promise<ImagesAddResponseData>;
    addWithHttpInfo(request: V3ImagesApiAddRequest): Promise<ApiResponse<ImagesAddResponseData>>;
    delete(request: V3ImagesApiDeleteRequest): Promise<ImagesDeleteResponseData>;
    deleteWithHttpInfo(request: V3ImagesApiDeleteRequest): Promise<ApiResponse<ImagesDeleteResponseData>>;
    get(request: V3ImagesApiGetRequest): Promise<ImagesGetResponseData>;
    getWithHttpInfo(request: V3ImagesApiGetRequest): Promise<ApiResponse<ImagesGetResponseData>>;
    update(request: V3ImagesApiUpdateRequest): Promise<ImagesUpdateResponseData>;
    updateWithHttpInfo(request: V3ImagesApiUpdateRequest): Promise<ApiResponse<ImagesUpdateResponseData>>;
}
