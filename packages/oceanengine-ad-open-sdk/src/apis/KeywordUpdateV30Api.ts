// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { KeywordUpdateV30Request, KeywordUpdateV30Response } from "../models";


export interface OpenApiV30KeywordUpdatePostRequest {
  keywordUpdateV30Request?: KeywordUpdateV30Request;
}

export class KeywordUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30KeywordUpdatePost(request: OpenApiV30KeywordUpdatePostRequest): Promise<KeywordUpdateV30Response> {
    const response = await this.openApiV30KeywordUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30KeywordUpdatePostWithHttpInfo(request: OpenApiV30KeywordUpdatePostRequest): Promise<ApiResponse<KeywordUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<KeywordUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/keyword/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.keywordUpdateV30Request
    });
  }
}


