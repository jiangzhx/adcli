// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ProjectScheduleTimeUpdateV30Request, ProjectScheduleTimeUpdateV30Response } from "../models";


export interface OpenApiV30ProjectScheduleTimeUpdatePostRequest {
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

  async openApiV30ProjectScheduleTimeUpdatePost(request: OpenApiV30ProjectScheduleTimeUpdatePostRequest): Promise<ProjectScheduleTimeUpdateV30Response> {
    const response = await this.openApiV30ProjectScheduleTimeUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ProjectScheduleTimeUpdatePostWithHttpInfo(request: OpenApiV30ProjectScheduleTimeUpdatePostRequest): Promise<ApiResponse<ProjectScheduleTimeUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<ProjectScheduleTimeUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/project/schedule_time/update/",
      queryParams: [

      ],
      body: request.projectScheduleTimeUpdateV30Request
    });
  }
}


