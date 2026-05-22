// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdvertiserQualificationGetV30Response } from "../models";


export interface OpenApiV30AdvertiserQualificationGetGetRequest {
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

  async openApiV30AdvertiserQualificationGetGet(request: OpenApiV30AdvertiserQualificationGetGetRequest): Promise<AdvertiserQualificationGetV30Response> {
    const response = await this.openApiV30AdvertiserQualificationGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30AdvertiserQualificationGetGetWithHttpInfo(request: OpenApiV30AdvertiserQualificationGetGetRequest): Promise<ApiResponse<AdvertiserQualificationGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30AdvertiserQualificationGetGet");
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


