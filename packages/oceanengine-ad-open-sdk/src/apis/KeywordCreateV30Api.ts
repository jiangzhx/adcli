// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { KeywordCreateV30Request, KeywordCreateV30Response } from "../models";


export interface OpenApiV30KeywordCreatePostRequest {
  keywordCreateV30Request?: KeywordCreateV30Request;
}

export class KeywordCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30KeywordCreatePost(request: OpenApiV30KeywordCreatePostRequest): Promise<KeywordCreateV30Response> {
    const response = await this.openApiV30KeywordCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30KeywordCreatePostWithHttpInfo(request: OpenApiV30KeywordCreatePostRequest): Promise<ApiResponse<KeywordCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<KeywordCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/keyword/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.keywordCreateV30Request
    });
  }
}


