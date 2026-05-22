// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CustomerCenterAdvertiserTransferableListV2Response, CustomerCenterAdvertiserTransferableListV2TransferAccountType } from "../models";


export interface OpenApi2CustomerCenterAdvertiserTransferableListGetRequest {
  advertiserId: number;
  transferAccountType?: CustomerCenterAdvertiserTransferableListV2TransferAccountType;
  page?: number;
  pageSize?: number;
}

export class CustomerCenterAdvertiserTransferableListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2CustomerCenterAdvertiserTransferableListGet(request: OpenApi2CustomerCenterAdvertiserTransferableListGetRequest): Promise<CustomerCenterAdvertiserTransferableListV2Response> {
    const response = await this.openApi2CustomerCenterAdvertiserTransferableListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2CustomerCenterAdvertiserTransferableListGetWithHttpInfo(request: OpenApi2CustomerCenterAdvertiserTransferableListGetRequest): Promise<ApiResponse<CustomerCenterAdvertiserTransferableListV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2CustomerCenterAdvertiserTransferableListGet");
    }
    return this.apiClient.requestWithHttpInfo<CustomerCenterAdvertiserTransferableListV2Response>({
      method: "GET",
      path: "/open_api/2/customer_center/advertiser/transferable/list/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "transfer_account_type", value: request.transferAccountType },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


