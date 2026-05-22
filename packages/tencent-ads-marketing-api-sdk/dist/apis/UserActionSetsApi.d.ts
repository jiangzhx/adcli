import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { UserActionSetsAddRequest, UserActionSetsAddResponseData, UserActionSetsGetResponseData } from "../models";
export interface UserActionSetsApiAddRequest {
    data: UserActionSetsAddRequest;
}
export interface UserActionSetsApiGetRequest {
    accountId: number | string;
    userActionSetId?: number | string;
    type_?: unknown;
    mobileAppId?: number | string;
    wechatAppId?: string;
    name?: string;
    includePermission?: boolean;
    fields?: unknown;
}
export declare class UserActionSetsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: UserActionSetsApiAddRequest): Promise<UserActionSetsAddResponseData>;
    addWithHttpInfo(request: UserActionSetsApiAddRequest): Promise<ApiResponse<UserActionSetsAddResponseData>>;
    get(request: UserActionSetsApiGetRequest): Promise<UserActionSetsGetResponseData>;
    getWithHttpInfo(request: UserActionSetsApiGetRequest): Promise<ApiResponse<UserActionSetsGetResponseData>>;
}
