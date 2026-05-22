// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DpaEbpClueProductGetV30AccountType, DpaEbpClueProductGetV30Response } from "../models";


export interface OpenApiV30DpaEbpClueProductGetGetRequest {
  accountId: number;
  accountType: DpaEbpClueProductGetV30AccountType;
  productIds: number[];
}

export class DpaEbpClueProductGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30DpaEbpClueProductGetGet(request: OpenApiV30DpaEbpClueProductGetGetRequest): Promise<DpaEbpClueProductGetV30Response> {
    const response = await this.openApiV30DpaEbpClueProductGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30DpaEbpClueProductGetGetWithHttpInfo(request: OpenApiV30DpaEbpClueProductGetGetRequest): Promise<ApiResponse<DpaEbpClueProductGetV30Response>> {
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


