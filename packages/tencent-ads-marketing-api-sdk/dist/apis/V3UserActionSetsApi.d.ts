import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { UserActionSetsAddRequest, UserActionSetsAddResponseData, UserActionSetsGetResponseData } from "../models";
export interface V3UserActionSetsApiAddRequest {
    data: UserActionSetsAddRequest;
}
export interface V3UserActionSetsApiGetRequest {
    accountId: number | string;
    userActionSetId?: number | string;
    type_?: unknown;
    mobileAppId?: number | string;
    wechatAppId?: string;
    appIdStr?: string;
    name?: string;
    includePermission?: boolean;
    fields?: unknown;
}
export declare class V3UserActionSetsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3UserActionSetsApiAddRequest): Promise<UserActionSetsAddResponseData>;
    addWithHttpInfo(request: V3UserActionSetsApiAddRequest): Promise<ApiResponse<UserActionSetsAddResponseData>>;
    get(request: V3UserActionSetsApiGetRequest): Promise<UserActionSetsGetResponseData>;
    getWithHttpInfo(request: V3UserActionSetsApiGetRequest): Promise<ApiResponse<UserActionSetsGetResponseData>>;
}
