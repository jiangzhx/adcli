// Generated from oceanengine/ad_open_sdk_go api/api_advertiser_qualification_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AdvertiserQualificationGetV30Response } from "../models/index";


export interface AdvertiserQualificationGetV30ApiOpenApiV30AdvertiserQualificationGetGetRequest {
  advertiserId: number | string;
}

export class AdvertiserQualificationGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30AdvertiserQualificationGetGet(request: AdvertiserQualificationGetV30ApiOpenApiV30AdvertiserQualificationGetGetRequest): Promise<AdvertiserQualificationGetV30Response> {
    const response = await this.openApiV30AdvertiserQualificationGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30AdvertiserQualificationGetGetWithHttpInfo(request: AdvertiserQualificationGetV30ApiOpenApiV30AdvertiserQualificationGetGetRequest): Promise<ApiResponse<AdvertiserQualificationGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.advertiserId != null && Number(request.advertiserId) < 1) {
      throw new ApiException("advertiserId must be greater than 1");
    }
    return this.apiClient.requestWithHttpInfo<AdvertiserQualificationGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/advertiser/qualification/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId }
      ]
    });
  }
}


