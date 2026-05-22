// Generated from oceanengine/ad_open_sdk_go api/api_async_task_download_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";


export interface AsyncTaskDownloadV2ApiOpenApi2AsyncTaskDownloadGetRequest {
  advertiserId: number | string;
  taskId: number | string;
  rangeFrom?: number;
  rangeTo?: number;
}

export class AsyncTaskDownloadV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AsyncTaskDownloadGet(request: AsyncTaskDownloadV2ApiOpenApi2AsyncTaskDownloadGetRequest): Promise<ArrayBuffer> {
    const response = await this.openApi2AsyncTaskDownloadGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2AsyncTaskDownloadGetWithHttpInfo(request: AsyncTaskDownloadV2ApiOpenApi2AsyncTaskDownloadGetRequest): Promise<ApiResponse<ArrayBuffer>> {
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
      path: "/open_api/2/async_task/download/",
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


