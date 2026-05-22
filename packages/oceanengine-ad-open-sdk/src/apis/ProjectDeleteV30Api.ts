// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ProjectDeleteV30Request, ProjectDeleteV30Response } from "../models";


export interface OpenApiV30ProjectDeletePostRequest {
  projectDeleteV30Request?: ProjectDeleteV30Request;
}

export class ProjectDeleteV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ProjectDeletePost(request: OpenApiV30ProjectDeletePostRequest): Promise<ProjectDeleteV30Response> {
    const response = await this.openApiV30ProjectDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ProjectDeletePostWithHttpInfo(request: OpenApiV30ProjectDeletePostRequest): Promise<ApiResponse<ProjectDeleteV30Response>> {

    return this.apiClient.requestWithHttpInfo<ProjectDeleteV30Response>({
      method: "POST",
      path: "/open_api/v3.0/project/delete/",
      queryParams: [

      ],
      body: request.projectDeleteV30Request
    });
  }
}


