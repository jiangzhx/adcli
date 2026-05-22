// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { PenaltyTaskGetV30Response } from "../models";


export class PenaltyTaskGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30PenaltyTaskGetGet(advertiserIds: number[], customerIds: number[], disposalStartTime: string, disposalEndTime: string, page: number, pageSize: number): Promise<PenaltyTaskGetV30Response> {
    const response = await this.openApiV30PenaltyTaskGetGetWithHttpInfo(advertiserIds, customerIds, disposalStartTime, disposalEndTime, page, pageSize);
    return response.data;
  }

  async openApiV30PenaltyTaskGetGetWithHttpInfo(advertiserIds: number[], customerIds: number[], disposalStartTime: string, disposalEndTime: string, page: number, pageSize: number): Promise<ApiResponse<PenaltyTaskGetV30Response>> {
    if (advertiserIds == null) {
      throw new ApiException("Missing the required parameter 'advertiserIds' when calling openApiV30PenaltyTaskGetGet");
    }
    return this.apiClient.requestWithHttpInfo<PenaltyTaskGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/penalty_task/get/",
      queryParams: [
        { name: "disposal_start_time", value: disposalStartTime },
        { name: "disposal_end_time", value: disposalEndTime },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "advertiser_ids", value: advertiserIds, collectionFormat: "csv" },
        { name: "customer_ids", value: customerIds, collectionFormat: "csv" }
      ]
    });
  }
}


