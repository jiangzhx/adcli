// Generated from oceanengine/ad_open_sdk_go api/api_brand_creative_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { BrandCreativeGetV30CreativeStatus, BrandCreativeGetV30Response } from "../models/index";


export interface BrandCreativeGetV30ApiOpenApiV30BrandCreativeGetGetRequest {
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

  async openApiV30BrandCreativeGetGet(request: BrandCreativeGetV30ApiOpenApiV30BrandCreativeGetGetRequest): Promise<BrandCreativeGetV30Response> {
    const response = await this.openApiV30BrandCreativeGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BrandCreativeGetGetWithHttpInfo(request: BrandCreativeGetV30ApiOpenApiV30BrandCreativeGetGetRequest): Promise<ApiResponse<BrandCreativeGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.page == null) {
      throw new ApiException("page is required and must be specified");
    }

    if (request.page != null && Number(request.page) < 1) {
      throw new ApiException("page must be greater than 1");
    }

    if (request.size == null) {
      throw new ApiException("size is required and must be specified");
    }

    if (request.size != null && Number(request.size) > 100) {
      throw new ApiException("size must be less than 100");
    }
    return this.apiClient.requestWithHttpInfo<BrandCreativeGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/brand/creative/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "ad_ids", value: request.adIds },
        { name: "campaign_ids", value: request.campaignIds },
        { name: "creative_ids", value: request.creativeIds },
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


