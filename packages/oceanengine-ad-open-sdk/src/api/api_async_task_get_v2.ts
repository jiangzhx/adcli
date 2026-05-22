// Generated from oceanengine/ad_open_sdk_go api/api_async_task_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AsyncTaskGetV2Filtering, AsyncTaskGetV2Response } from "../models/index";


export interface AsyncTaskGetV2ApiOpenApi2AsyncTaskGetGetRequest {
  advertiserId: number | string;
  filtering?: AsyncTaskGetV2Filtering;
  page?: number;
  pageSize?: number;
}

export class AsyncTaskGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AsyncTaskGetGet(request: AsyncTaskGetV2ApiOpenApi2AsyncTaskGetGetRequest): Promise<AsyncTaskGetV2Response> {
    const response = await this.openApi2AsyncTaskGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2AsyncTaskGetGetWithHttpInfo(request: AsyncTaskGetV2ApiOpenApi2AsyncTaskGetGetRequest): Promise<ApiResponse<AsyncTaskGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.advertiserId != null && Number(request.advertiserId) < 1) {
      throw new ApiException("advertiserId must be greater than 1");
    }
    return this.apiClient.requestWithHttpInfo<AsyncTaskGetV2Response>({
      method: "GET",
      path: "/open_api/2/async_task/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


