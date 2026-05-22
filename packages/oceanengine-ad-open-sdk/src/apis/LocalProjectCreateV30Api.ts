// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LocalProjectCreateV30Request, LocalProjectCreateV30Response } from "../models";


export interface OpenApiV30LocalProjectCreatePostRequest {
  localProjectCreateV30Request?: LocalProjectCreateV30Request;
}

export class LocalProjectCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalProjectCreatePost(request: OpenApiV30LocalProjectCreatePostRequest): Promise<LocalProjectCreateV30Response> {
    const response = await this.openApiV30LocalProjectCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalProjectCreatePostWithHttpInfo(request: OpenApiV30LocalProjectCreatePostRequest): Promise<ApiResponse<LocalProjectCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<LocalProjectCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/local/project/create/",
      queryParams: [

      ],
      body: request.localProjectCreateV30Request
    });
  }
}


