// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { YuntuAudienceInfoGetV30Response } from "../models";


export interface OpenApiV30YuntuAudienceInfoGetGetRequest {
  yuntuBrandId: number;
  serviceProviderId: number;
  advertiserId: number;
  customAudienceId: number;
}

export class YuntuAudienceInfoGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30YuntuAudienceInfoGetGet(request: OpenApiV30YuntuAudienceInfoGetGetRequest): Promise<YuntuAudienceInfoGetV30Response> {
    const response = await this.openApiV30YuntuAudienceInfoGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30YuntuAudienceInfoGetGetWithHttpInfo(request: OpenApiV30YuntuAudienceInfoGetGetRequest): Promise<ApiResponse<YuntuAudienceInfoGetV30Response>> {
    if (request.yuntuBrandId == null) {
      throw new ApiException("Missing the required parameter 'yuntuBrandId' when calling openApiV30YuntuAudienceInfoGetGet");
    }

    if (request.serviceProviderId == null) {
      throw new ApiException("Missing the required parameter 'serviceProviderId' when calling openApiV30YuntuAudienceInfoGetGet");
    }

    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30YuntuAudienceInfoGetGet");
    }

    if (request.customAudienceId == null) {
      throw new ApiException("Missing the required parameter 'customAudienceId' when calling openApiV30YuntuAudienceInfoGetGet");
    }
    return this.apiClient.requestWithHttpInfo<YuntuAudienceInfoGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/yuntu/audience_info/get/",
      queryParams: [
        { name: "yuntu_brand_id", value: request.yuntuBrandId },
        { name: "service_provider_id", value: request.serviceProviderId },
        { name: "advertiser_id", value: request.advertiserId },
        { name: "custom_audience_id", value: request.customAudienceId }
      ]
    });
  }
}


