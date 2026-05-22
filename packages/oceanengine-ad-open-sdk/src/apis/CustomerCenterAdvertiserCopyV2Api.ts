// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CustomerCenterAdvertiserCopyV2Request, CustomerCenterAdvertiserCopyV2Response } from "../models";


export interface OpenApi2CustomerCenterAdvertiserCopyPostRequest {
  customerCenterAdvertiserCopyV2Request?: CustomerCenterAdvertiserCopyV2Request;
}

export class CustomerCenterAdvertiserCopyV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2CustomerCenterAdvertiserCopyPost(request: OpenApi2CustomerCenterAdvertiserCopyPostRequest): Promise<CustomerCenterAdvertiserCopyV2Response> {
    const response = await this.openApi2CustomerCenterAdvertiserCopyPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2CustomerCenterAdvertiserCopyPostWithHttpInfo(request: OpenApi2CustomerCenterAdvertiserCopyPostRequest): Promise<ApiResponse<CustomerCenterAdvertiserCopyV2Response>> {

    return this.apiClient.requestWithHttpInfo<CustomerCenterAdvertiserCopyV2Response>({
      method: "POST",
      path: "/open_api/2/customer_center/advertiser/copy/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.customerCenterAdvertiserCopyV2Request
    });
  }
}


