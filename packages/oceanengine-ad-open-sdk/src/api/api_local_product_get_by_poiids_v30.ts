// Generated from oceanengine/ad_open_sdk_go api/api_local_product_get_by_poiids_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { LocalProductGetByPoiidsV30LocalDeliveryScene, LocalProductGetByPoiidsV30Response } from "../models/index";


export interface LocalProductGetByPoiidsV30ApiOpenApiV30LocalProductGetByPoiidsGetRequest {
  localAccountId: number | string;
  poiIds: number | string[];
  localDeliveryScene?: LocalProductGetByPoiidsV30LocalDeliveryScene;
}

export class LocalProductGetByPoiidsV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalProductGetByPoiidsGet(request: LocalProductGetByPoiidsV30ApiOpenApiV30LocalProductGetByPoiidsGetRequest): Promise<LocalProductGetByPoiidsV30Response> {
    const response = await this.openApiV30LocalProductGetByPoiidsGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalProductGetByPoiidsGetWithHttpInfo(request: LocalProductGetByPoiidsV30ApiOpenApiV30LocalProductGetByPoiidsGetRequest): Promise<ApiResponse<LocalProductGetByPoiidsV30Response>> {
    if (request.localAccountId == null) {
      throw new ApiException("Missing the required parameter 'localAccountId' when calling openApiV30LocalProductGetByPoiidsGet");
    }

    if (request.poiIds == null) {
      throw new ApiException("Missing the required parameter 'poiIds' when calling openApiV30LocalProductGetByPoiidsGet");
    }
    return this.apiClient.requestWithHttpInfo<LocalProductGetByPoiidsV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/product/get_by_poiids/",
      queryParams: [
        { name: "local_account_id", value: request.localAccountId },
        { name: "poi_ids", value: request.poiIds },
        { name: "local_delivery_scene", value: request.localDeliveryScene }
      ]
    });
  }
}


