// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LocalMarketPageListGetV30DeliveryGoal, LocalMarketPageListGetV30Response } from "../models";


export class LocalMarketPageListGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalMarketPageListGetGet(localAccountId: number, deliveryGoal: LocalMarketPageListGetV30DeliveryGoal, poiIds: number[], productIds: number[], page: number, pageSize: number): Promise<LocalMarketPageListGetV30Response> {
    const response = await this.openApiV30LocalMarketPageListGetGetWithHttpInfo(localAccountId, deliveryGoal, poiIds, productIds, page, pageSize);
    return response.data;
  }

  async openApiV30LocalMarketPageListGetGetWithHttpInfo(localAccountId: number, deliveryGoal: LocalMarketPageListGetV30DeliveryGoal, poiIds: number[], productIds: number[], page: number, pageSize: number): Promise<ApiResponse<LocalMarketPageListGetV30Response>> {
    if (localAccountId == null) {
      throw new ApiException("Missing the required parameter 'localAccountId' when calling openApiV30LocalMarketPageListGetGet");
    }

    if (deliveryGoal == null) {
      throw new ApiException("Missing the required parameter 'deliveryGoal' when calling openApiV30LocalMarketPageListGetGet");
    }
    return this.apiClient.requestWithHttpInfo<LocalMarketPageListGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/market_page_list/get/",
      queryParams: [
        { name: "local_account_id", value: localAccountId },
        { name: "delivery_goal", value: deliveryGoal },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "poi_ids", value: poiIds, collectionFormat: "csv" },
        { name: "product_ids", value: productIds, collectionFormat: "csv" }
      ]
    });
  }
}


