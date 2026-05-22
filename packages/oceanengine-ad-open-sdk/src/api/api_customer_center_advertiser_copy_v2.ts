// Generated from oceanengine/ad_open_sdk_go api/api_customer_center_advertiser_copy_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { CustomerCenterAdvertiserCopyV2Request, CustomerCenterAdvertiserCopyV2Response } from "../models/index";


export interface CustomerCenterAdvertiserCopyV2ApiOpenApi2CustomerCenterAdvertiserCopyPostRequest {
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

  async openApi2CustomerCenterAdvertiserCopyPost(request: CustomerCenterAdvertiserCopyV2ApiOpenApi2CustomerCenterAdvertiserCopyPostRequest): Promise<CustomerCenterAdvertiserCopyV2Response> {
    const response = await this.openApi2CustomerCenterAdvertiserCopyPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2CustomerCenterAdvertiserCopyPostWithHttpInfo(request: CustomerCenterAdvertiserCopyV2ApiOpenApi2CustomerCenterAdvertiserCopyPostRequest): Promise<ApiResponse<CustomerCenterAdvertiserCopyV2Response>> {

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


