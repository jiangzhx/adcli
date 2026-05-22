// Generated from oceanengine/ad_open_sdk_go api/api_std_project_create_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StdProjectCreateV30Request, StdProjectCreateV30Response } from "../models/index";


export interface StdProjectCreateV30ApiOpenApiV30StdProjectCreatePostRequest {
  stdProjectCreateV30Request?: StdProjectCreateV30Request;
}

export class StdProjectCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30StdProjectCreatePost(request: StdProjectCreateV30ApiOpenApiV30StdProjectCreatePostRequest): Promise<StdProjectCreateV30Response> {
    const response = await this.openApiV30StdProjectCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30StdProjectCreatePostWithHttpInfo(request: StdProjectCreateV30ApiOpenApiV30StdProjectCreatePostRequest): Promise<ApiResponse<StdProjectCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<StdProjectCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/std_project/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.stdProjectCreateV30Request
    });
  }
}


