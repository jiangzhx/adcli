// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { LocalProductGetByPoiidsV30LocalDeliveryScene, LocalProductGetByPoiidsV30Response } from "../models";


export class LocalProductGetByPoiidsV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalProductGetByPoiidsGet(localAccountId: number, poiIds: number[], localDeliveryScene: LocalProductGetByPoiidsV30LocalDeliveryScene): Promise<LocalProductGetByPoiidsV30Response> {
    const response = await this.openApiV30LocalProductGetByPoiidsGetWithHttpInfo(localAccountId, poiIds, localDeliveryScene);
    return response.data;
  }

  async openApiV30LocalProductGetByPoiidsGetWithHttpInfo(localAccountId: number, poiIds: number[], localDeliveryScene: LocalProductGetByPoiidsV30LocalDeliveryScene): Promise<ApiResponse<LocalProductGetByPoiidsV30Response>> {
    if (localAccountId == null) {
      throw new ApiException("Missing the required parameter 'localAccountId' when calling openApiV30LocalProductGetByPoiidsGet");
    }

    if (poiIds == null) {
      throw new ApiException("Missing the required parameter 'poiIds' when calling openApiV30LocalProductGetByPoiidsGet");
    }
    return this.apiClient.requestWithHttpInfo<LocalProductGetByPoiidsV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/product/get_by_poiids/",
      queryParams: [
        { name: "local_account_id", value: localAccountId },
        { name: "local_delivery_scene", value: localDeliveryScene },
        { name: "poi_ids", value: poiIds, collectionFormat: "csv" }
      ]
    });
  }
}


