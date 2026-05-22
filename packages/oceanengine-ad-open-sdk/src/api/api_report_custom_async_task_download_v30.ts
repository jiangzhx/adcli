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
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ReportCustomAsyncTaskDownloadGet");
    }

    if (request.taskId == null) {
      throw new ApiException("Missing the required parameter 'taskId' when calling openApiV30ReportCustomAsyncTaskDownloadGet");
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


