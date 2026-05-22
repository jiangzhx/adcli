// Generated from oceanengine/ad_open_sdk_go api/api_keyword_delete_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { KeywordDeleteV30Request, KeywordDeleteV30Response } from "../models/index";


export interface KeywordDeleteV30ApiOpenApiV30KeywordDeletePostRequest {
  keywordDeleteV30Request?: KeywordDeleteV30Request;
}

export class KeywordDeleteV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30KeywordDeletePost(request: KeywordDeleteV30ApiOpenApiV30KeywordDeletePostRequest): Promise<KeywordDeleteV30Response> {
    const response = await this.openApiV30KeywordDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30KeywordDeletePostWithHttpInfo(request: KeywordDeleteV30ApiOpenApiV30KeywordDeletePostRequest): Promise<ApiResponse<KeywordDeleteV30Response>> {

    return this.apiClient.requestWithHttpInfo<KeywordDeleteV30Response>({
      method: "POST",
      path: "/open_api/v3.0/keyword/delete/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.keywordDeleteV30Request
    });
  }
}


