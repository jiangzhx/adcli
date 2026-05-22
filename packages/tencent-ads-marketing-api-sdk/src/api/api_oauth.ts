// Generated from tencentad/marketing-api-go-sdk pkg/api/api_oauth.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { OauthTokenResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

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
      basePath: TencentAdsV13Configuration.basePath,
      path: "/oauth/authorize",
      queryParams: [
        { name: "client_id", value: request.clientId },
        { name: "redirect_uri", value: request.redirectUri },
        { name: "state", value: request.state },
        { name: "scope", value: request.scope },
        { name: "account_type", value: request.accountType },
        { name: "account_display_number", value: request.accountDisplayNumber },
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
      basePath: TencentAdsV13Configuration.basePath,
      path: "/oauth/token",
      queryParams: [
        { name: "client_id", value: request.clientId },
        { name: "client_secret", value: request.clientSecret },
        { name: "grant_type", value: request.grantType },
        { name: "authorization_code", value: request.authorizationCode },
        { name: "refresh_token", value: request.refreshToken },
        { name: "redirect_uri", value: request.redirectUri }
      ],
      contentType: "text/plain"
    });
  }

}


