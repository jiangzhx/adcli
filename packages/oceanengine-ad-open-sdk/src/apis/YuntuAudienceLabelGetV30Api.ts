// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { YuntuAudienceLabelGetV30Response } from "../models";


export interface OpenApiV30YuntuAudienceLabelGetGetRequest {
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

  async openApiV30YuntuAudienceLabelGetGet(request: OpenApiV30YuntuAudienceLabelGetGetRequest): Promise<YuntuAudienceLabelGetV30Response> {
    const response = await this.openApiV30YuntuAudienceLabelGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30YuntuAudienceLabelGetGetWithHttpInfo(request: OpenApiV30YuntuAudienceLabelGetGetRequest): Promise<ApiResponse<YuntuAudienceLabelGetV30Response>> {
    if (request.yuntuBrandId == null) {
      throw new ApiException("Missing the required parameter 'yuntuBrandId' when calling openApiV30YuntuAudienceLabelGetGet");
    }

    if (request.serviceProviderId == null) {
      throw new ApiException("Missing the required parameter 'serviceProviderId' when calling openApiV30YuntuAudienceLabelGetGet");
    }

    if (request.labelId == null) {
      throw new ApiException("Missing the required parameter 'labelId' when calling openApiV30YuntuAudienceLabelGetGet");
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


