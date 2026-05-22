// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AsyncTaskCreateV2Request, AsyncTaskCreateV2Response } from "../models";


export class AsyncTaskCreateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AsyncTaskCreatePost(asyncTaskCreateV2Request: AsyncTaskCreateV2Request): Promise<AsyncTaskCreateV2Response> {
    const response = await this.openApi2AsyncTaskCreatePostWithHttpInfo(asyncTaskCreateV2Request);
    return response.data;
  }

  async openApi2AsyncTaskCreatePostWithHttpInfo(asyncTaskCreateV2Request: AsyncTaskCreateV2Request): Promise<ApiResponse<AsyncTaskCreateV2Response>> {

    return this.apiClient.requestWithHttpInfo<AsyncTaskCreateV2Response>({
      method: "POST",
      path: "/open_api/2/async_task/create/",
      queryParams: [

      ],
      body: asyncTaskCreateV2Request
    });
  }
}


