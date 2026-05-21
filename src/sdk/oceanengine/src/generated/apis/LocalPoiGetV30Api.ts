// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { LocalPoiGetV30Filtering, LocalPoiGetV30LocalDeliveryScene, LocalPoiGetV30Response } from "../models";


export class LocalPoiGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalPoiGetGet(localAccountId: number, localDeliveryScene: LocalPoiGetV30LocalDeliveryScene, filtering: LocalPoiGetV30Filtering, page: number, pageSize: number): Promise<LocalPoiGetV30Response> {
    const response = await this.openApiV30LocalPoiGetGetWithHttpInfo(localAccountId, localDeliveryScene, filtering, page, pageSize);
    return response.data;
  }

  async openApiV30LocalPoiGetGetWithHttpInfo(localAccountId: number, localDeliveryScene: LocalPoiGetV30LocalDeliveryScene, filtering: LocalPoiGetV30Filtering, page: number, pageSize: number): Promise<ApiResponse<LocalPoiGetV30Response>> {
    if (localAccountId == null) {
      throw new ApiException("Missing the required parameter 'localAccountId' when calling openApiV30LocalPoiGetGet");
    }

    if (localDeliveryScene == null) {
      throw new ApiException("Missing the required parameter 'localDeliveryScene' when calling openApiV30LocalPoiGetGet");
    }
    return this.apiClient.requestWithHttpInfo<LocalPoiGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/poi/get/",
      queryParams: [
        { name: "local_account_id", value: localAccountId },
        { name: "local_delivery_scene", value: localDeliveryScene },
        { name: "filtering", value: filtering },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


