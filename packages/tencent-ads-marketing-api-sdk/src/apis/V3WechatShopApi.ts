// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { WechatShopGetResponseData } from "../models";

export interface V3WechatShopApiGetRequest {
  accountId: number | string;
  wechatChannelsShopName?: string;
  wechatChannelsShopId?: string;
  fields?: unknown;
}


export class V3WechatShopApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3WechatShopApiGetRequest): Promise<WechatShopGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3WechatShopApiGetRequest): Promise<ApiResponse<WechatShopGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<WechatShopGetResponseData>({
      method: "GET",
      path: "/wechat_shop/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "wechat_channels_shop_name", value: request.wechatChannelsShopName },
        { name: "wechat_channels_shop_id", value: request.wechatChannelsShopId },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


