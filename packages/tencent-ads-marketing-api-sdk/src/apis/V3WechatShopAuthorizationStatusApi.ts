// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { WechatShopAuthorizationStatusUpdateRequest, WechatShopAuthorizationStatusUpdateResponseData } from "../models";

export interface V3WechatShopAuthorizationStatusApiUpdateRequest {
  data: WechatShopAuthorizationStatusUpdateRequest;
}


export class V3WechatShopAuthorizationStatusApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async update(request: V3WechatShopAuthorizationStatusApiUpdateRequest): Promise<WechatShopAuthorizationStatusUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: V3WechatShopAuthorizationStatusApiUpdateRequest): Promise<ApiResponse<WechatShopAuthorizationStatusUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<WechatShopAuthorizationStatusUpdateResponseData>({
      method: "POST",
      path: "/wechat_shop_authorization_status/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


