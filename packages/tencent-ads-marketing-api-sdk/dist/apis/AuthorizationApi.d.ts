import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
export interface AuthorizationApiWechatBindRequest {
    accessToken: string;
    redirectUri: string;
    accountId?: number | string;
    wechatAccountId?: string;
    fields?: unknown;
}
export declare class AuthorizationApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    wechatBind(request: AuthorizationApiWechatBindRequest): Promise<string>;
    wechatBindWithHttpInfo(request: AuthorizationApiWechatBindRequest): Promise<ApiResponse<string>>;
}
