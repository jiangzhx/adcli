// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { YuntuAudienceLabelGetV30Response } from "../models";


export class YuntuAudienceLabelGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30YuntuAudienceLabelGetGet(yuntuBrandId: number, serviceProviderId: number, labelId: number): Promise<YuntuAudienceLabelGetV30Response> {
    const response = await this.openApiV30YuntuAudienceLabelGetGetWithHttpInfo(yuntuBrandId, serviceProviderId, labelId);
    return response.data;
  }

  async openApiV30YuntuAudienceLabelGetGetWithHttpInfo(yuntuBrandId: number, serviceProviderId: number, labelId: number): Promise<ApiResponse<YuntuAudienceLabelGetV30Response>> {
    if (yuntuBrandId == null) {
      throw new ApiException("Missing the required parameter 'yuntuBrandId' when calling openApiV30YuntuAudienceLabelGetGet");
    }

    if (serviceProviderId == null) {
      throw new ApiException("Missing the required parameter 'serviceProviderId' when calling openApiV30YuntuAudienceLabelGetGet");
    }

    if (labelId == null) {
      throw new ApiException("Missing the required parameter 'labelId' when calling openApiV30YuntuAudienceLabelGetGet");
    }
    return this.apiClient.requestWithHttpInfo<YuntuAudienceLabelGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/yuntu/audience_label/get/",
      queryParams: [
        { name: "yuntu_brand_id", value: yuntuBrandId },
        { name: "service_provider_id", value: serviceProviderId },
        { name: "label_id", value: labelId }
      ]
    });
  }
}


