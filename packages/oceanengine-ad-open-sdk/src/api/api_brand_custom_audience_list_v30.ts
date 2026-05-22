// Generated from oceanengine/ad_open_sdk_go api/api_brand_custom_audience_list_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { BrandCustomAudienceListV30Response } from "../models/index";


export interface BrandCustomAudienceListV30ApiOpenApiV30BrandCustomAudienceListGetRequest {
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

  async openApiV30BrandCustomAudienceListGet(request: BrandCustomAudienceListV30ApiOpenApiV30BrandCustomAudienceListGetRequest): Promise<BrandCustomAudienceListV30Response> {
    const response = await this.openApiV30BrandCustomAudienceListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BrandCustomAudienceListGetWithHttpInfo(request: BrandCustomAudienceListV30ApiOpenApiV30BrandCustomAudienceListGetRequest): Promise<ApiResponse<BrandCustomAudienceListV30Response>> {
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


