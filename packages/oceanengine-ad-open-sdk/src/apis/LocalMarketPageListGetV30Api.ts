// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LocalMarketPageListGetV30DeliveryGoal, LocalMarketPageListGetV30Response } from "../models";


export interface OpenApiV30LocalMarketPageListGetGetRequest {
  localAccountId: number | string;
  deliveryGoal: LocalMarketPageListGetV30DeliveryGoal;
  poiIds?: number | string[];
  productIds?: number | string[];
  page?: number;
  pageSize?: number;
}

export class LocalMarketPageListGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalMarketPageListGetGet(request: OpenApiV30LocalMarketPageListGetGetRequest): Promise<LocalMarketPageListGetV30Response> {
    const response = await this.openApiV30LocalMarketPageListGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalMarketPageListGetGetWithHttpInfo(request: OpenApiV30LocalMarketPageListGetGetRequest): Promise<ApiResponse<LocalMarketPageListGetV30Response>> {
    if (request.localAccountId == null) {
      throw new ApiException("Missing the required parameter 'localAccountId' when calling openApiV30LocalMarketPageListGetGet");
    }

    if (request.deliveryGoal == null) {
      throw new ApiException("Missing the required parameter 'deliveryGoal' when calling openApiV30LocalMarketPageListGetGet");
    }
    return this.apiClient.requestWithHttpInfo<LocalMarketPageListGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/market_page_list/get/",
      queryParams: [
        { name: "local_account_id", value: request.localAccountId },
        { name: "delivery_goal", value: request.deliveryGoal },
        { name: "poi_ids", value: request.poiIds, collectionFormat: "csv" },
        { name: "product_ids", value: request.productIds, collectionFormat: "csv" },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


