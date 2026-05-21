// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { BrandAdGetV30AdForm, BrandAdGetV30AdStatus, BrandAdGetV30AppOrigin, BrandAdGetV30Response } from "../models";


export class BrandAdGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandAdGetGet(advertiserId: number, page: number, size: number, adIds: string[], adNames: string[], campaignIds: string[], appOrigin: BrandAdGetV30AppOrigin, adForm: BrandAdGetV30AdForm, adStatus: BrandAdGetV30AdStatus, createStartTime: string, createEndTime: string, startTime: string, endTime: string): Promise<BrandAdGetV30Response> {
    const response = await this.openApiV30BrandAdGetGetWithHttpInfo(advertiserId, page, size, adIds, adNames, campaignIds, appOrigin, adForm, adStatus, createStartTime, createEndTime, startTime, endTime);
    return response.data;
  }

  async openApiV30BrandAdGetGetWithHttpInfo(advertiserId: number, page: number, size: number, adIds: string[], adNames: string[], campaignIds: string[], appOrigin: BrandAdGetV30AppOrigin, adForm: BrandAdGetV30AdForm, adStatus: BrandAdGetV30AdStatus, createStartTime: string, createEndTime: string, startTime: string, endTime: string): Promise<ApiResponse<BrandAdGetV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30BrandAdGetGet");
    }

    if (page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApiV30BrandAdGetGet");
    }

    if (size == null) {
      throw new ApiException("Missing the required parameter 'size' when calling openApiV30BrandAdGetGet");
    }
    return this.apiClient.requestWithHttpInfo<BrandAdGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/brand/ad/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "app_origin", value: appOrigin },
        { name: "ad_form", value: adForm },
        { name: "ad_status", value: adStatus },
        { name: "create_start_time", value: createStartTime },
        { name: "create_end_time", value: createEndTime },
        { name: "start_time", value: startTime },
        { name: "end_time", value: endTime },
        { name: "page", value: page },
        { name: "size", value: size },
        { name: "ad_ids", value: adIds, collectionFormat: "csv" },
        { name: "ad_names", value: adNames, collectionFormat: "csv" },
        { name: "campaign_ids", value: campaignIds, collectionFormat: "csv" }
      ]
    });
  }
}


