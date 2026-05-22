// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_wechat_shop.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { WechatShopGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface WechatShopApiGetRequest {
  accountId: number | string;
  wechatChannelsShopName?: string;
  wechatChannelsShopId?: string;
  fields?: unknown;
}


export class WechatShopApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: WechatShopApiGetRequest): Promise<WechatShopGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: WechatShopApiGetRequest): Promise<ApiResponse<WechatShopGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<WechatShopGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
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


