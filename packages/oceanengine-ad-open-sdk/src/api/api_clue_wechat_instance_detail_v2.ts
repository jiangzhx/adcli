// Generated from oceanengine/ad_open_sdk_go api/api_clue_wechat_instance_detail_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ClueWechatInstanceDetailV2Response } from "../models/index";


export interface ClueWechatInstanceDetailV2ApiOpenApi2ClueWechatInstanceDetailGetRequest {
  advertiserId: number | string;
  instanceId: number | string;
}

export class ClueWechatInstanceDetailV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ClueWechatInstanceDetailGet(request: ClueWechatInstanceDetailV2ApiOpenApi2ClueWechatInstanceDetailGetRequest): Promise<ClueWechatInstanceDetailV2Response> {
    const response = await this.openApi2ClueWechatInstanceDetailGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ClueWechatInstanceDetailGetWithHttpInfo(request: ClueWechatInstanceDetailV2ApiOpenApi2ClueWechatInstanceDetailGetRequest): Promise<ApiResponse<ClueWechatInstanceDetailV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ClueWechatInstanceDetailGet");
    }

    if (request.instanceId == null) {
      throw new ApiException("Missing the required parameter 'instanceId' when calling openApi2ClueWechatInstanceDetailGet");
    }
    return this.apiClient.requestWithHttpInfo<ClueWechatInstanceDetailV2Response>({
      method: "GET",
      path: "/open_api/2/clue/wechat_instance/detail/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "instance_id", value: request.instanceId }
      ]
    });
  }
}


