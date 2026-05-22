// Generated from tencentad/marketing-api-go-sdk pkg/api/api_authorization.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface AuthorizationApiWechatBindRequest {
  accessToken: string;
  redirectUri: string;
  accountId?: number | string;
  wechatAccountId?: string;
  fields?: unknown;
}


export class AuthorizationApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async wechatBind(request: AuthorizationApiWechatBindRequest): Promise<string> {
    const response = await this.wechatBindWithHttpInfo(request);
    return response.data;
  }

  async wechatBindWithHttpInfo(request: AuthorizationApiWechatBindRequest): Promise<ApiResponse<string>> {
    if (request.accessToken == null) {
      throw new ApiException("Missing the required parameter 'accessToken' when calling wechatBind");
    }

    if (request.redirectUri == null) {
      throw new ApiException("Missing the required parameter 'redirectUri' when calling wechatBind");
    }
    return this.apiClient.requestWithHttpInfo<string>({
      method: "GET",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/authorization/wechat_bind",
      queryParams: [
        { name: "access_token", value: request.accessToken },
        { name: "redirect_uri", value: request.redirectUri },
        { name: "account_id", value: request.accountId },
        { name: "wechat_account_id", value: request.wechatAccountId },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


