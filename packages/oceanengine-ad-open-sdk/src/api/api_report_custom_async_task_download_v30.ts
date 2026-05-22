// Generated from oceanengine/ad_open_sdk_go api/api_report_custom_async_task_download_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";


export interface ReportCustomAsyncTaskDownloadV30ApiOpenApiV30ReportCustomAsyncTaskDownloadGetRequest {
  advertiserId: number | string;
  taskId: number | string;
}

export class ReportCustomAsyncTaskDownloadV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ReportCustomAsyncTaskDownloadGet(request: ReportCustomAsyncTaskDownloadV30ApiOpenApiV30ReportCustomAsyncTaskDownloadGetRequest): Promise<ArrayBuffer> {
    const response = await this.openApiV30ReportCustomAsyncTaskDownloadGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ReportCustomAsyncTaskDownloadGetWithHttpInfo(request: ReportCustomAsyncTaskDownloadV30ApiOpenApiV30ReportCustomAsyncTaskDownloadGetRequest): Promise<ApiResponse<ArrayBuffer>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.advertiserId != null && Number(request.advertiserId) < 1) {
      throw new ApiException("advertiserId must be greater than 1");
    }

    if (request.taskId == null) {
      throw new ApiException("taskId is required and must be specified");
    }

    if (request.taskId != null && Number(request.taskId) < 1) {
      throw new ApiException("taskId must be greater than 1");
    }
    return this.apiClient.requestWithHttpInfo<ArrayBuffer>({
      method: "GET",
      path: "/open_api/v3.0/report/custom/async_task/download/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "task_id", value: request.taskId }
      ],
      responseType: "arrayBuffer"
    });
  }
}


