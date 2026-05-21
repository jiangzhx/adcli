// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { CustomerCenterAdvertiserListV2AccountSource, CustomerCenterAdvertiserListV2Filtering, CustomerCenterAdvertiserListV2Response } from "../models";


export class CustomerCenterAdvertiserListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2CustomerCenterAdvertiserListGet(accountSource: CustomerCenterAdvertiserListV2AccountSource, ccAccountId: number, filtering: CustomerCenterAdvertiserListV2Filtering, page: number, pageSize: number): Promise<CustomerCenterAdvertiserListV2Response> {
    const response = await this.openApi2CustomerCenterAdvertiserListGetWithHttpInfo(accountSource, ccAccountId, filtering, page, pageSize);
    return response.data;
  }

  async openApi2CustomerCenterAdvertiserListGetWithHttpInfo(accountSource: CustomerCenterAdvertiserListV2AccountSource, ccAccountId: number, filtering: CustomerCenterAdvertiserListV2Filtering, page: number, pageSize: number): Promise<ApiResponse<CustomerCenterAdvertiserListV2Response>> {

    return this.apiClient.requestWithHttpInfo<CustomerCenterAdvertiserListV2Response>({
      method: "GET",
      path: "/open_api/2/customer_center/advertiser/list/",
      queryParams: [
        { name: "account_source", value: accountSource },
        { name: "cc_account_id", value: ccAccountId },
        { name: "filtering", value: filtering },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


