// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LocalProjectWeekScheduleUpdateV30Request, LocalProjectWeekScheduleUpdateV30Response } from "../models";


export class LocalProjectWeekScheduleUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalProjectWeekScheduleUpdatePost(request: LocalProjectWeekScheduleUpdateV30Request): Promise<LocalProjectWeekScheduleUpdateV30Response> {
    const response = await this.openApiV30LocalProjectWeekScheduleUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalProjectWeekScheduleUpdatePostWithHttpInfo(request: LocalProjectWeekScheduleUpdateV30Request): Promise<ApiResponse<LocalProjectWeekScheduleUpdateV30Response>> {
    return this.apiClient.requestWithHttpInfo<LocalProjectWeekScheduleUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/local/project/week_schedule/update/",
      queryParams: [

      ],
      body: request
    });
  }
}


