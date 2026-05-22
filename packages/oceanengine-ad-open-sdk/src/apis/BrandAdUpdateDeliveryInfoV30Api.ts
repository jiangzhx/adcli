// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BrandAdUpdateDeliveryInfoV30Request, BrandAdUpdateDeliveryInfoV30Response } from "../models";


export interface OpenApiV30BrandAdUpdateDeliveryInfoPostRequest {
  brandAdUpdateDeliveryInfoV30Request?: BrandAdUpdateDeliveryInfoV30Request;
}

export class BrandAdUpdateDeliveryInfoV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandAdUpdateDeliveryInfoPost(request: OpenApiV30BrandAdUpdateDeliveryInfoPostRequest): Promise<BrandAdUpdateDeliveryInfoV30Response> {
    const response = await this.openApiV30BrandAdUpdateDeliveryInfoPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BrandAdUpdateDeliveryInfoPostWithHttpInfo(request: OpenApiV30BrandAdUpdateDeliveryInfoPostRequest): Promise<ApiResponse<BrandAdUpdateDeliveryInfoV30Response>> {

    return this.apiClient.requestWithHttpInfo<BrandAdUpdateDeliveryInfoV30Response>({
      method: "POST",
      path: "/open_api/v3.0/brand/ad/update_delivery_info/",
      queryParams: [

      ],
      body: request.brandAdUpdateDeliveryInfoV30Request
    });
  }
}


