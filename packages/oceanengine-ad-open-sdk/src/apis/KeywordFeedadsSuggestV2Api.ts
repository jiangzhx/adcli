// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { KeywordFeedadsSuggestV2Response } from "../models";


export interface OpenApi2KeywordFeedadsSuggestGetRequest {
  adId?: number | string;
  advertiserId?: number | string;
  reqKeywordType?: number;
}

export class KeywordFeedadsSuggestV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2KeywordFeedadsSuggestGet(request: OpenApi2KeywordFeedadsSuggestGetRequest): Promise<KeywordFeedadsSuggestV2Response> {
    const response = await this.openApi2KeywordFeedadsSuggestGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2KeywordFeedadsSuggestGetWithHttpInfo(request: OpenApi2KeywordFeedadsSuggestGetRequest): Promise<ApiResponse<KeywordFeedadsSuggestV2Response>> {

    return this.apiClient.requestWithHttpInfo<KeywordFeedadsSuggestV2Response>({
      method: "GET",
      path: "/open_api/2/keyword_feedads/suggest/",
      queryParams: [
        { name: "ad_id", value: request.adId },
        { name: "advertiser_id", value: request.advertiserId },
        { name: "req_keyword_type", value: request.reqKeywordType }
      ]
    });
  }
}


