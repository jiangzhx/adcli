// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { PenaltyTaskGetV30Response } from "../models";


export interface OpenApiV30PenaltyTaskGetGetRequest {
  advertiserIds: number[];
  customerIds?: number[];
  disposalStartTime?: string;
  disposalEndTime?: string;
  page?: number;
  pageSize?: number;
}

export class PenaltyTaskGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30PenaltyTaskGetGet(request: OpenApiV30PenaltyTaskGetGetRequest): Promise<PenaltyTaskGetV30Response> {
    const response = await this.openApiV30PenaltyTaskGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30PenaltyTaskGetGetWithHttpInfo(request: OpenApiV30PenaltyTaskGetGetRequest): Promise<ApiResponse<PenaltyTaskGetV30Response>> {
    if (request.advertiserIds == null) {
      throw new ApiException("Missing the required parameter 'advertiserIds' when calling openApiV30PenaltyTaskGetGet");
    }
    return this.apiClient.requestWithHttpInfo<PenaltyTaskGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/penalty_task/get/",
      queryParams: [
        { name: "advertiser_ids", value: request.advertiserIds, collectionFormat: "csv" },
        { name: "customer_ids", value: request.customerIds, collectionFormat: "csv" },
        { name: "disposal_start_time", value: request.disposalStartTime },
        { name: "disposal_end_time", value: request.disposalEndTime },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


