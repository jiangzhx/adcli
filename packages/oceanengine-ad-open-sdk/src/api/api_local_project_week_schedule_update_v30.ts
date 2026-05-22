// Generated from oceanengine/ad_open_sdk_go api/api_local_project_week_schedule_update_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { LocalProjectWeekScheduleUpdateV30Request, LocalProjectWeekScheduleUpdateV30Response } from "../models/index";


export interface LocalProjectWeekScheduleUpdateV30ApiOpenApiV30LocalProjectWeekScheduleUpdatePostRequest {
  localProjectWeekScheduleUpdateV30Request?: LocalProjectWeekScheduleUpdateV30Request;
}

export class LocalProjectWeekScheduleUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalProjectWeekScheduleUpdatePost(request: LocalProjectWeekScheduleUpdateV30ApiOpenApiV30LocalProjectWeekScheduleUpdatePostRequest): Promise<LocalProjectWeekScheduleUpdateV30Response> {
    const response = await this.openApiV30LocalProjectWeekScheduleUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalProjectWeekScheduleUpdatePostWithHttpInfo(request: LocalProjectWeekScheduleUpdateV30ApiOpenApiV30LocalProjectWeekScheduleUpdatePostRequest): Promise<ApiResponse<LocalProjectWeekScheduleUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<LocalProjectWeekScheduleUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/local/project/week_schedule/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.localProjectWeekScheduleUpdateV30Request
    });
  }
}


