import { ApiClient, type ApiResponse } from "./client";
import type { ImagesAddResponseData, ImagesDeleteRequest, ImagesDeleteResponseData, ImagesGetResponseData, ImagesUpdateRequest, ImagesUpdateResponseData } from "../model/index";
export interface ImagesApiAddRequest {
    accountId: number | string;
    uploadType: string;
    signature: string;
    file?: Blob;
    bytes?: string;
    imageUsage?: string;
    description?: string;
    resizeWidth?: number;
    resizeHeight?: number;
    resizeFileSize?: number;
}
export interface ImagesApiDeleteRequest {
    data: ImagesDeleteRequest;
}
export interface ImagesApiGetRequest {
    accountId: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export interface ImagesApiUpdateRequest {
    data: ImagesUpdateRequest;
}
export declare class ImagesApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: ImagesApiAddRequest): Promise<ImagesAddResponseData>;
    addWithHttpInfo(request: ImagesApiAddRequest): Promise<ApiResponse<ImagesAddResponseData>>;
    delete(request: ImagesApiDeleteRequest): Promise<ImagesDeleteResponseData>;
    deleteWithHttpInfo(request: ImagesApiDeleteRequest): Promise<ApiResponse<ImagesDeleteResponseData>>;
    get(request: ImagesApiGetRequest): Promise<ImagesGetResponseData>;
    getWithHttpInfo(request: ImagesApiGetRequest): Promise<ApiResponse<ImagesGetResponseData>>;
    update(request: ImagesApiUpdateRequest): Promise<ImagesUpdateResponseData>;
    updateWithHttpInfo(request: ImagesApiUpdateRequest): Promise<ApiResponse<ImagesUpdateResponseData>>;
}
