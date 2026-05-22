import { ApiClient, type ApiResponse } from "./client";
import type { OauthRefreshTokenResponseData, OauthTokenResponseData } from "../../model/v3/index";
export interface OauthApiAuthorizeRequest {
    clientId: number | string;
    redirectUri: string;
    state?: string;
    scope?: string;
    accountType?: string;
    fields?: unknown;
}
export interface OauthApiRefreshTokenRequest {
    clientId: number | string;
    clientSecret: string;
    refreshToken: string;
    fields?: unknown;
}
export interface OauthApiTokenRequest {
    clientId: number | string;
    clientSecret: string;
    grantType: string;
    authorizationCode?: string;
    refreshToken?: string;
    redirectUri?: string;
    fields?: unknown;
}
export declare class OauthApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    authorize(request: OauthApiAuthorizeRequest): Promise<string>;
    authorizeWithHttpInfo(request: OauthApiAuthorizeRequest): Promise<ApiResponse<string>>;
    refreshToken(request: OauthApiRefreshTokenRequest): Promise<OauthRefreshTokenResponseData>;
    refreshTokenWithHttpInfo(request: OauthApiRefreshTokenRequest): Promise<ApiResponse<OauthRefreshTokenResponseData>>;
    token(request: OauthApiTokenRequest): Promise<OauthTokenResponseData>;
    tokenWithHttpInfo(request: OauthApiTokenRequest): Promise<ApiResponse<OauthTokenResponseData>>;
}
