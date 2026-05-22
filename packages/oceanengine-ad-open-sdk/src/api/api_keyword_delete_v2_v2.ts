// Generated from oceanengine/ad_open_sdk_go api/api_keyword_delete_v2_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { KeywordDeleteV2V2Request, KeywordDeleteV2V2Response } from "../models/index";


export interface KeywordDeleteV2V2ApiOpenApi2KeywordDeleteV2PostRequest {
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

  async openApi2KeywordDeleteV2Post(request: KeywordDeleteV2V2ApiOpenApi2KeywordDeleteV2PostRequest): Promise<KeywordDeleteV2V2Response> {
    const response = await this.openApi2KeywordDeleteV2PostWithHttpInfo(request);
    return response.data;
  }

  async openApi2KeywordDeleteV2PostWithHttpInfo(request: KeywordDeleteV2V2ApiOpenApi2KeywordDeleteV2PostRequest): Promise<ApiResponse<KeywordDeleteV2V2Response>> {

    return this.apiClient.requestWithHttpInfo<KeywordDeleteV2V2Response>({
      method: "POST",
      path: "/open_api/2/keyword/delete_v2/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.keywordDeleteV2V2Request
    });
  }
}


