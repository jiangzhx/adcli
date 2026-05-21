// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ClueWechatInstanceDetailV2Response } from "../models";


export class ClueWechatInstanceDetailV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ClueWechatInstanceDetailGet(advertiserId: number, instanceId: number): Promise<ClueWechatInstanceDetailV2Response> {
    const response = await this.openApi2ClueWechatInstanceDetailGetWithHttpInfo(advertiserId, instanceId);
    return response.data;
  }

  async openApi2ClueWechatInstanceDetailGetWithHttpInfo(advertiserId: number, instanceId: number): Promise<ApiResponse<ClueWechatInstanceDetailV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ClueWechatInstanceDetailGet");
    }

    if (instanceId == null) {
      throw new ApiException("Missing the required parameter 'instanceId' when calling openApi2ClueWechatInstanceDetailGet");
    }
    return this.apiClient.requestWithHttpInfo<ClueWechatInstanceDetailV2Response>({
      method: "GET",
      path: "/open_api/2/clue/wechat_instance/detail/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "instance_id", value: instanceId }
      ]
    });
  }
}


