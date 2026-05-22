// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";

export interface V3WechatShopAuthorizationValidationApiGetRequest {
  accountId: number | string;
  wechatChannelsShopId?: string;
  fields?: unknown;
}


export class V3WechatShopAuthorizationValidationApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3WechatShopAuthorizationValidationApiGetRequest): Promise<unknown> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3WechatShopAuthorizationValidationApiGetRequest): Promise<ApiResponse<unknown>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<unknown>({
      method: "GET",
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


