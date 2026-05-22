// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ClueWechatInstanceUpdateV2Request, ClueWechatInstanceUpdateV2Response } from "../models";


export interface OpenApi2ClueWechatInstanceUpdatePostRequest {
  clueWechatInstanceUpdateV2Request?: ClueWechatInstanceUpdateV2Request;
}

export class ClueWechatInstanceUpdateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ClueWechatInstanceUpdatePost(request: OpenApi2ClueWechatInstanceUpdatePostRequest): Promise<ClueWechatInstanceUpdateV2Response> {
    const response = await this.openApi2ClueWechatInstanceUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ClueWechatInstanceUpdatePostWithHttpInfo(request: OpenApi2ClueWechatInstanceUpdatePostRequest): Promise<ApiResponse<ClueWechatInstanceUpdateV2Response>> {

    return this.apiClient.requestWithHttpInfo<ClueWechatInstanceUpdateV2Response>({
      method: "POST",
      path: "/open_api/2/clue/wechat_instance/update/",
      queryParams: [

      ],
      body: request.clueWechatInstanceUpdateV2Request
    });
  }
}


