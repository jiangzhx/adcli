// Generated from oceanengine/ad_open_sdk_go api/api_customer_center_account_list_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { CustomerCenterAccountListV30Filter, CustomerCenterAccountListV30Response } from "../models/index";


export interface CustomerCenterAccountListV30ApiOpenApiV30CustomerCenterAccountListGetRequest {
  accountId: number | string;
  filter: CustomerCenterAccountListV30Filter;
  page?: number;
  pageSize?: number;
}

export class CustomerCenterAccountListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30CustomerCenterAccountListGet(request: CustomerCenterAccountListV30ApiOpenApiV30CustomerCenterAccountListGetRequest): Promise<CustomerCenterAccountListV30Response> {
    const response = await this.openApiV30CustomerCenterAccountListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30CustomerCenterAccountListGetWithHttpInfo(request: CustomerCenterAccountListV30ApiOpenApiV30CustomerCenterAccountListGetRequest): Promise<ApiResponse<CustomerCenterAccountListV30Response>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30CustomerCenterAccountListGet");
    }

    if (request.filter == null) {
      throw new ApiException("Missing the required parameter 'filter' when calling openApiV30CustomerCenterAccountListGet");
    }
    return this.apiClient.requestWithHttpInfo<CustomerCenterAccountListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/customer_center/account/list/",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "filter", value: request.filter },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


