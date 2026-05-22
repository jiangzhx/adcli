// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { KeywordDeleteV2V2Request, KeywordDeleteV2V2Response } from "../models";


export interface OpenApi2KeywordDeleteV2PostRequest {
  keywordDeleteV2V2Request?: KeywordDeleteV2V2Request;
}

export class KeywordDeleteV2V2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2KeywordDeleteV2Post(request: OpenApi2KeywordDeleteV2PostRequest): Promise<KeywordDeleteV2V2Response> {
    const response = await this.openApi2KeywordDeleteV2PostWithHttpInfo(request);
    return response.data;
  }

  async openApi2KeywordDeleteV2PostWithHttpInfo(request: OpenApi2KeywordDeleteV2PostRequest): Promise<ApiResponse<KeywordDeleteV2V2Response>> {

    return this.apiClient.requestWithHttpInfo<KeywordDeleteV2V2Response>({
      method: "POST",
      path: "/open_api/2/keyword/delete_v2/",
      queryParams: [

      ],
      body: request.keywordDeleteV2V2Request
    });
  }
}


