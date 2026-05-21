// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { LocalConsultAwameListGetV30DeliveryGoal, LocalConsultAwameListGetV30Filtering, LocalConsultAwameListGetV30Response } from "../models";


export class LocalConsultAwameListGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalConsultAwameListGetGet(localAccountId: number, deliveryGoal: LocalConsultAwameListGetV30DeliveryGoal, poiIds: number[], productIds: number[], filtering: LocalConsultAwameListGetV30Filtering, page: number, pageSize: number): Promise<LocalConsultAwameListGetV30Response> {
    const response = await this.openApiV30LocalConsultAwameListGetGetWithHttpInfo(localAccountId, deliveryGoal, poiIds, productIds, filtering, page, pageSize);
    return response.data;
  }

  async openApiV30LocalConsultAwameListGetGetWithHttpInfo(localAccountId: number, deliveryGoal: LocalConsultAwameListGetV30DeliveryGoal, poiIds: number[], productIds: number[], filtering: LocalConsultAwameListGetV30Filtering, page: number, pageSize: number): Promise<ApiResponse<LocalConsultAwameListGetV30Response>> {
    if (localAccountId == null) {
      throw new ApiException("Missing the required parameter 'localAccountId' when calling openApiV30LocalConsultAwameListGetGet");
    }

    if (deliveryGoal == null) {
      throw new ApiException("Missing the required parameter 'deliveryGoal' when calling openApiV30LocalConsultAwameListGetGet");
    }
    return this.apiClient.requestWithHttpInfo<LocalConsultAwameListGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/consult_awame_list/get/",
      queryParams: [
        { name: "local_account_id", value: localAccountId },
        { name: "delivery_goal", value: deliveryGoal },
        { name: "filtering", value: filtering },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "poi_ids", value: poiIds, collectionFormat: "csv" },
        { name: "product_ids", value: productIds, collectionFormat: "csv" }
      ]
    });
  }
}


