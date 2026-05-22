// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarDataTaskTimelineReportV2Response } from "../models";


export class StarDataTaskTimelineReportV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarDataTaskTimelineReportGet(starId: number, partition: string, outerProjectIdList: string[], outerTaskIdList: string[]): Promise<StarDataTaskTimelineReportV2Response> {
    const response = await this.openApi2StarDataTaskTimelineReportGetWithHttpInfo(starId, partition, outerProjectIdList, outerTaskIdList);
    return response.data;
  }

  async openApi2StarDataTaskTimelineReportGetWithHttpInfo(starId: number, partition: string, outerProjectIdList: string[], outerTaskIdList: string[]): Promise<ApiResponse<StarDataTaskTimelineReportV2Response>> {
    if (starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarDataTaskTimelineReportGet");
    }

    if (partition == null) {
      throw new ApiException("Missing the required parameter 'partition' when calling openApi2StarDataTaskTimelineReportGet");
    }
    return this.apiClient.requestWithHttpInfo<StarDataTaskTimelineReportV2Response>({
      method: "GET",
      path: "/open_api/2/star/data/task_timeline_report/",
      queryParams: [
        { name: "star_id", value: starId },
        { name: "partition", value: partition },
        { name: "outer_project_id_list", value: outerProjectIdList, collectionFormat: "csv" },
        { name: "outer_task_id_list", value: outerTaskIdList, collectionFormat: "csv" }
      ]
    });
  }
}


