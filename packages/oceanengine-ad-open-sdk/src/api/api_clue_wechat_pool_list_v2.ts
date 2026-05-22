// Generated from oceanengine/ad_open_sdk_go api/api_clue_wechat_pool_list_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ClueWechatPoolListV2Filter, ClueWechatPoolListV2Response } from "../models/index";


export interface ClueWechatPoolListV2ApiOpenApi2ClueWechatPoolListGetRequest {
  advertiserId: number | string;
  filter?: ClueWechatPoolListV2Filter;
}

export class ClueWechatPoolListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ClueWechatPoolListGet(request: ClueWechatPoolListV2ApiOpenApi2ClueWechatPoolListGetRequest): Promise<ClueWechatPoolListV2Response> {
    const response = await this.openApi2ClueWechatPoolListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ClueWechatPoolListGetWithHttpInfo(request: ClueWechatPoolListV2ApiOpenApi2ClueWechatPoolListGetRequest): Promise<ApiResponse<ClueWechatPoolListV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<ClueWechatPoolListV2Response>({
      method: "GET",
      path: "/open_api/2/clue/wechat_pool/list/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "filter", value: request.filter }
      ]
    });
  }
}


