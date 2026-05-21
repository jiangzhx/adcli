// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { BrandContractGetV30Response } from "../models";


export class BrandContractGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandContractGetGet(advertiserId: number): Promise<BrandContractGetV30Response> {
    const response = await this.openApiV30BrandContractGetGetWithHttpInfo(advertiserId);
    return response.data;
  }

  async openApiV30BrandContractGetGetWithHttpInfo(advertiserId: number): Promise<ApiResponse<BrandContractGetV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30BrandContractGetGet");
    }
    return this.apiClient.requestWithHttpInfo<BrandContractGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/brand/contract/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId }
      ]
    });
  }
}


