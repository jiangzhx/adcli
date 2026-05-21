// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { BrandAwemeListV30Response } from "../models";


export class BrandAwemeListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandAwemeListGet(advertiserId: number): Promise<BrandAwemeListV30Response> {
    const response = await this.openApiV30BrandAwemeListGetWithHttpInfo(advertiserId);
    return response.data;
  }

  async openApiV30BrandAwemeListGetWithHttpInfo(advertiserId: number): Promise<ApiResponse<BrandAwemeListV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30BrandAwemeListGet");
    }
    return this.apiClient.requestWithHttpInfo<BrandAwemeListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/brand/aweme_list/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId }
      ]
    });
  }
}


