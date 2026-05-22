// Generated from oceanengine/ad_open_sdk_go api/api_star_data_task_timeline_report_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarDataTaskTimelineReportV2Response } from "../models/index";


export interface StarDataTaskTimelineReportV2ApiOpenApi2StarDataTaskTimelineReportGetRequest {
  starId: number | string;
  partition: string;
  outerProjectIdList?: string[];
  outerTaskIdList?: string[];
}

export class StarDataTaskTimelineReportV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarDataTaskTimelineReportGet(request: StarDataTaskTimelineReportV2ApiOpenApi2StarDataTaskTimelineReportGetRequest): Promise<StarDataTaskTimelineReportV2Response> {
    const response = await this.openApi2StarDataTaskTimelineReportGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarDataTaskTimelineReportGetWithHttpInfo(request: StarDataTaskTimelineReportV2ApiOpenApi2StarDataTaskTimelineReportGetRequest): Promise<ApiResponse<StarDataTaskTimelineReportV2Response>> {
    if (request.starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarDataTaskTimelineReportGet");
    }

    if (request.partition == null) {
      throw new ApiException("Missing the required parameter 'partition' when calling openApi2StarDataTaskTimelineReportGet");
    }
    return this.apiClient.requestWithHttpInfo<StarDataTaskTimelineReportV2Response>({
      method: "GET",
      path: "/open_api/2/star/data/task_timeline_report/",
      queryParams: [
        { name: "star_id", value: request.starId },
        { name: "outer_project_id_list", value: request.outerProjectIdList, collectionFormat: "csv" },
        { name: "outer_task_id_list", value: request.outerTaskIdList, collectionFormat: "csv" },
        { name: "partition", value: request.partition }
      ]
    });
  }
}


