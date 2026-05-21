// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { LocalToolPackListGetV30DeliveryGoal, LocalToolPackListGetV30IntelligentSelectionMode, LocalToolPackListGetV30Response } from "../models";


export class LocalToolPackListGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalToolPackListGetGet(localAccountId: number, deliveryGoal: LocalToolPackListGetV30DeliveryGoal, intelligentSelectionMode: LocalToolPackListGetV30IntelligentSelectionMode, poiIds: number[], productIds: number[], page: number, pageSize: number): Promise<LocalToolPackListGetV30Response> {
    const response = await this.openApiV30LocalToolPackListGetGetWithHttpInfo(localAccountId, deliveryGoal, intelligentSelectionMode, poiIds, productIds, page, pageSize);
    return response.data;
  }

  async openApiV30LocalToolPackListGetGetWithHttpInfo(localAccountId: number, deliveryGoal: LocalToolPackListGetV30DeliveryGoal, intelligentSelectionMode: LocalToolPackListGetV30IntelligentSelectionMode, poiIds: number[], productIds: number[], page: number, pageSize: number): Promise<ApiResponse<LocalToolPackListGetV30Response>> {
    if (localAccountId == null) {
      throw new ApiException("Missing the required parameter 'localAccountId' when calling openApiV30LocalToolPackListGetGet");
    }

    if (deliveryGoal == null) {
      throw new ApiException("Missing the required parameter 'deliveryGoal' when calling openApiV30LocalToolPackListGetGet");
    }

    if (intelligentSelectionMode == null) {
      throw new ApiException("Missing the required parameter 'intelligentSelectionMode' when calling openApiV30LocalToolPackListGetGet");
    }
    return this.apiClient.requestWithHttpInfo<LocalToolPackListGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/tool_pack_list/get/",
      queryParams: [
        { name: "local_account_id", value: localAccountId },
        { name: "delivery_goal", value: deliveryGoal },
        { name: "intelligent_selection_mode", value: intelligentSelectionMode },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "poi_ids", value: poiIds, collectionFormat: "csv" },
        { name: "product_ids", value: productIds, collectionFormat: "csv" }
      ]
    });
  }
}


