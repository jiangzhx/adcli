// Generated from oceanengine/ad_open_sdk_go api/api_penalty_task_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { PenaltyTaskGetV30Response } from "../models/index";


export interface PenaltyTaskGetV30ApiOpenApiV30PenaltyTaskGetGetRequest {
  advertiserIds: (number | string)[];
  customerIds?: (number | string)[];
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

  async openApiV30PenaltyTaskGetGet(request: PenaltyTaskGetV30ApiOpenApiV30PenaltyTaskGetGetRequest): Promise<PenaltyTaskGetV30Response> {
    const response = await this.openApiV30PenaltyTaskGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30PenaltyTaskGetGetWithHttpInfo(request: PenaltyTaskGetV30ApiOpenApiV30PenaltyTaskGetGetRequest): Promise<ApiResponse<PenaltyTaskGetV30Response>> {
    if (request.advertiserIds == null) {
      throw new ApiException("advertiserIds is required and must be specified");
    }

    if (request.advertiserIds != null && request.advertiserIds.length < 1) {
      throw new ApiException("advertiserIds must have at least 1 elements");
    }

    if (request.advertiserIds != null && request.advertiserIds.length > 20) {
      throw new ApiException("advertiserIds must have less than 20 elements");
    }
    return this.apiClient.requestWithHttpInfo<PenaltyTaskGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/penalty_task/get/",
      queryParams: [
        { name: "advertiser_ids", value: request.advertiserIds },
        { name: "customer_ids", value: request.customerIds },
        { name: "disposal_start_time", value: request.disposalStartTime },
        { name: "disposal_end_time", value: request.disposalEndTime },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


