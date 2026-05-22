import { ApiClient, type ApiResponse } from "./client";
import type { CustomAudienceFilesAddResponseData, CustomAudienceFilesGetResponseData } from "../../model/v3/index";
export interface CustomAudienceFilesApiAddRequest {
    accountId: number | string;
    audienceId: number | string;
    userIdType: string;
    file: Blob;
    operationType?: string;
    openAppId?: string;
}
export interface CustomAudienceFilesApiGetRequest {
    accountId: number | string;
    audienceId?: number | string;
    customAudienceFileId?: number | string;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class CustomAudienceFilesApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: CustomAudienceFilesApiAddRequest): Promise<CustomAudienceFilesAddResponseData>;
    addWithHttpInfo(request: CustomAudienceFilesApiAddRequest): Promise<ApiResponse<CustomAudienceFilesAddResponseData>>;
    get(request: CustomAudienceFilesApiGetRequest): Promise<CustomAudienceFilesGetResponseData>;
    getWithHttpInfo(request: CustomAudienceFilesApiGetRequest): Promise<ApiResponse<CustomAudienceFilesGetResponseData>>;
}
