// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AicMaterialGetV30AccountType, AicMaterialGetV30Filtering, AicMaterialGetV30OrderField, AicMaterialGetV30OrderType, AicMaterialGetV30Response } from "../models";


export class AicMaterialGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30AicMaterialGetGet(accountId: number, accountType: AicMaterialGetV30AccountType, filtering: AicMaterialGetV30Filtering, page: number, pageSize: number, orderField: AicMaterialGetV30OrderField, orderType: AicMaterialGetV30OrderType): Promise<AicMaterialGetV30Response> {
    const response = await this.openApiV30AicMaterialGetGetWithHttpInfo(accountId, accountType, filtering, page, pageSize, orderField, orderType);
    return response.data;
  }

  async openApiV30AicMaterialGetGetWithHttpInfo(accountId: number, accountType: AicMaterialGetV30AccountType, filtering: AicMaterialGetV30Filtering, page: number, pageSize: number, orderField: AicMaterialGetV30OrderField, orderType: AicMaterialGetV30OrderType): Promise<ApiResponse<AicMaterialGetV30Response>> {
    if (accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30AicMaterialGetGet");
    }

    if (accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30AicMaterialGetGet");
    }
    return this.apiClient.requestWithHttpInfo<AicMaterialGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/aic/material/get/",
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


