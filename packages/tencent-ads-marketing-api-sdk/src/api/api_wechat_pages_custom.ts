// Generated from tencentad/marketing-api-go-sdk pkg/api/api_wechat_pages_custom.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { WechatPagesCustomAddRequest, WechatPagesCustomAddResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface WechatPagesCustomApiAddRequest {
  data: WechatPagesCustomAddRequest;
}


export class WechatPagesCustomApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: WechatPagesCustomApiAddRequest): Promise<WechatPagesCustomAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: WechatPagesCustomApiAddRequest): Promise<ApiResponse<WechatPagesCustomAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<WechatPagesCustomAddResponseData>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/wechat_pages_custom/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


