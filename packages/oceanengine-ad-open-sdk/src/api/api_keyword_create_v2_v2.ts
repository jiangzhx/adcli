// Generated from oceanengine/ad_open_sdk_go api/api_keyword_create_v2_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { KeywordCreateV2V2Request, KeywordCreateV2V2Response } from "../models/index";


export interface KeywordCreateV2V2ApiOpenApi2KeywordCreateV2PostRequest {
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

  async openApi2KeywordCreateV2Post(request: KeywordCreateV2V2ApiOpenApi2KeywordCreateV2PostRequest): Promise<KeywordCreateV2V2Response> {
    const response = await this.openApi2KeywordCreateV2PostWithHttpInfo(request);
    return response.data;
  }

  async openApi2KeywordCreateV2PostWithHttpInfo(request: KeywordCreateV2V2ApiOpenApi2KeywordCreateV2PostRequest): Promise<ApiResponse<KeywordCreateV2V2Response>> {

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


