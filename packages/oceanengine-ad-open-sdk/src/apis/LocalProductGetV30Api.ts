// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LocalProductGetV30Filtering, LocalProductGetV30LocalDeliveryScene, LocalProductGetV30Response } from "../models";


export class LocalProductGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalProductGetGet(localAccountId: number, localDeliveryScene: LocalProductGetV30LocalDeliveryScene, filtering: LocalProductGetV30Filtering, page: number, pageSize: number): Promise<LocalProductGetV30Response> {
    const response = await this.openApiV30LocalProductGetGetWithHttpInfo(localAccountId, localDeliveryScene, filtering, page, pageSize);
    return response.data;
  }

  async openApiV30LocalProductGetGetWithHttpInfo(localAccountId: number, localDeliveryScene: LocalProductGetV30LocalDeliveryScene, filtering: LocalProductGetV30Filtering, page: number, pageSize: number): Promise<ApiResponse<LocalProductGetV30Response>> {
    if (localAccountId == null) {
      throw new ApiException("Missing the required parameter 'localAccountId' when calling openApiV30LocalProductGetGet");
    }

    if (localDeliveryScene == null) {
      throw new ApiException("Missing the required parameter 'localDeliveryScene' when calling openApiV30LocalProductGetGet");
    }
    return this.apiClient.requestWithHttpInfo<LocalProductGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/product/get/",
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


