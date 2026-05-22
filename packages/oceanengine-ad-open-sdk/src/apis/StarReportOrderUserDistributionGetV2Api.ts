// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarReportOrderUserDistributionGetV2FanType, StarReportOrderUserDistributionGetV2InteractiveType, StarReportOrderUserDistributionGetV2Response } from "../models";


export interface OpenApi2StarReportOrderUserDistributionGetGetRequest {
  fanType?: StarReportOrderUserDistributionGetV2FanType;
  interactiveType?: StarReportOrderUserDistributionGetV2InteractiveType;
  orderId?: number;
  starId?: number;
}

export class StarReportOrderUserDistributionGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarReportOrderUserDistributionGetGet(request: OpenApi2StarReportOrderUserDistributionGetGetRequest): Promise<StarReportOrderUserDistributionGetV2Response> {
    const response = await this.openApi2StarReportOrderUserDistributionGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarReportOrderUserDistributionGetGetWithHttpInfo(request: OpenApi2StarReportOrderUserDistributionGetGetRequest): Promise<ApiResponse<StarReportOrderUserDistributionGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarReportOrderUserDistributionGetV2Response>({
      method: "GET",
      path: "/open_api/2/star/report/order_user_distribution/get/",
      queryParams: [
        { name: "fan_type", value: request.fanType },
        { name: "interactive_type", value: request.interactiveType },
        { name: "order_id", value: request.orderId },
        { name: "star_id", value: request.starId }
      ]
    });
  }
}


