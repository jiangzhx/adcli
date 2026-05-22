// Generated from oceanengine/ad_open_sdk_go api/api_project_status_update_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ProjectStatusUpdateV30Request, ProjectStatusUpdateV30Response } from "../models/index";


export interface ProjectStatusUpdateV30ApiOpenApiV30ProjectStatusUpdatePostRequest {
  projectStatusUpdateV30Request?: ProjectStatusUpdateV30Request;
}

export class ProjectStatusUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ProjectStatusUpdatePost(request: ProjectStatusUpdateV30ApiOpenApiV30ProjectStatusUpdatePostRequest): Promise<ProjectStatusUpdateV30Response> {
    const response = await this.openApiV30ProjectStatusUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ProjectStatusUpdatePostWithHttpInfo(request: ProjectStatusUpdateV30ApiOpenApiV30ProjectStatusUpdatePostRequest): Promise<ApiResponse<ProjectStatusUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<ProjectStatusUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/project/status/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.projectStatusUpdateV30Request
    });
  }
}


