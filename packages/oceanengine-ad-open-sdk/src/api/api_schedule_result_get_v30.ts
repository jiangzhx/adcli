// 由 oceanengine/ad_open_sdk_go api/api_schedule_result_get_v30.go 生成
// 不要手动编辑。

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ScheduleResultGetV30Response } from "../models/index";


export interface ScheduleResultGetV30ApiOpenApiV30ScheduleResultGetGetRequest {
  schedulerId: number | string;
  advertiserId?: number | string;
}

export class ScheduleResultGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ScheduleResultGetGet(request: ScheduleResultGetV30ApiOpenApiV30ScheduleResultGetGetRequest): Promise<ScheduleResultGetV30Response> {
    const response = await this.openApiV30ScheduleResultGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ScheduleResultGetGetWithHttpInfo(request: ScheduleResultGetV30ApiOpenApiV30ScheduleResultGetGetRequest): Promise<ApiResponse<ScheduleResultGetV30Response>> {
    if (request.schedulerId == null) {
      throw new ApiException("schedulerId is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<ScheduleResultGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/schedule/result/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "scheduler_id", value: request.schedulerId }
      ]
    });
  }
}


