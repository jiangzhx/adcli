// Generated from oceanengine/ad_open_sdk_go api/api_clue_wechat_instance_list_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ClueWechatInstanceListV2Filter, ClueWechatInstanceListV2Response } from "../models/index";


export interface ClueWechatInstanceListV2ApiOpenApi2ClueWechatInstanceListGetRequest {
  advertiserId: number | string;
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

  async openApi2ClueWechatInstanceListGet(request: ClueWechatInstanceListV2ApiOpenApi2ClueWechatInstanceListGetRequest): Promise<ClueWechatInstanceListV2Response> {
    const response = await this.openApi2ClueWechatInstanceListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ClueWechatInstanceListGetWithHttpInfo(request: ClueWechatInstanceListV2ApiOpenApi2ClueWechatInstanceListGetRequest): Promise<ApiResponse<ClueWechatInstanceListV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
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


