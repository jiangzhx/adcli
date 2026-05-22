// Generated from oceanengine/ad_open_sdk_go api/api_clue_wechat_instance_update_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ClueWechatInstanceUpdateV2Request, ClueWechatInstanceUpdateV2Response } from "../models/index";


export interface ClueWechatInstanceUpdateV2ApiOpenApi2ClueWechatInstanceUpdatePostRequest {
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

  async openApi2ClueWechatInstanceUpdatePost(request: ClueWechatInstanceUpdateV2ApiOpenApi2ClueWechatInstanceUpdatePostRequest): Promise<ClueWechatInstanceUpdateV2Response> {
    const response = await this.openApi2ClueWechatInstanceUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ClueWechatInstanceUpdatePostWithHttpInfo(request: ClueWechatInstanceUpdateV2ApiOpenApi2ClueWechatInstanceUpdatePostRequest): Promise<ApiResponse<ClueWechatInstanceUpdateV2Response>> {

    return this.apiClient.requestWithHttpInfo<ClueWechatInstanceUpdateV2Response>({
      method: "POST",
      path: "/open_api/2/clue/wechat_instance/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.clueWechatInstanceUpdateV2Request
    });
  }
}


