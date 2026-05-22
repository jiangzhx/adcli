// Generated from oceanengine/ad_open_sdk_go api/api_project_roigoal_update_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ProjectRoigoalUpdateV30Request, ProjectRoigoalUpdateV30Response } from "../models/index";


export interface ProjectRoigoalUpdateV30ApiOpenApiV30ProjectRoigoalUpdatePostRequest {
  projectRoigoalUpdateV30Request?: ProjectRoigoalUpdateV30Request;
}

export class ProjectRoigoalUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ProjectRoigoalUpdatePost(request: ProjectRoigoalUpdateV30ApiOpenApiV30ProjectRoigoalUpdatePostRequest): Promise<ProjectRoigoalUpdateV30Response> {
    const response = await this.openApiV30ProjectRoigoalUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ProjectRoigoalUpdatePostWithHttpInfo(request: ProjectRoigoalUpdateV30ApiOpenApiV30ProjectRoigoalUpdatePostRequest): Promise<ApiResponse<ProjectRoigoalUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<ProjectRoigoalUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/project/roigoal/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.projectRoigoalUpdateV30Request
    });
  }
}


