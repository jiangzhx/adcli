// Generated from oceanengine/ad_open_sdk_go api/api_clue_wechat_data_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ClueWechatDataGetV2Response } from "../models/index";


export interface ClueWechatDataGetV2ApiOpenApi2ClueWechatDataGetGetRequest {
  advertiserId: number | string;
  unionId: string;
  state?: string;
}

export class ClueWechatDataGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ClueWechatDataGetGet(request: ClueWechatDataGetV2ApiOpenApi2ClueWechatDataGetGetRequest): Promise<ClueWechatDataGetV2Response> {
    const response = await this.openApi2ClueWechatDataGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ClueWechatDataGetGetWithHttpInfo(request: ClueWechatDataGetV2ApiOpenApi2ClueWechatDataGetGetRequest): Promise<ApiResponse<ClueWechatDataGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ClueWechatDataGetGet");
    }

    if (request.unionId == null) {
      throw new ApiException("Missing the required parameter 'unionId' when calling openApi2ClueWechatDataGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ClueWechatDataGetV2Response>({
      method: "GET",
      path: "/open_api/2/clue/wechat_data/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "union_id", value: request.unionId },
        { name: "state", value: request.state }
      ]
    });
  }
}


