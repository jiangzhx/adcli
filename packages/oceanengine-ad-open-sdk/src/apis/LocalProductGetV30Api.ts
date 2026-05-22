// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LocalProductGetV30Filtering, LocalProductGetV30LocalDeliveryScene, LocalProductGetV30Response } from "../models";


export interface OpenApiV30LocalProductGetGetRequest {
  localAccountId: number | string;
  localDeliveryScene: LocalProductGetV30LocalDeliveryScene;
  filtering?: LocalProductGetV30Filtering;
  page?: number;
  pageSize?: number;
}

export class LocalProductGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalProductGetGet(request: OpenApiV30LocalProductGetGetRequest): Promise<LocalProductGetV30Response> {
    const response = await this.openApiV30LocalProductGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalProductGetGetWithHttpInfo(request: OpenApiV30LocalProductGetGetRequest): Promise<ApiResponse<LocalProductGetV30Response>> {
    if (request.localAccountId == null) {
      throw new ApiException("Missing the required parameter 'localAccountId' when calling openApiV30LocalProductGetGet");
    }

    if (request.localDeliveryScene == null) {
      throw new ApiException("Missing the required parameter 'localDeliveryScene' when calling openApiV30LocalProductGetGet");
    }
    return this.apiClient.requestWithHttpInfo<LocalProductGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/product/get/",
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


