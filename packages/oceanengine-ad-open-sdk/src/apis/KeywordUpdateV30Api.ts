// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { KeywordUpdateV30Request, KeywordUpdateV30Response } from "../models";


export class KeywordUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30KeywordUpdatePost(keywordUpdateV30Request: KeywordUpdateV30Request): Promise<KeywordUpdateV30Response> {
    const response = await this.openApiV30KeywordUpdatePostWithHttpInfo(keywordUpdateV30Request);
    return response.data;
  }

  async openApiV30KeywordUpdatePostWithHttpInfo(keywordUpdateV30Request: KeywordUpdateV30Request): Promise<ApiResponse<KeywordUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<KeywordUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/keyword/update/",
      queryParams: [

      ],
      body: keywordUpdateV30Request
    });
  }
}


