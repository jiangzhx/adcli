// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_wechat_shop_authorization_status.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { WechatShopAuthorizationStatusUpdateRequest, WechatShopAuthorizationStatusUpdateResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface WechatShopAuthorizationStatusApiUpdateRequest {
  data: WechatShopAuthorizationStatusUpdateRequest;
}


export class WechatShopAuthorizationStatusApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async update(request: WechatShopAuthorizationStatusApiUpdateRequest): Promise<WechatShopAuthorizationStatusUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: WechatShopAuthorizationStatusApiUpdateRequest): Promise<ApiResponse<WechatShopAuthorizationStatusUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<WechatShopAuthorizationStatusUpdateResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/wechat_shop_authorization_status/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


