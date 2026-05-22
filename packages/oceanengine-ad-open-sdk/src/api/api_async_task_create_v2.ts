// Generated from oceanengine/ad_open_sdk_go api/api_async_task_create_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AsyncTaskCreateV2Request, AsyncTaskCreateV2Response } from "../models/index";


export interface AsyncTaskCreateV2ApiOpenApi2AsyncTaskCreatePostRequest {
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

  async openApi2AsyncTaskCreatePost(request: AsyncTaskCreateV2ApiOpenApi2AsyncTaskCreatePostRequest): Promise<AsyncTaskCreateV2Response> {
    const response = await this.openApi2AsyncTaskCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2AsyncTaskCreatePostWithHttpInfo(request: AsyncTaskCreateV2ApiOpenApi2AsyncTaskCreatePostRequest): Promise<ApiResponse<AsyncTaskCreateV2Response>> {

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


