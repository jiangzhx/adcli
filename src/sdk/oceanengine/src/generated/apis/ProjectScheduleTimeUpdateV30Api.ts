// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ProjectScheduleTimeUpdateV30Request, ProjectScheduleTimeUpdateV30Response } from "../models";


export class ProjectScheduleTimeUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ProjectScheduleTimeUpdatePost(projectScheduleTimeUpdateV30Request: ProjectScheduleTimeUpdateV30Request): Promise<ProjectScheduleTimeUpdateV30Response> {
    const response = await this.openApiV30ProjectScheduleTimeUpdatePostWithHttpInfo(projectScheduleTimeUpdateV30Request);
    return response.data;
  }

  async openApiV30ProjectScheduleTimeUpdatePostWithHttpInfo(projectScheduleTimeUpdateV30Request: ProjectScheduleTimeUpdateV30Request): Promise<ApiResponse<ProjectScheduleTimeUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<ProjectScheduleTimeUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/project/schedule_time/update/",
      queryParams: [

      ],
      body: projectScheduleTimeUpdateV30Request
    });
  }
}


