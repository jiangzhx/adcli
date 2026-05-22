// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { KeywordGetV2Filtering, KeywordGetV2Response } from "../models";


export interface OpenApi2KeywordGetGetRequest {
  advertiserId?: number;
  filtering?: KeywordGetV2Filtering;
}

export class KeywordGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2KeywordGetGet(request: OpenApi2KeywordGetGetRequest): Promise<KeywordGetV2Response> {
    const response = await this.openApi2KeywordGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2KeywordGetGetWithHttpInfo(request: OpenApi2KeywordGetGetRequest): Promise<ApiResponse<KeywordGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<KeywordGetV2Response>({
      method: "GET",
      path: "/open_api/2/keyword/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "filtering", value: request.filtering }
      ]
    });
  }
}


