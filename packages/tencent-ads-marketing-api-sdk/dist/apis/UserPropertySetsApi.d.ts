import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { UserPropertySetsAddRequest, UserPropertySetsAddResponseData, UserPropertySetsGetResponseData, UserPropertySetsUpdateRequest } from "../models";
export interface UserPropertySetsApiAddRequest {
    data: UserPropertySetsAddRequest;
}
export interface UserPropertySetsApiGetRequest {
    accountId: number | string;
    userPropertySetId?: number | string;
    fields?: unknown;
}
export interface UserPropertySetsApiUpdateRequest {
    data: UserPropertySetsUpdateRequest;
}
export declare class UserPropertySetsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: UserPropertySetsApiAddRequest): Promise<UserPropertySetsAddResponseData>;
    addWithHttpInfo(request: UserPropertySetsApiAddRequest): Promise<ApiResponse<UserPropertySetsAddResponseData>>;
    get(request: UserPropertySetsApiGetRequest): Promise<UserPropertySetsGetResponseData>;
    getWithHttpInfo(request: UserPropertySetsApiGetRequest): Promise<ApiResponse<UserPropertySetsGetResponseData>>;
    update(request: UserPropertySetsApiUpdateRequest): Promise<unknown>;
    updateWithHttpInfo(request: UserPropertySetsApiUpdateRequest): Promise<ApiResponse<unknown>>;
}
