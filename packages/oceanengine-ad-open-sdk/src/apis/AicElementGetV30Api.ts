// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AicElementGetV30AccountType, AicElementGetV30Filtering, AicElementGetV30OrderField, AicElementGetV30OrderType, AicElementGetV30Response } from "../models";


export interface OpenApiV30AicElementGetGetRequest {
  accountId: number | string;
  accountType: AicElementGetV30AccountType;
  filtering?: AicElementGetV30Filtering;
  page?: number;
  pageSize?: number;
  orderField?: AicElementGetV30OrderField;
  orderType?: AicElementGetV30OrderType;
}

export class AicElementGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30AicElementGetGet(request: OpenApiV30AicElementGetGetRequest): Promise<AicElementGetV30Response> {
    const response = await this.openApiV30AicElementGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30AicElementGetGetWithHttpInfo(request: OpenApiV30AicElementGetGetRequest): Promise<ApiResponse<AicElementGetV30Response>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30AicElementGetGet");
    }

    if (request.accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30AicElementGetGet");
    }
    return this.apiClient.requestWithHttpInfo<AicElementGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/aic/element/get/",
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


