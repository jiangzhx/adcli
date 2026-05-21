// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { KeywordFeedadsSuggestV2Response } from "../models";


export class KeywordFeedadsSuggestV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2KeywordFeedadsSuggestGet(adId: number, advertiserId: number, reqKeywordType: number): Promise<KeywordFeedadsSuggestV2Response> {
    const response = await this.openApi2KeywordFeedadsSuggestGetWithHttpInfo(adId, advertiserId, reqKeywordType);
    return response.data;
  }

  async openApi2KeywordFeedadsSuggestGetWithHttpInfo(adId: number, advertiserId: number, reqKeywordType: number): Promise<ApiResponse<KeywordFeedadsSuggestV2Response>> {

    return this.apiClient.requestWithHttpInfo<KeywordFeedadsSuggestV2Response>({
      method: "GET",
      path: "/open_api/2/keyword_feedads/suggest/",
      queryParams: [
        { name: "ad_id", value: adId },
        { name: "advertiser_id", value: advertiserId },
        { name: "req_keyword_type", value: reqKeywordType }
      ]
    });
  }
}


