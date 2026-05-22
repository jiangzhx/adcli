import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ProfilesAddRequest, ProfilesAddResponseData, ProfilesDeleteRequest, ProfilesDeleteResponseData, ProfilesGetResponseData } from "../models";
export interface V3ProfilesApiAddRequest {
    data: ProfilesAddRequest;
}
export interface V3ProfilesApiDeleteRequest {
    data: ProfilesDeleteRequest;
}
export interface V3ProfilesApiGetRequest {
    accountId?: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    organizationId?: number | string;
    fields?: unknown;
}
export declare class V3ProfilesApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3ProfilesApiAddRequest): Promise<ProfilesAddResponseData>;
    addWithHttpInfo(request: V3ProfilesApiAddRequest): Promise<ApiResponse<ProfilesAddResponseData>>;
    delete(request: V3ProfilesApiDeleteRequest): Promise<ProfilesDeleteResponseData>;
    deleteWithHttpInfo(request: V3ProfilesApiDeleteRequest): Promise<ApiResponse<ProfilesDeleteResponseData>>;
    get(request: V3ProfilesApiGetRequest): Promise<ProfilesGetResponseData>;
    getWithHttpInfo(request: V3ProfilesApiGetRequest): Promise<ApiResponse<ProfilesGetResponseData>>;
}
