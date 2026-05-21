// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { QueryBookingBusinessEntityIdGetV2Response } from "../models";


export class QueryBookingBusinessEntityIdGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2QueryBookingBusinessEntityIdGetGet(agentId: number, orderIds: number[]): Promise<QueryBookingBusinessEntityIdGetV2Response> {
    const response = await this.openApi2QueryBookingBusinessEntityIdGetGetWithHttpInfo(agentId, orderIds);
    return response.data;
  }

  async openApi2QueryBookingBusinessEntityIdGetGetWithHttpInfo(agentId: number, orderIds: number[]): Promise<ApiResponse<QueryBookingBusinessEntityIdGetV2Response>> {
    if (agentId == null) {
      throw new ApiException("Missing the required parameter 'agentId' when calling openApi2QueryBookingBusinessEntityIdGetGet");
    }

    if (orderIds == null) {
      throw new ApiException("Missing the required parameter 'orderIds' when calling openApi2QueryBookingBusinessEntityIdGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QueryBookingBusinessEntityIdGetV2Response>({
      method: "GET",
      path: "/open_api/2/query/booking/business_entity_id/get/",
      queryParams: [
        { name: "agent_id", value: agentId },
        { name: "order_ids", value: orderIds, collectionFormat: "csv" }
      ]
    });
  }
}


