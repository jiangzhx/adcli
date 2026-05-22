// Generated from oceanengine/ad_open_sdk_go api/api_brand_ad_update_delivery_info_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { BrandAdUpdateDeliveryInfoV30Request, BrandAdUpdateDeliveryInfoV30Response } from "../models/index";


export interface BrandAdUpdateDeliveryInfoV30ApiOpenApiV30BrandAdUpdateDeliveryInfoPostRequest {
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

  async openApiV30BrandAdUpdateDeliveryInfoPost(request: BrandAdUpdateDeliveryInfoV30ApiOpenApiV30BrandAdUpdateDeliveryInfoPostRequest): Promise<BrandAdUpdateDeliveryInfoV30Response> {
    const response = await this.openApiV30BrandAdUpdateDeliveryInfoPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BrandAdUpdateDeliveryInfoPostWithHttpInfo(request: BrandAdUpdateDeliveryInfoV30ApiOpenApiV30BrandAdUpdateDeliveryInfoPostRequest): Promise<ApiResponse<BrandAdUpdateDeliveryInfoV30Response>> {

    return this.apiClient.requestWithHttpInfo<BrandAdUpdateDeliveryInfoV30Response>({
      method: "POST",
      path: "/open_api/v3.0/brand/ad/update_delivery_info/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.brandAdUpdateDeliveryInfoV30Request
    });
  }
}


