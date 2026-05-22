// Generated from oceanengine/ad_open_sdk_go api/api_project_delete_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ProjectDeleteV30Request, ProjectDeleteV30Response } from "../models/index";


export interface ProjectDeleteV30ApiOpenApiV30ProjectDeletePostRequest {
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

  async openApiV30ProjectDeletePost(request: ProjectDeleteV30ApiOpenApiV30ProjectDeletePostRequest): Promise<ProjectDeleteV30Response> {
    const response = await this.openApiV30ProjectDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ProjectDeletePostWithHttpInfo(request: ProjectDeleteV30ApiOpenApiV30ProjectDeletePostRequest): Promise<ApiResponse<ProjectDeleteV30Response>> {

    return this.apiClient.requestWithHttpInfo<ProjectDeleteV30Response>({
      method: "POST",
      path: "/open_api/v3.0/project/delete/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.projectDeleteV30Request
    });
  }
}


