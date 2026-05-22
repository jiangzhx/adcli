// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ProjectRoigoalUpdateV30Request, ProjectRoigoalUpdateV30Response } from "../models";


export interface OpenApiV30ProjectRoigoalUpdatePostRequest {
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

  async openApiV30ProjectRoigoalUpdatePost(request: OpenApiV30ProjectRoigoalUpdatePostRequest): Promise<ProjectRoigoalUpdateV30Response> {
    const response = await this.openApiV30ProjectRoigoalUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ProjectRoigoalUpdatePostWithHttpInfo(request: OpenApiV30ProjectRoigoalUpdatePostRequest): Promise<ApiResponse<ProjectRoigoalUpdateV30Response>> {

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


