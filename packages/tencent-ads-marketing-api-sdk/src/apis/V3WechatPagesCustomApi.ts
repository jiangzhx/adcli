// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { WechatPagesCustomAddRequest, WechatPagesCustomAddResponseData } from "../models";

export interface V3WechatPagesCustomApiAddRequest {
  data: WechatPagesCustomAddRequest;
}


export class V3WechatPagesCustomApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: V3WechatPagesCustomApiAddRequest): Promise<WechatPagesCustomAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: V3WechatPagesCustomApiAddRequest): Promise<ApiResponse<WechatPagesCustomAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<WechatPagesCustomAddResponseData>({
      method: "POST",
      path: "/wechat_pages_custom/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


