// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { WechatPagesCsgroupStatusUpdateRequest } from "../models";

export interface V3WechatPagesCsgroupStatusApiUpdateRequest {
  data: WechatPagesCsgroupStatusUpdateRequest;
}


export class V3WechatPagesCsgroupStatusApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async update(request: V3WechatPagesCsgroupStatusApiUpdateRequest): Promise<unknown> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: V3WechatPagesCsgroupStatusApiUpdateRequest): Promise<ApiResponse<unknown>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<unknown>({
      method: "POST",
      path: "/wechat_pages_csgroup_status/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


