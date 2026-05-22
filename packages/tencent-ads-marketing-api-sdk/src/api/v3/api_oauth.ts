// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_oauth.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { OauthRefreshTokenResponseData, OauthTokenResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

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


export class OauthApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async authorize(request: OauthApiAuthorizeRequest): Promise<string> {
    const response = await this.authorizeWithHttpInfo(request);
    return response.data;
  }

  async authorizeWithHttpInfo(request: OauthApiAuthorizeRequest): Promise<ApiResponse<string>> {
    if (request.clientId == null) {
      throw new ApiException("Missing the required parameter 'clientId' when calling authorize");
    }

    if (request.redirectUri == null) {
      throw new ApiException("Missing the required parameter 'redirectUri' when calling authorize");
    }
    return this.apiClient.requestWithHttpInfo<string>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/oauth/authorize",
      queryParams: [
        { name: "client_id", value: request.clientId },
        { name: "redirect_uri", value: request.redirectUri },
        { name: "state", value: request.state },
        { name: "scope", value: request.scope },
        { name: "account_type", value: request.accountType },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

  async refreshToken(request: OauthApiRefreshTokenRequest): Promise<OauthRefreshTokenResponseData> {
    const response = await this.refreshTokenWithHttpInfo(request);
    return response.data;
  }

  async refreshTokenWithHttpInfo(request: OauthApiRefreshTokenRequest): Promise<ApiResponse<OauthRefreshTokenResponseData>> {
    if (request.clientId == null) {
      throw new ApiException("Missing the required parameter 'clientId' when calling refreshToken");
    }

    if (request.clientSecret == null) {
      throw new ApiException("Missing the required parameter 'clientSecret' when calling refreshToken");
    }

    if (request.refreshToken == null) {
      throw new ApiException("Missing the required parameter 'refreshToken' when calling refreshToken");
    }
    return this.apiClient.requestWithHttpInfo<OauthRefreshTokenResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/oauth/refresh_token",
      queryParams: [
        { name: "client_id", value: request.clientId },
        { name: "client_secret", value: request.clientSecret },
        { name: "refresh_token", value: request.refreshToken },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

  async token(request: OauthApiTokenRequest): Promise<OauthTokenResponseData> {
    const response = await this.tokenWithHttpInfo(request);
    return response.data;
  }

  async tokenWithHttpInfo(request: OauthApiTokenRequest): Promise<ApiResponse<OauthTokenResponseData>> {
    if (request.clientId == null) {
      throw new ApiException("Missing the required parameter 'clientId' when calling token");
    }

    if (request.clientSecret == null) {
      throw new ApiException("Missing the required parameter 'clientSecret' when calling token");
    }

    if (request.grantType == null) {
      throw new ApiException("Missing the required parameter 'grantType' when calling token");
    }
    return this.apiClient.requestWithHttpInfo<OauthTokenResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/oauth/token",
      queryParams: [
        { name: "client_id", value: request.clientId },
        { name: "client_secret", value: request.clientSecret },
        { name: "grant_type", value: request.grantType },
        { name: "authorization_code", value: request.authorizationCode },
        { name: "refresh_token", value: request.refreshToken },
        { name: "redirect_uri", value: request.redirectUri },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


