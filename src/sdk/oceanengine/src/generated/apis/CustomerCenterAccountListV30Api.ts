// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { CustomerCenterAccountListV30Filter, CustomerCenterAccountListV30Response } from "../models";


export class CustomerCenterAccountListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30CustomerCenterAccountListGet(accountId: number, filter: CustomerCenterAccountListV30Filter, page: number, pageSize: number): Promise<CustomerCenterAccountListV30Response> {
    const response = await this.openApiV30CustomerCenterAccountListGetWithHttpInfo(accountId, filter, page, pageSize);
    return response.data;
  }

  async openApiV30CustomerCenterAccountListGetWithHttpInfo(accountId: number, filter: CustomerCenterAccountListV30Filter, page: number, pageSize: number): Promise<ApiResponse<CustomerCenterAccountListV30Response>> {
    if (accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30CustomerCenterAccountListGet");
    }

    if (filter == null) {
      throw new ApiException("Missing the required parameter 'filter' when calling openApiV30CustomerCenterAccountListGet");
    }
    return this.apiClient.requestWithHttpInfo<CustomerCenterAccountListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/customer_center/account/list/",
      queryParams: [
        { name: "account_id", value: accountId },
        { name: "filter", value: filter },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


