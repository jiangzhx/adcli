// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BrandAwemeListV30Response } from "../models";


export interface OpenApiV30BrandAwemeListGetRequest {
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

  async openApiV30BrandAwemeListGet(request: OpenApiV30BrandAwemeListGetRequest): Promise<BrandAwemeListV30Response> {
    const response = await this.openApiV30BrandAwemeListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BrandAwemeListGetWithHttpInfo(request: OpenApiV30BrandAwemeListGetRequest): Promise<ApiResponse<BrandAwemeListV30Response>> {
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


