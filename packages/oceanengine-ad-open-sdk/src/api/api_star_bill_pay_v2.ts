// Generated from oceanengine/ad_open_sdk_go api/api_star_bill_pay_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarBillPayV2Request, StarBillPayV2Response } from "../models/index";


export interface StarBillPayV2ApiOpenApi2StarBillPayPostRequest {
  starBillPayV2Request?: StarBillPayV2Request;
}

export class StarBillPayV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarBillPayPost(request: StarBillPayV2ApiOpenApi2StarBillPayPostRequest): Promise<StarBillPayV2Response> {
    const response = await this.openApi2StarBillPayPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarBillPayPostWithHttpInfo(request: StarBillPayV2ApiOpenApi2StarBillPayPostRequest): Promise<ApiResponse<StarBillPayV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarBillPayV2Response>({
      method: "POST",
      path: "/open_api/2/star/bill/pay/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.starBillPayV2Request
    });
  }
}


