// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_wechat_shop_authorization_validation.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface WechatShopAuthorizationValidationApiGetRequest {
  accountId: number | string;
  wechatChannelsShopId?: string;
  fields?: unknown;
}


export class WechatShopAuthorizationValidationApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: WechatShopAuthorizationValidationApiGetRequest): Promise<unknown> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: WechatShopAuthorizationValidationApiGetRequest): Promise<ApiResponse<unknown>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<unknown>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/wechat_shop_authorization_validation/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "wechat_channels_shop_id", value: request.wechatChannelsShopId },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


