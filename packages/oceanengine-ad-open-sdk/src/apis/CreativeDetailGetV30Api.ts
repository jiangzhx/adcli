// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CreativeDetailGetV30Response } from "../models";


export interface OpenApiV30CreativeDetailGetGetRequest {
  advertiserId: number;
  adId: number;
}

export class CreativeDetailGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30CreativeDetailGetGet(request: OpenApiV30CreativeDetailGetGetRequest): Promise<CreativeDetailGetV30Response> {
    const response = await this.openApiV30CreativeDetailGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30CreativeDetailGetGetWithHttpInfo(request: OpenApiV30CreativeDetailGetGetRequest): Promise<ApiResponse<CreativeDetailGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30CreativeDetailGetGet");
    }

    if (request.adId == null) {
      throw new ApiException("Missing the required parameter 'adId' when calling openApiV30CreativeDetailGetGet");
    }
    return this.apiClient.requestWithHttpInfo<CreativeDetailGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/creative/detail/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "ad_id", value: request.adId }
      ]
    });
  }
}


