// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarBillPayV2Request, StarBillPayV2Response } from "../models";


export class StarBillPayV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarBillPayPost(request: StarBillPayV2Request): Promise<StarBillPayV2Response> {
    const response = await this.openApi2StarBillPayPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarBillPayPostWithHttpInfo(request: StarBillPayV2Request): Promise<ApiResponse<StarBillPayV2Response>> {
    return this.apiClient.requestWithHttpInfo<StarBillPayV2Response>({
      method: "POST",
      path: "/open_api/2/star/bill/pay/",
      queryParams: [

      ],
      body: request
    });
  }
}


