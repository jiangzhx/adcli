// Generated from oceanengine/ad_open_sdk_go api/api_local_tool_pack_list_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { LocalToolPackListGetV30DeliveryGoal, LocalToolPackListGetV30IntelligentSelectionMode, LocalToolPackListGetV30Response } from "../models/index";


export interface LocalToolPackListGetV30ApiOpenApiV30LocalToolPackListGetGetRequest {
  localAccountId: number | string;
  deliveryGoal: LocalToolPackListGetV30DeliveryGoal;
  intelligentSelectionMode: LocalToolPackListGetV30IntelligentSelectionMode;
  poiIds?: number | string[];
  productIds?: number | string[];
  page?: number;
  pageSize?: number;
}

export class LocalToolPackListGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalToolPackListGetGet(request: LocalToolPackListGetV30ApiOpenApiV30LocalToolPackListGetGetRequest): Promise<LocalToolPackListGetV30Response> {
    const response = await this.openApiV30LocalToolPackListGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalToolPackListGetGetWithHttpInfo(request: LocalToolPackListGetV30ApiOpenApiV30LocalToolPackListGetGetRequest): Promise<ApiResponse<LocalToolPackListGetV30Response>> {
    if (request.localAccountId == null) {
      throw new ApiException("Missing the required parameter 'localAccountId' when calling openApiV30LocalToolPackListGetGet");
    }

    if (request.deliveryGoal == null) {
      throw new ApiException("Missing the required parameter 'deliveryGoal' when calling openApiV30LocalToolPackListGetGet");
    }

    if (request.intelligentSelectionMode == null) {
      throw new ApiException("Missing the required parameter 'intelligentSelectionMode' when calling openApiV30LocalToolPackListGetGet");
    }
    return this.apiClient.requestWithHttpInfo<LocalToolPackListGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/tool_pack_list/get/",
      queryParams: [
        { name: "local_account_id", value: request.localAccountId },
        { name: "delivery_goal", value: request.deliveryGoal },
        { name: "poi_ids", value: request.poiIds, collectionFormat: "csv" },
        { name: "product_ids", value: request.productIds, collectionFormat: "csv" },
        { name: "intelligent_selection_mode", value: request.intelligentSelectionMode },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


