// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BrandCustomAudienceListV30Response } from "../models";


export interface OpenApiV30BrandCustomAudienceListGetRequest {
  advertiserId: number | string;
}

export class BrandCustomAudienceListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandCustomAudienceListGet(request: OpenApiV30BrandCustomAudienceListGetRequest): Promise<BrandCustomAudienceListV30Response> {
    const response = await this.openApiV30BrandCustomAudienceListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BrandCustomAudienceListGetWithHttpInfo(request: OpenApiV30BrandCustomAudienceListGetRequest): Promise<ApiResponse<BrandCustomAudienceListV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30BrandCustomAudienceListGet");
    }
    return this.apiClient.requestWithHttpInfo<BrandCustomAudienceListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/brand/custom_audience/list/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId }
      ]
    });
  }
}


