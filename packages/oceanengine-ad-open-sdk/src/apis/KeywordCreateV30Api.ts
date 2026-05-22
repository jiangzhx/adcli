// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { KeywordCreateV30Request, KeywordCreateV30Response } from "../models";


export class KeywordCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30KeywordCreatePost(keywordCreateV30Request: KeywordCreateV30Request): Promise<KeywordCreateV30Response> {
    const response = await this.openApiV30KeywordCreatePostWithHttpInfo(keywordCreateV30Request);
    return response.data;
  }

  async openApiV30KeywordCreatePostWithHttpInfo(keywordCreateV30Request: KeywordCreateV30Request): Promise<ApiResponse<KeywordCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<KeywordCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/keyword/create/",
      queryParams: [

      ],
      body: keywordCreateV30Request
    });
  }
}


