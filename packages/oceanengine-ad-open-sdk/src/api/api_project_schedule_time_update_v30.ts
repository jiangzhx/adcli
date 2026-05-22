// Generated from oceanengine/ad_open_sdk_go api/api_project_schedule_time_update_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ProjectScheduleTimeUpdateV30Request, ProjectScheduleTimeUpdateV30Response } from "../models/index";


export interface ProjectScheduleTimeUpdateV30ApiOpenApiV30ProjectScheduleTimeUpdatePostRequest {
  projectScheduleTimeUpdateV30Request?: ProjectScheduleTimeUpdateV30Request;
}

export class ProjectScheduleTimeUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ProjectScheduleTimeUpdatePost(request: ProjectScheduleTimeUpdateV30ApiOpenApiV30ProjectScheduleTimeUpdatePostRequest): Promise<ProjectScheduleTimeUpdateV30Response> {
    const response = await this.openApiV30ProjectScheduleTimeUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ProjectScheduleTimeUpdatePostWithHttpInfo(request: ProjectScheduleTimeUpdateV30ApiOpenApiV30ProjectScheduleTimeUpdatePostRequest): Promise<ApiResponse<ProjectScheduleTimeUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<ProjectScheduleTimeUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/project/schedule_time/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.projectScheduleTimeUpdateV30Request
    });
  }
}


