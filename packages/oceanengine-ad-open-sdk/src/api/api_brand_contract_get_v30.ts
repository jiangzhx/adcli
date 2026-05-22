// Generated from oceanengine/ad_open_sdk_go api/api_brand_contract_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { BrandContractGetV30Response } from "../models/index";


export interface BrandContractGetV30ApiOpenApiV30BrandContractGetGetRequest {
  advertiserId: number | string;
}

export class BrandContractGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandContractGetGet(request: BrandContractGetV30ApiOpenApiV30BrandContractGetGetRequest): Promise<BrandContractGetV30Response> {
    const response = await this.openApiV30BrandContractGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BrandContractGetGetWithHttpInfo(request: BrandContractGetV30ApiOpenApiV30BrandContractGetGetRequest): Promise<ApiResponse<BrandContractGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<BrandContractGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/brand/contract/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId }
      ]
    });
  }
}


