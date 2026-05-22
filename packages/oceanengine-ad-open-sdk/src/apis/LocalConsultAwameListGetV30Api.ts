// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LocalConsultAwameListGetV30DeliveryGoal, LocalConsultAwameListGetV30Filtering, LocalConsultAwameListGetV30Response } from "../models";


export interface OpenApiV30LocalConsultAwameListGetGetRequest {
  localAccountId: number | string;
  deliveryGoal: LocalConsultAwameListGetV30DeliveryGoal;
  poiIds?: number | string[];
  productIds?: number | string[];
  filtering?: LocalConsultAwameListGetV30Filtering;
  page?: number;
  pageSize?: number;
}

export class LocalConsultAwameListGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalConsultAwameListGetGet(request: OpenApiV30LocalConsultAwameListGetGetRequest): Promise<LocalConsultAwameListGetV30Response> {
    const response = await this.openApiV30LocalConsultAwameListGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalConsultAwameListGetGetWithHttpInfo(request: OpenApiV30LocalConsultAwameListGetGetRequest): Promise<ApiResponse<LocalConsultAwameListGetV30Response>> {
    if (request.localAccountId == null) {
      throw new ApiException("Missing the required parameter 'localAccountId' when calling openApiV30LocalConsultAwameListGetGet");
    }

    if (request.deliveryGoal == null) {
      throw new ApiException("Missing the required parameter 'deliveryGoal' when calling openApiV30LocalConsultAwameListGetGet");
    }
    return this.apiClient.requestWithHttpInfo<LocalConsultAwameListGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/consult_awame_list/get/",
      queryParams: [
        { name: "local_account_id", value: request.localAccountId },
        { name: "delivery_goal", value: request.deliveryGoal },
        { name: "poi_ids", value: request.poiIds, collectionFormat: "csv" },
        { name: "product_ids", value: request.productIds, collectionFormat: "csv" },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


