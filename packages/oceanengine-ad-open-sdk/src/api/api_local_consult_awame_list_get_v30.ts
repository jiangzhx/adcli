// Generated from oceanengine/ad_open_sdk_go api/api_local_consult_awame_list_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { LocalConsultAwameListGetV30DeliveryGoal, LocalConsultAwameListGetV30Filtering, LocalConsultAwameListGetV30Response } from "../models/index";


export interface LocalConsultAwameListGetV30ApiOpenApiV30LocalConsultAwameListGetGetRequest {
  localAccountId: number | string;
  deliveryGoal: LocalConsultAwameListGetV30DeliveryGoal;
  poiIds?: (number | string)[];
  productIds?: (number | string)[];
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

  async openApiV30LocalConsultAwameListGetGet(request: LocalConsultAwameListGetV30ApiOpenApiV30LocalConsultAwameListGetGetRequest): Promise<LocalConsultAwameListGetV30Response> {
    const response = await this.openApiV30LocalConsultAwameListGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalConsultAwameListGetGetWithHttpInfo(request: LocalConsultAwameListGetV30ApiOpenApiV30LocalConsultAwameListGetGetRequest): Promise<ApiResponse<LocalConsultAwameListGetV30Response>> {
    if (request.localAccountId == null) {
      throw new ApiException("localAccountId is required and must be specified");
    }

    if (request.deliveryGoal == null) {
      throw new ApiException("deliveryGoal is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<LocalConsultAwameListGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/consult_awame_list/get/",
      queryParams: [
        { name: "local_account_id", value: request.localAccountId },
        { name: "delivery_goal", value: request.deliveryGoal },
        { name: "poi_ids", value: request.poiIds },
        { name: "product_ids", value: request.productIds },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


