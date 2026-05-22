// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CustomerCenterAdvertiserListV2AccountSource, CustomerCenterAdvertiserListV2Filtering, CustomerCenterAdvertiserListV2Response } from "../models";


export interface OpenApi2CustomerCenterAdvertiserListGetRequest {
  accountSource?: CustomerCenterAdvertiserListV2AccountSource;
  ccAccountId?: number | string;
  filtering?: CustomerCenterAdvertiserListV2Filtering;
  page?: number;
  pageSize?: number;
}

export class CustomerCenterAdvertiserListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2CustomerCenterAdvertiserListGet(request: OpenApi2CustomerCenterAdvertiserListGetRequest): Promise<CustomerCenterAdvertiserListV2Response> {
    const response = await this.openApi2CustomerCenterAdvertiserListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2CustomerCenterAdvertiserListGetWithHttpInfo(request: OpenApi2CustomerCenterAdvertiserListGetRequest): Promise<ApiResponse<CustomerCenterAdvertiserListV2Response>> {

    return this.apiClient.requestWithHttpInfo<CustomerCenterAdvertiserListV2Response>({
      method: "GET",
      path: "/open_api/2/customer_center/advertiser/list/",
      queryParams: [
        { name: "account_source", value: request.accountSource },
        { name: "cc_account_id", value: request.ccAccountId },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


