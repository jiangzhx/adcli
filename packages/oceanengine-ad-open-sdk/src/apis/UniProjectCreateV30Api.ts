// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { UniProjectCreateV30Request, UniProjectCreateV30Response } from "../models";


export class UniProjectCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30UniProjectCreatePost(request: UniProjectCreateV30Request): Promise<UniProjectCreateV30Response> {
    const response = await this.openApiV30UniProjectCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30UniProjectCreatePostWithHttpInfo(request: UniProjectCreateV30Request): Promise<ApiResponse<UniProjectCreateV30Response>> {
    return this.apiClient.requestWithHttpInfo<UniProjectCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/uni_project/create/",
      queryParams: [

      ],
      body: request
    });
  }
}


