// Generated from oceanengine/ad_open_sdk_go api/api_yuntu_audience_label_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { YuntuAudienceLabelGetV30Response } from "../models/index";


export interface YuntuAudienceLabelGetV30ApiOpenApiV30YuntuAudienceLabelGetGetRequest {
  yuntuBrandId: number | string;
  serviceProviderId: number | string;
  labelId: number | string;
}

export class YuntuAudienceLabelGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30YuntuAudienceLabelGetGet(request: YuntuAudienceLabelGetV30ApiOpenApiV30YuntuAudienceLabelGetGetRequest): Promise<YuntuAudienceLabelGetV30Response> {
    const response = await this.openApiV30YuntuAudienceLabelGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30YuntuAudienceLabelGetGetWithHttpInfo(request: YuntuAudienceLabelGetV30ApiOpenApiV30YuntuAudienceLabelGetGetRequest): Promise<ApiResponse<YuntuAudienceLabelGetV30Response>> {
    if (request.yuntuBrandId == null) {
      throw new ApiException("yuntuBrandId is required and must be specified");
    }

    if (request.serviceProviderId == null) {
      throw new ApiException("serviceProviderId is required and must be specified");
    }

    if (request.labelId == null) {
      throw new ApiException("labelId is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<YuntuAudienceLabelGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/yuntu/audience_label/get/",
      queryParams: [
        { name: "yuntu_brand_id", value: request.yuntuBrandId },
        { name: "service_provider_id", value: request.serviceProviderId },
        { name: "label_id", value: request.labelId }
      ]
    });
  }
}


