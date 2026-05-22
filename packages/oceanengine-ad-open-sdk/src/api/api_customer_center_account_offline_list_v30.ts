// Generated from oceanengine/ad_open_sdk_go api/api_customer_center_account_offline_list_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { CustomerCenterAccountOfflineListV30Filter, CustomerCenterAccountOfflineListV30Response } from "../models/index";


export interface CustomerCenterAccountOfflineListV30ApiOpenApiV30CustomerCenterAccountOfflineListGetRequest {
  accountId: number | string;
  filter: CustomerCenterAccountOfflineListV30Filter;
}

export class CustomerCenterAccountOfflineListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30CustomerCenterAccountOfflineListGet(request: CustomerCenterAccountOfflineListV30ApiOpenApiV30CustomerCenterAccountOfflineListGetRequest): Promise<CustomerCenterAccountOfflineListV30Response> {
    const response = await this.openApiV30CustomerCenterAccountOfflineListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30CustomerCenterAccountOfflineListGetWithHttpInfo(request: CustomerCenterAccountOfflineListV30ApiOpenApiV30CustomerCenterAccountOfflineListGetRequest): Promise<ApiResponse<CustomerCenterAccountOfflineListV30Response>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30CustomerCenterAccountOfflineListGet");
    }

    if (request.filter == null) {
      throw new ApiException("Missing the required parameter 'filter' when calling openApiV30CustomerCenterAccountOfflineListGet");
    }
    return this.apiClient.requestWithHttpInfo<CustomerCenterAccountOfflineListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/customer_center/account/offline_list/",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "filter", value: request.filter }
      ]
    });
  }
}


