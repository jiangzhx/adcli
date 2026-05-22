// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BrandCreativeGetV30CreativeStatus, BrandCreativeGetV30Response } from "../models";


export interface OpenApiV30BrandCreativeGetGetRequest {
  advertiserId: number | string;
  page: number;
  size: number;
  adIds?: string[];
  campaignIds?: string[];
  creativeIds?: string[];
  creativeStatus?: BrandCreativeGetV30CreativeStatus;
  createStartTime?: string;
  createEndTime?: string;
  startTime?: string;
  endTime?: string;
}

export class BrandCreativeGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandCreativeGetGet(request: OpenApiV30BrandCreativeGetGetRequest): Promise<BrandCreativeGetV30Response> {
    const response = await this.openApiV30BrandCreativeGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BrandCreativeGetGetWithHttpInfo(request: OpenApiV30BrandCreativeGetGetRequest): Promise<ApiResponse<BrandCreativeGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30BrandCreativeGetGet");
    }

    if (request.page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApiV30BrandCreativeGetGet");
    }

    if (request.size == null) {
      throw new ApiException("Missing the required parameter 'size' when calling openApiV30BrandCreativeGetGet");
    }
    return this.apiClient.requestWithHttpInfo<BrandCreativeGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/brand/creative/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "ad_ids", value: request.adIds, collectionFormat: "csv" },
        { name: "campaign_ids", value: request.campaignIds, collectionFormat: "csv" },
        { name: "creative_ids", value: request.creativeIds, collectionFormat: "csv" },
        { name: "creative_status", value: request.creativeStatus },
        { name: "create_start_time", value: request.createStartTime },
        { name: "create_end_time", value: request.createEndTime },
        { name: "start_time", value: request.startTime },
        { name: "end_time", value: request.endTime },
        { name: "page", value: request.page },
        { name: "size", value: request.size }
      ]
    });
  }
}


