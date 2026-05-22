// Generated from oceanengine/ad_open_sdk_go api/api_customer_center_advertiser_transferable_list_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { CustomerCenterAdvertiserTransferableListV2Response, CustomerCenterAdvertiserTransferableListV2TransferAccountType } from "../models/index";


export interface CustomerCenterAdvertiserTransferableListV2ApiOpenApi2CustomerCenterAdvertiserTransferableListGetRequest {
  advertiserId: number | string;
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

  async openApi2CustomerCenterAdvertiserTransferableListGet(request: CustomerCenterAdvertiserTransferableListV2ApiOpenApi2CustomerCenterAdvertiserTransferableListGetRequest): Promise<CustomerCenterAdvertiserTransferableListV2Response> {
    const response = await this.openApi2CustomerCenterAdvertiserTransferableListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2CustomerCenterAdvertiserTransferableListGetWithHttpInfo(request: CustomerCenterAdvertiserTransferableListV2ApiOpenApi2CustomerCenterAdvertiserTransferableListGetRequest): Promise<ApiResponse<CustomerCenterAdvertiserTransferableListV2Response>> {
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


