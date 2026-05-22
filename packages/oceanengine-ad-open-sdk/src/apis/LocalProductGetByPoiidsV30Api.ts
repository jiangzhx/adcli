// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LocalProductGetByPoiidsV30LocalDeliveryScene, LocalProductGetByPoiidsV30Response } from "../models";


export interface OpenApiV30LocalProductGetByPoiidsGetRequest {
  localAccountId: number;
  poiIds: number[];
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

  async openApiV30LocalProductGetByPoiidsGet(request: OpenApiV30LocalProductGetByPoiidsGetRequest): Promise<LocalProductGetByPoiidsV30Response> {
    const response = await this.openApiV30LocalProductGetByPoiidsGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalProductGetByPoiidsGetWithHttpInfo(request: OpenApiV30LocalProductGetByPoiidsGetRequest): Promise<ApiResponse<LocalProductGetByPoiidsV30Response>> {
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
        { name: "poi_ids", value: request.poiIds, collectionFormat: "csv" },
        { name: "local_delivery_scene", value: request.localDeliveryScene }
      ]
    });
  }
}


