import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ProfilesAddRequest, ProfilesAddResponseData, ProfilesDeleteRequest, ProfilesDeleteResponseData, ProfilesGetResponseData } from "../models";
export interface ProfilesApiAddRequest {
    data: ProfilesAddRequest;
}
export interface ProfilesApiDeleteRequest {
    data: ProfilesDeleteRequest;
}
export interface ProfilesApiGetRequest {
    accountId?: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    organizationId?: number | string;
    fields?: unknown;
}
export declare class ProfilesApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: ProfilesApiAddRequest): Promise<ProfilesAddResponseData>;
    addWithHttpInfo(request: ProfilesApiAddRequest): Promise<ApiResponse<ProfilesAddResponseData>>;
    delete(request: ProfilesApiDeleteRequest): Promise<ProfilesDeleteResponseData>;
    deleteWithHttpInfo(request: ProfilesApiDeleteRequest): Promise<ApiResponse<ProfilesDeleteResponseData>>;
    get(request: ProfilesApiGetRequest): Promise<ProfilesGetResponseData>;
    getWithHttpInfo(request: ProfilesApiGetRequest): Promise<ApiResponse<ProfilesGetResponseData>>;
}
