// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ClueWechatDataGetV2Response } from "../models";


export class ClueWechatDataGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ClueWechatDataGetGet(advertiserId: number, unionId: string, state: string): Promise<ClueWechatDataGetV2Response> {
    const response = await this.openApi2ClueWechatDataGetGetWithHttpInfo(advertiserId, unionId, state);
    return response.data;
  }

  async openApi2ClueWechatDataGetGetWithHttpInfo(advertiserId: number, unionId: string, state: string): Promise<ApiResponse<ClueWechatDataGetV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ClueWechatDataGetGet");
    }

    if (unionId == null) {
      throw new ApiException("Missing the required parameter 'unionId' when calling openApi2ClueWechatDataGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ClueWechatDataGetV2Response>({
      method: "GET",
      path: "/open_api/2/clue/wechat_data/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "union_id", value: unionId },
        { name: "state", value: state }
      ]
    });
  }
}


