// Generated from oceanengine/ad_open_sdk_go api/api_keyword_feedads_suggest_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { KeywordFeedadsSuggestV2Response } from "../models/index";


export interface KeywordFeedadsSuggestV2ApiOpenApi2KeywordFeedadsSuggestGetRequest {
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

  async openApi2KeywordFeedadsSuggestGet(request: KeywordFeedadsSuggestV2ApiOpenApi2KeywordFeedadsSuggestGetRequest): Promise<KeywordFeedadsSuggestV2Response> {
    const response = await this.openApi2KeywordFeedadsSuggestGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2KeywordFeedadsSuggestGetWithHttpInfo(request: KeywordFeedadsSuggestV2ApiOpenApi2KeywordFeedadsSuggestGetRequest): Promise<ApiResponse<KeywordFeedadsSuggestV2Response>> {

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


