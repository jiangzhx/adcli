import { ApiClient, type ApiResponse } from "./client";
import type { CustomTagFilesAddResponseData, CustomTagFilesGetResponseData } from "../model/index";
export interface CustomTagFilesApiAddRequest {
    accountId: number | string;
    userIdType: string;
    tagId: number | string;
    file: Blob;
    operationType?: string;
    openAppId?: string;
}
export interface CustomTagFilesApiGetRequest {
    accountId: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class CustomTagFilesApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: CustomTagFilesApiAddRequest): Promise<CustomTagFilesAddResponseData>;
    addWithHttpInfo(request: CustomTagFilesApiAddRequest): Promise<ApiResponse<CustomTagFilesAddResponseData>>;
    get(request: CustomTagFilesApiGetRequest): Promise<CustomTagFilesGetResponseData>;
    getWithHttpInfo(request: CustomTagFilesApiGetRequest): Promise<ApiResponse<CustomTagFilesGetResponseData>>;
}
