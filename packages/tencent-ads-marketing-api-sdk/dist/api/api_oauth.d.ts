import { ApiClient, type ApiResponse } from "./client";
import type { OauthTokenResponseData } from "../model/index";
export interface OauthApiAuthorizeRequest {
    clientId: number | string;
    redirectUri: string;
    state?: string;
    scope?: string;
    accountType?: string;
    accountDisplayNumber?: number;
    fields?: unknown;
}
export interface OauthApiTokenRequest {
    clientId: number | string;
    clientSecret: string;
    grantType: string;
    authorizationCode?: string;
    refreshToken?: string;
    redirectUri?: string;
}
export declare class OauthApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    authorize(request: OauthApiAuthorizeRequest): Promise<string>;
    authorizeWithHttpInfo(request: OauthApiAuthorizeRequest): Promise<ApiResponse<string>>;
    token(request: OauthApiTokenRequest): Promise<OauthTokenResponseData>;
    tokenWithHttpInfo(request: OauthApiTokenRequest): Promise<ApiResponse<OauthTokenResponseData>>;
}
