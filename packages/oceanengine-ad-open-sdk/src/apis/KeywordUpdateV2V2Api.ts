// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { KeywordUpdateV2V2Request, KeywordUpdateV2V2Response } from "../models";


export interface OpenApi2KeywordUpdateV2PostRequest {
  keywordUpdateV2V2Request?: KeywordUpdateV2V2Request;
}

export class KeywordUpdateV2V2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2KeywordUpdateV2Post(request: OpenApi2KeywordUpdateV2PostRequest): Promise<KeywordUpdateV2V2Response> {
    const response = await this.openApi2KeywordUpdateV2PostWithHttpInfo(request);
    return response.data;
  }

  async openApi2KeywordUpdateV2PostWithHttpInfo(request: OpenApi2KeywordUpdateV2PostRequest): Promise<ApiResponse<KeywordUpdateV2V2Response>> {

    return this.apiClient.requestWithHttpInfo<KeywordUpdateV2V2Response>({
      method: "POST",
      path: "/open_api/2/keyword/update_v2/",
      queryParams: [

      ],
      body: request.keywordUpdateV2V2Request
    });
  }
}


