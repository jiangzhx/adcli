// Generated from oceanengine/ad_open_sdk_go api/api_project_cpa_bid_update_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ProjectCpaBidUpdateV30Request, ProjectCpaBidUpdateV30Response } from "../models/index";


export interface ProjectCpaBidUpdateV30ApiOpenApiV30ProjectCpaBidUpdatePostRequest {
  projectCpaBidUpdateV30Request?: ProjectCpaBidUpdateV30Request;
}

export class ProjectCpaBidUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ProjectCpaBidUpdatePost(request: ProjectCpaBidUpdateV30ApiOpenApiV30ProjectCpaBidUpdatePostRequest): Promise<ProjectCpaBidUpdateV30Response> {
    const response = await this.openApiV30ProjectCpaBidUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ProjectCpaBidUpdatePostWithHttpInfo(request: ProjectCpaBidUpdateV30ApiOpenApiV30ProjectCpaBidUpdatePostRequest): Promise<ApiResponse<ProjectCpaBidUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<ProjectCpaBidUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/project/cpa_bid/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.projectCpaBidUpdateV30Request
    });
  }
}


