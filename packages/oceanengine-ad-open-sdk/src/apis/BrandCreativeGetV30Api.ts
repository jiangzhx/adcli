// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BrandCreativeGetV30CreativeStatus, BrandCreativeGetV30Response } from "../models";


export class BrandCreativeGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandCreativeGetGet(advertiserId: number, page: number, size: number, adIds: string[], campaignIds: string[], creativeIds: string[], creativeStatus: BrandCreativeGetV30CreativeStatus, createStartTime: string, createEndTime: string, startTime: string, endTime: string): Promise<BrandCreativeGetV30Response> {
    const response = await this.openApiV30BrandCreativeGetGetWithHttpInfo(advertiserId, page, size, adIds, campaignIds, creativeIds, creativeStatus, createStartTime, createEndTime, startTime, endTime);
    return response.data;
  }

  async openApiV30BrandCreativeGetGetWithHttpInfo(advertiserId: number, page: number, size: number, adIds: string[], campaignIds: string[], creativeIds: string[], creativeStatus: BrandCreativeGetV30CreativeStatus, createStartTime: string, createEndTime: string, startTime: string, endTime: string): Promise<ApiResponse<BrandCreativeGetV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30BrandCreativeGetGet");
    }

    if (page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApiV30BrandCreativeGetGet");
    }

    if (size == null) {
      throw new ApiException("Missing the required parameter 'size' when calling openApiV30BrandCreativeGetGet");
    }
    return this.apiClient.requestWithHttpInfo<BrandCreativeGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/brand/creative/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "creative_status", value: creativeStatus },
        { name: "create_start_time", value: createStartTime },
        { name: "create_end_time", value: createEndTime },
        { name: "start_time", value: startTime },
        { name: "end_time", value: endTime },
        { name: "page", value: page },
        { name: "size", value: size },
        { name: "ad_ids", value: adIds, collectionFormat: "csv" },
        { name: "campaign_ids", value: campaignIds, collectionFormat: "csv" },
        { name: "creative_ids", value: creativeIds, collectionFormat: "csv" }
      ]
    });
  }
}


