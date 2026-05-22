// Generated from oceanengine/ad_open_sdk_go api/api_keyword_update_v2_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { KeywordUpdateV2V2Request, KeywordUpdateV2V2Response } from "../models/index";


export interface KeywordUpdateV2V2ApiOpenApi2KeywordUpdateV2PostRequest {
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

  async openApi2KeywordUpdateV2Post(request: KeywordUpdateV2V2ApiOpenApi2KeywordUpdateV2PostRequest): Promise<KeywordUpdateV2V2Response> {
    const response = await this.openApi2KeywordUpdateV2PostWithHttpInfo(request);
    return response.data;
  }

  async openApi2KeywordUpdateV2PostWithHttpInfo(request: KeywordUpdateV2V2ApiOpenApi2KeywordUpdateV2PostRequest): Promise<ApiResponse<KeywordUpdateV2V2Response>> {

    return this.apiClient.requestWithHttpInfo<KeywordUpdateV2V2Response>({
      method: "POST",
      path: "/open_api/2/keyword/update_v2/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.keywordUpdateV2V2Request
    });
  }
}


