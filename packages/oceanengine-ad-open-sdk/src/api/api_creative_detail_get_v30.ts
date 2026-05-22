// Generated from oceanengine/ad_open_sdk_go api/api_creative_detail_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { CreativeDetailGetV30Response } from "../models/index";


export interface CreativeDetailGetV30ApiOpenApiV30CreativeDetailGetGetRequest {
  advertiserId: number | string;
  adId: number | string;
}

export class CreativeDetailGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30CreativeDetailGetGet(request: CreativeDetailGetV30ApiOpenApiV30CreativeDetailGetGetRequest): Promise<CreativeDetailGetV30Response> {
    const response = await this.openApiV30CreativeDetailGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30CreativeDetailGetGetWithHttpInfo(request: CreativeDetailGetV30ApiOpenApiV30CreativeDetailGetGetRequest): Promise<ApiResponse<CreativeDetailGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.adId == null) {
      throw new ApiException("adId is required and must be specified");
    }

    if (request.adId != null && Number(request.adId) < 1) {
      throw new ApiException("adId must be greater than 1");
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


