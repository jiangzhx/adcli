// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { KeywordCreateV2V2Request, KeywordCreateV2V2Response } from "../models";


export interface OpenApi2KeywordCreateV2PostRequest {
  keywordCreateV2V2Request?: KeywordCreateV2V2Request;
}

export class KeywordCreateV2V2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2KeywordCreateV2Post(request: OpenApi2KeywordCreateV2PostRequest): Promise<KeywordCreateV2V2Response> {
    const response = await this.openApi2KeywordCreateV2PostWithHttpInfo(request);
    return response.data;
  }

  async openApi2KeywordCreateV2PostWithHttpInfo(request: OpenApi2KeywordCreateV2PostRequest): Promise<ApiResponse<KeywordCreateV2V2Response>> {

    return this.apiClient.requestWithHttpInfo<KeywordCreateV2V2Response>({
      method: "POST",
      path: "/open_api/2/keyword/create_v2/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.keywordCreateV2V2Request
    });
  }
}


