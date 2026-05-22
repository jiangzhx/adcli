// Generated from oceanengine/ad_open_sdk_go api/api_keyword_create_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { KeywordCreateV30Request, KeywordCreateV30Response } from "../models/index";


export interface KeywordCreateV30ApiOpenApiV30KeywordCreatePostRequest {
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

  async openApiV30KeywordCreatePost(request: KeywordCreateV30ApiOpenApiV30KeywordCreatePostRequest): Promise<KeywordCreateV30Response> {
    const response = await this.openApiV30KeywordCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30KeywordCreatePostWithHttpInfo(request: KeywordCreateV30ApiOpenApiV30KeywordCreatePostRequest): Promise<ApiResponse<KeywordCreateV30Response>> {

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


