// Generated from oceanengine/ad_open_sdk_go api/api_project_update_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ProjectUpdateV30Request, ProjectUpdateV30Response } from "../models/index";


export interface ProjectUpdateV30ApiOpenApiV30ProjectUpdatePostRequest {
  projectUpdateV30Request?: ProjectUpdateV30Request;
}

export class ProjectUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ProjectUpdatePost(request: ProjectUpdateV30ApiOpenApiV30ProjectUpdatePostRequest): Promise<ProjectUpdateV30Response> {
    const response = await this.openApiV30ProjectUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ProjectUpdatePostWithHttpInfo(request: ProjectUpdateV30ApiOpenApiV30ProjectUpdatePostRequest): Promise<ApiResponse<ProjectUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<ProjectUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/project/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.projectUpdateV30Request
    });
  }
}


