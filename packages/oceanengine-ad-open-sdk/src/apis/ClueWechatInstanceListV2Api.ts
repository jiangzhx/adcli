// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ClueWechatInstanceListV2Filter, ClueWechatInstanceListV2Response } from "../models";


export interface OpenApi2ClueWechatInstanceListGetRequest {
  advertiserId: number;
  filter?: ClueWechatInstanceListV2Filter;
}

export class ClueWechatInstanceListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ClueWechatInstanceListGet(request: OpenApi2ClueWechatInstanceListGetRequest): Promise<ClueWechatInstanceListV2Response> {
    const response = await this.openApi2ClueWechatInstanceListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ClueWechatInstanceListGetWithHttpInfo(request: OpenApi2ClueWechatInstanceListGetRequest): Promise<ApiResponse<ClueWechatInstanceListV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ClueWechatInstanceListGet");
    }
    return this.apiClient.requestWithHttpInfo<ClueWechatInstanceListV2Response>({
      method: "GET",
      path: "/open_api/2/clue/wechat_instance/list/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "filter", value: request.filter }
      ]
    });
  }
}


