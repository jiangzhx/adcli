// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { KeywordGetV2Filtering, KeywordGetV2Response } from "../models";


export class KeywordGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2KeywordGetGet(advertiserId: number, filtering: KeywordGetV2Filtering): Promise<KeywordGetV2Response> {
    const response = await this.openApi2KeywordGetGetWithHttpInfo(advertiserId, filtering);
    return response.data;
  }

  async openApi2KeywordGetGetWithHttpInfo(advertiserId: number, filtering: KeywordGetV2Filtering): Promise<ApiResponse<KeywordGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<KeywordGetV2Response>({
      method: "GET",
      path: "/open_api/2/keyword/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "filtering", value: filtering }
      ]
    });
  }
}


