// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AicMaterialGetV30AccountType, AicMaterialGetV30Filtering, AicMaterialGetV30OrderField, AicMaterialGetV30OrderType, AicMaterialGetV30Response } from "../models";


export interface OpenApiV30AicMaterialGetGetRequest {
  accountId: number;
  accountType: AicMaterialGetV30AccountType;
  filtering?: AicMaterialGetV30Filtering;
  page?: number;
  pageSize?: number;
  orderField?: AicMaterialGetV30OrderField;
  orderType?: AicMaterialGetV30OrderType;
}

export class AicMaterialGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30AicMaterialGetGet(request: OpenApiV30AicMaterialGetGetRequest): Promise<AicMaterialGetV30Response> {
    const response = await this.openApiV30AicMaterialGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30AicMaterialGetGetWithHttpInfo(request: OpenApiV30AicMaterialGetGetRequest): Promise<ApiResponse<AicMaterialGetV30Response>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30AicMaterialGetGet");
    }

    if (request.accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30AicMaterialGetGet");
    }
    return this.apiClient.requestWithHttpInfo<AicMaterialGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/aic/material/get/",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "account_type", value: request.accountType },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "order_field", value: request.orderField },
        { name: "order_type", value: request.orderType }
      ]
    });
  }
}


