// Generated from oceanengine/ad_open_sdk_go api/api_brand_ad_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { BrandAdGetV30AdForm, BrandAdGetV30AdStatus, BrandAdGetV30AppOrigin, BrandAdGetV30Response } from "../models/index";


export interface BrandAdGetV30ApiOpenApiV30BrandAdGetGetRequest {
  advertiserId: number | string;
  page: number;
  size: number;
  adIds?: string[];
  adNames?: string[];
  campaignIds?: string[];
  appOrigin?: BrandAdGetV30AppOrigin;
  adForm?: BrandAdGetV30AdForm;
  adStatus?: BrandAdGetV30AdStatus;
  createStartTime?: string;
  createEndTime?: string;
  startTime?: string;
  endTime?: string;
}

export class BrandAdGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandAdGetGet(request: BrandAdGetV30ApiOpenApiV30BrandAdGetGetRequest): Promise<BrandAdGetV30Response> {
    const response = await this.openApiV30BrandAdGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BrandAdGetGetWithHttpInfo(request: BrandAdGetV30ApiOpenApiV30BrandAdGetGetRequest): Promise<ApiResponse<BrandAdGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30BrandAdGetGet");
    }

    if (request.page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApiV30BrandAdGetGet");
    }

    if (request.size == null) {
      throw new ApiException("Missing the required parameter 'size' when calling openApiV30BrandAdGetGet");
    }
    return this.apiClient.requestWithHttpInfo<BrandAdGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/brand/ad/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "ad_ids", value: request.adIds, collectionFormat: "csv" },
        { name: "ad_names", value: request.adNames, collectionFormat: "csv" },
        { name: "campaign_ids", value: request.campaignIds, collectionFormat: "csv" },
        { name: "app_origin", value: request.appOrigin },
        { name: "ad_form", value: request.adForm },
        { name: "ad_status", value: request.adStatus },
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


