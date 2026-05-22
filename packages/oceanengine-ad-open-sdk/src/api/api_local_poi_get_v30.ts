// Generated from oceanengine/ad_open_sdk_go api/api_local_poi_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { LocalPoiGetV30Filtering, LocalPoiGetV30LocalDeliveryScene, LocalPoiGetV30Response } from "../models/index";


export interface LocalPoiGetV30ApiOpenApiV30LocalPoiGetGetRequest {
  localAccountId: number | string;
  localDeliveryScene: LocalPoiGetV30LocalDeliveryScene;
  filtering?: LocalPoiGetV30Filtering;
  page?: number;
  pageSize?: number;
}

export class LocalPoiGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalPoiGetGet(request: LocalPoiGetV30ApiOpenApiV30LocalPoiGetGetRequest): Promise<LocalPoiGetV30Response> {
    const response = await this.openApiV30LocalPoiGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalPoiGetGetWithHttpInfo(request: LocalPoiGetV30ApiOpenApiV30LocalPoiGetGetRequest): Promise<ApiResponse<LocalPoiGetV30Response>> {
    if (request.localAccountId == null) {
      throw new ApiException("localAccountId is required and must be specified");
    }

    if (request.localDeliveryScene == null) {
      throw new ApiException("localDeliveryScene is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<LocalPoiGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/poi/get/",
      queryParams: [
        { name: "local_account_id", value: request.localAccountId },
        { name: "local_delivery_scene", value: request.localDeliveryScene },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


