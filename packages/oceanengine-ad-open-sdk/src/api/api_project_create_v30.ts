// Generated from oceanengine/ad_open_sdk_go api/api_project_create_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ProjectCreateV30Request, ProjectCreateV30Response } from "../models/index";


export interface ProjectCreateV30ApiOpenApiV30ProjectCreatePostRequest {
  projectCreateV30Request?: ProjectCreateV30Request;
}

export class ProjectCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ProjectCreatePost(request: ProjectCreateV30ApiOpenApiV30ProjectCreatePostRequest): Promise<ProjectCreateV30Response> {
    const response = await this.openApiV30ProjectCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ProjectCreatePostWithHttpInfo(request: ProjectCreateV30ApiOpenApiV30ProjectCreatePostRequest): Promise<ApiResponse<ProjectCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<ProjectCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/project/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.projectCreateV30Request
    });
  }
}


