import { ApiClient, type ApiResponse } from "./client";
import type { CustomAudiencesAddRequest, CustomAudiencesAddResponseData, CustomAudiencesDeleteRequest, CustomAudiencesGetResponseData, CustomAudiencesUpdateRequest } from "../model/index";
export interface CustomAudiencesApiAddRequest {
    data: CustomAudiencesAddRequest;
}
export interface CustomAudiencesApiDeleteRequest {
    data: CustomAudiencesDeleteRequest;
}
export interface CustomAudiencesApiGetRequest {
    accountId: number | string;
    audienceId?: number | string;
    page?: number;
    pageSize?: number;
    platform?: string;
    fields?: unknown;
}
export interface CustomAudiencesApiUpdateRequest {
    data: CustomAudiencesUpdateRequest;
}
export declare class CustomAudiencesApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: CustomAudiencesApiAddRequest): Promise<CustomAudiencesAddResponseData>;
    addWithHttpInfo(request: CustomAudiencesApiAddRequest): Promise<ApiResponse<CustomAudiencesAddResponseData>>;
    delete(request: CustomAudiencesApiDeleteRequest): Promise<unknown>;
    deleteWithHttpInfo(request: CustomAudiencesApiDeleteRequest): Promise<ApiResponse<unknown>>;
    get(request: CustomAudiencesApiGetRequest): Promise<CustomAudiencesGetResponseData>;
    getWithHttpInfo(request: CustomAudiencesApiGetRequest): Promise<ApiResponse<CustomAudiencesGetResponseData>>;
    update(request: CustomAudiencesApiUpdateRequest): Promise<unknown>;
    updateWithHttpInfo(request: CustomAudiencesApiUpdateRequest): Promise<ApiResponse<unknown>>;
}
