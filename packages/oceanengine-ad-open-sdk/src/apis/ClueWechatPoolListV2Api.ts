// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ClueWechatPoolListV2Filter, ClueWechatPoolListV2Response } from "../models";


export class ClueWechatPoolListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ClueWechatPoolListGet(advertiserId: number, filter: ClueWechatPoolListV2Filter): Promise<ClueWechatPoolListV2Response> {
    const response = await this.openApi2ClueWechatPoolListGetWithHttpInfo(advertiserId, filter);
    return response.data;
  }

  async openApi2ClueWechatPoolListGetWithHttpInfo(advertiserId: number, filter: ClueWechatPoolListV2Filter): Promise<ApiResponse<ClueWechatPoolListV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ClueWechatPoolListGet");
    }
    return this.apiClient.requestWithHttpInfo<ClueWechatPoolListV2Response>({
      method: "GET",
      path: "/open_api/2/clue/wechat_pool/list/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "filter", value: filter }
      ]
    });
  }
}


