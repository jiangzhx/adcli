// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { CustomerCenterAccountOfflineListV30Filter, CustomerCenterAccountOfflineListV30Response } from "../models";


export class CustomerCenterAccountOfflineListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30CustomerCenterAccountOfflineListGet(accountId: number, filter: CustomerCenterAccountOfflineListV30Filter): Promise<CustomerCenterAccountOfflineListV30Response> {
    const response = await this.openApiV30CustomerCenterAccountOfflineListGetWithHttpInfo(accountId, filter);
    return response.data;
  }

  async openApiV30CustomerCenterAccountOfflineListGetWithHttpInfo(accountId: number, filter: CustomerCenterAccountOfflineListV30Filter): Promise<ApiResponse<CustomerCenterAccountOfflineListV30Response>> {
    if (accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30CustomerCenterAccountOfflineListGet");
    }

    if (filter == null) {
      throw new ApiException("Missing the required parameter 'filter' when calling openApiV30CustomerCenterAccountOfflineListGet");
    }
    return this.apiClient.requestWithHttpInfo<CustomerCenterAccountOfflineListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/customer_center/account/offline_list/",
      queryParams: [
        { name: "account_id", value: accountId },
        { name: "filter", value: filter }
      ]
    });
  }
}


