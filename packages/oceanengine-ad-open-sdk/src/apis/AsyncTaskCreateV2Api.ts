// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AsyncTaskCreateV2Request, AsyncTaskCreateV2Response } from "../models";


export interface OpenApi2AsyncTaskCreatePostRequest {
  asyncTaskCreateV2Request?: AsyncTaskCreateV2Request;
}

export class AsyncTaskCreateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AsyncTaskCreatePost(request: OpenApi2AsyncTaskCreatePostRequest): Promise<AsyncTaskCreateV2Response> {
    const response = await this.openApi2AsyncTaskCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2AsyncTaskCreatePostWithHttpInfo(request: OpenApi2AsyncTaskCreatePostRequest): Promise<ApiResponse<AsyncTaskCreateV2Response>> {

    return this.apiClient.requestWithHttpInfo<AsyncTaskCreateV2Response>({
      method: "POST",
      path: "/open_api/2/async_task/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.asyncTaskCreateV2Request
    });
  }
}


