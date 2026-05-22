// Generated from oceanengine/ad_open_sdk_go api/api_brand_aweme_list_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { BrandAwemeListV30Response } from "../models/index";


export interface BrandAwemeListV30ApiOpenApiV30BrandAwemeListGetRequest {
  advertiserId: number | string;
}

export class BrandAwemeListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandAwemeListGet(request: BrandAwemeListV30ApiOpenApiV30BrandAwemeListGetRequest): Promise<BrandAwemeListV30Response> {
    const response = await this.openApiV30BrandAwemeListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BrandAwemeListGetWithHttpInfo(request: BrandAwemeListV30ApiOpenApiV30BrandAwemeListGetRequest): Promise<ApiResponse<BrandAwemeListV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30BrandAwemeListGet");
    }
    return this.apiClient.requestWithHttpInfo<BrandAwemeListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/brand/aweme_list/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId }
      ]
    });
  }
}


