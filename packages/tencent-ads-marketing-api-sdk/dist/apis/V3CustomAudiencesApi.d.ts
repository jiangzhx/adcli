import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CustomAudiencesAddRequest, CustomAudiencesAddResponseData, CustomAudiencesDeleteRequest, CustomAudiencesGetResponseData, CustomAudiencesUpdateRequest } from "../models";
export interface V3CustomAudiencesApiAddRequest {
    data: CustomAudiencesAddRequest;
}
export interface V3CustomAudiencesApiDeleteRequest {
    data: CustomAudiencesDeleteRequest;
}
export interface V3CustomAudiencesApiGetRequest {
    accountId: number | string;
    audienceId?: number | string;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export interface V3CustomAudiencesApiUpdateRequest {
    data: CustomAudiencesUpdateRequest;
}
export declare class V3CustomAudiencesApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3CustomAudiencesApiAddRequest): Promise<CustomAudiencesAddResponseData>;
    addWithHttpInfo(request: V3CustomAudiencesApiAddRequest): Promise<ApiResponse<CustomAudiencesAddResponseData>>;
    delete(request: V3CustomAudiencesApiDeleteRequest): Promise<unknown>;
    deleteWithHttpInfo(request: V3CustomAudiencesApiDeleteRequest): Promise<ApiResponse<unknown>>;
    get(request: V3CustomAudiencesApiGetRequest): Promise<CustomAudiencesGetResponseData>;
    getWithHttpInfo(request: V3CustomAudiencesApiGetRequest): Promise<ApiResponse<CustomAudiencesGetResponseData>>;
    update(request: V3CustomAudiencesApiUpdateRequest): Promise<unknown>;
    updateWithHttpInfo(request: V3CustomAudiencesApiUpdateRequest): Promise<ApiResponse<unknown>>;
}
