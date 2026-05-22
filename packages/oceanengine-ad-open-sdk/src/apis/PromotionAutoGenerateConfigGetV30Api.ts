// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { PromotionAutoGenerateConfigGetV30Response } from "../models";


export interface OpenApiV30PromotionAutoGenerateConfigGetGetRequest {
  advertiserId: number;
  configId: number;
}

export class PromotionAutoGenerateConfigGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30PromotionAutoGenerateConfigGetGet(request: OpenApiV30PromotionAutoGenerateConfigGetGetRequest): Promise<PromotionAutoGenerateConfigGetV30Response> {
    const response = await this.openApiV30PromotionAutoGenerateConfigGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30PromotionAutoGenerateConfigGetGetWithHttpInfo(request: OpenApiV30PromotionAutoGenerateConfigGetGetRequest): Promise<ApiResponse<PromotionAutoGenerateConfigGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30PromotionAutoGenerateConfigGetGet");
    }

    if (request.configId == null) {
      throw new ApiException("Missing the required parameter 'configId' when calling openApiV30PromotionAutoGenerateConfigGetGet");
    }
    return this.apiClient.requestWithHttpInfo<PromotionAutoGenerateConfigGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/promotion/auto_generate_config/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "config_id", value: request.configId }
      ]
    });
  }
}


