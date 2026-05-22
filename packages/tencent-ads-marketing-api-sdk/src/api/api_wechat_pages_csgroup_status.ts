// Generated from tencentad/marketing-api-go-sdk pkg/api/api_wechat_pages_csgroup_status.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { WechatPagesCsgroupStatusUpdateRequest } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface WechatPagesCsgroupStatusApiUpdateRequest {
  data: WechatPagesCsgroupStatusUpdateRequest;
}


export class WechatPagesCsgroupStatusApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async update(request: WechatPagesCsgroupStatusApiUpdateRequest): Promise<unknown> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: WechatPagesCsgroupStatusApiUpdateRequest): Promise<ApiResponse<unknown>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<unknown>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/wechat_pages_csgroup_status/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


