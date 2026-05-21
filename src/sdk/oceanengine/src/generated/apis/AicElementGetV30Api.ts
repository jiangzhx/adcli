// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { AicElementGetV30AccountType, AicElementGetV30Filtering, AicElementGetV30OrderField, AicElementGetV30OrderType, AicElementGetV30Response } from "../models";


export class AicElementGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30AicElementGetGet(accountId: number, accountType: AicElementGetV30AccountType, filtering: AicElementGetV30Filtering, page: number, pageSize: number, orderField: AicElementGetV30OrderField, orderType: AicElementGetV30OrderType): Promise<AicElementGetV30Response> {
    const response = await this.openApiV30AicElementGetGetWithHttpInfo(accountId, accountType, filtering, page, pageSize, orderField, orderType);
    return response.data;
  }

  async openApiV30AicElementGetGetWithHttpInfo(accountId: number, accountType: AicElementGetV30AccountType, filtering: AicElementGetV30Filtering, page: number, pageSize: number, orderField: AicElementGetV30OrderField, orderType: AicElementGetV30OrderType): Promise<ApiResponse<AicElementGetV30Response>> {
    if (accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30AicElementGetGet");
    }

    if (accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30AicElementGetGet");
    }
    return this.apiClient.requestWithHttpInfo<AicElementGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/aic/element/get/",
      queryParams: [
        { name: "account_id", value: accountId },
        { name: "account_type", value: accountType },
        { name: "filtering", value: filtering },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "order_field", value: orderField },
        { name: "order_type", value: orderType }
      ]
    });
  }
}


