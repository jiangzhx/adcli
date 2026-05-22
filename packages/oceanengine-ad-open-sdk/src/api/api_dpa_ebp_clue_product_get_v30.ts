// Generated from oceanengine/ad_open_sdk_go api/api_dpa_ebp_clue_product_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { DpaEbpClueProductGetV30AccountType, DpaEbpClueProductGetV30Response } from "../models/index";


export interface DpaEbpClueProductGetV30ApiOpenApiV30DpaEbpClueProductGetGetRequest {
  accountId: number | string;
  accountType: DpaEbpClueProductGetV30AccountType;
  productIds: number | string[];
}

export class DpaEbpClueProductGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30DpaEbpClueProductGetGet(request: DpaEbpClueProductGetV30ApiOpenApiV30DpaEbpClueProductGetGetRequest): Promise<DpaEbpClueProductGetV30Response> {
    const response = await this.openApiV30DpaEbpClueProductGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30DpaEbpClueProductGetGetWithHttpInfo(request: DpaEbpClueProductGetV30ApiOpenApiV30DpaEbpClueProductGetGetRequest): Promise<ApiResponse<DpaEbpClueProductGetV30Response>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30DpaEbpClueProductGetGet");
    }

    if (request.accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30DpaEbpClueProductGetGet");
    }

    if (request.productIds == null) {
      throw new ApiException("Missing the required parameter 'productIds' when calling openApiV30DpaEbpClueProductGetGet");
    }
    return this.apiClient.requestWithHttpInfo<DpaEbpClueProductGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/dpa/ebp/clue_product/get/",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "account_type", value: request.accountType },
        { name: "product_ids", value: request.productIds, collectionFormat: "csv" }
      ]
    });
  }
}


