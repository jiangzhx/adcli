// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StdProjectCreateV30Request, StdProjectCreateV30Response } from "../models";


export class StdProjectCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30StdProjectCreatePost(request: StdProjectCreateV30Request): Promise<StdProjectCreateV30Response> {
    const response = await this.openApiV30StdProjectCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30StdProjectCreatePostWithHttpInfo(request: StdProjectCreateV30Request): Promise<ApiResponse<StdProjectCreateV30Response>> {
    return this.apiClient.requestWithHttpInfo<StdProjectCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/std_project/create/",
      queryParams: [

      ],
      body: request
    });
  }
}


