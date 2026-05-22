// Generated from oceanengine/ad_open_sdk_go api/api_uni_project_create_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { UniProjectCreateV30Request, UniProjectCreateV30Response } from "../models/index";


export interface UniProjectCreateV30ApiOpenApiV30UniProjectCreatePostRequest {
  uniProjectCreateV30Request?: UniProjectCreateV30Request;
}

export class UniProjectCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30UniProjectCreatePost(request: UniProjectCreateV30ApiOpenApiV30UniProjectCreatePostRequest): Promise<UniProjectCreateV30Response> {
    const response = await this.openApiV30UniProjectCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30UniProjectCreatePostWithHttpInfo(request: UniProjectCreateV30ApiOpenApiV30UniProjectCreatePostRequest): Promise<ApiResponse<UniProjectCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<UniProjectCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/uni_project/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.uniProjectCreateV30Request
    });
  }
}


