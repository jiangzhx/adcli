// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";


export interface OpenApiV30ReportProductAsyncTaskDownloadGetRequest {
  advertiserId: number | string;
  taskId: number | string;
  rangeFrom?: number;
  rangeTo?: number;
}

export class ReportProductAsyncTaskDownloadV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ReportProductAsyncTaskDownloadGet(request: OpenApiV30ReportProductAsyncTaskDownloadGetRequest): Promise<ArrayBuffer> {
    const response = await this.openApiV30ReportProductAsyncTaskDownloadGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ReportProductAsyncTaskDownloadGetWithHttpInfo(request: OpenApiV30ReportProductAsyncTaskDownloadGetRequest): Promise<ApiResponse<ArrayBuffer>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ReportProductAsyncTaskDownloadGet");
    }

    if (request.taskId == null) {
      throw new ApiException("Missing the required parameter 'taskId' when calling openApiV30ReportProductAsyncTaskDownloadGet");
    }
    return this.apiClient.requestWithHttpInfo<ArrayBuffer>({
      method: "GET",
      path: "/open_api/v3.0/report/product/async_task/download/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "task_id", value: request.taskId },
        { name: "range_from", value: request.rangeFrom },
        { name: "range_to", value: request.rangeTo }
      ],
      responseType: "arrayBuffer"
    });
  }
}


