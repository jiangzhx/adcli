import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { OauthRefreshTokenResponseData, OauthTokenResponseData } from "../models";
export interface V3OauthApiAuthorizeRequest {
    clientId: number | string;
    redirectUri: string;
    state?: string;
    scope?: string;
    accountType?: string;
    fields?: unknown;
}
export interface V3OauthApiRefreshTokenRequest {
    clientId: number | string;
    clientSecret: string;
    refreshToken: string;
    fields?: unknown;
}
export interface V3OauthApiTokenRequest {
    clientId: number | string;
    clientSecret: string;
    grantType: string;
    authorizationCode?: string;
    refreshToken?: string;
    redirectUri?: string;
    fields?: unknown;
}
export declare class V3OauthApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    authorize(request: V3OauthApiAuthorizeRequest): Promise<string>;
    authorizeWithHttpInfo(request: V3OauthApiAuthorizeRequest): Promise<ApiResponse<string>>;
    refreshToken(request: V3OauthApiRefreshTokenRequest): Promise<OauthRefreshTokenResponseData>;
    refreshTokenWithHttpInfo(request: V3OauthApiRefreshTokenRequest): Promise<ApiResponse<OauthRefreshTokenResponseData>>;
    token(request: V3OauthApiTokenRequest): Promise<OauthTokenResponseData>;
    tokenWithHttpInfo(request: V3OauthApiTokenRequest): Promise<ApiResponse<OauthTokenResponseData>>;
}
