// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ProjectWeekScheduleUpdateV30Request, ProjectWeekScheduleUpdateV30Response } from "../models";


export interface OpenApiV30ProjectWeekScheduleUpdatePostRequest {
  projectWeekScheduleUpdateV30Request?: ProjectWeekScheduleUpdateV30Request;
}

export class ProjectWeekScheduleUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ProjectWeekScheduleUpdatePost(request: OpenApiV30ProjectWeekScheduleUpdatePostRequest): Promise<ProjectWeekScheduleUpdateV30Response> {
    const response = await this.openApiV30ProjectWeekScheduleUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ProjectWeekScheduleUpdatePostWithHttpInfo(request: OpenApiV30ProjectWeekScheduleUpdatePostRequest): Promise<ApiResponse<ProjectWeekScheduleUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<ProjectWeekScheduleUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/project/week_schedule/update/",
      queryParams: [

      ],
      body: request.projectWeekScheduleUpdateV30Request
    });
  }
}


