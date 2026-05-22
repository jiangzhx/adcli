// Generated from oceanengine/ad_open_sdk_go api/api_promotion_newcustomer_type_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { PromotionNewcustomerTypeGetV30Response } from "../models/index";


export interface PromotionNewcustomerTypeGetV30ApiOpenApiV30PromotionNewcustomerTypeGetGetRequest {
  advertiserId?: number | string;
}

export class PromotionNewcustomerTypeGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30PromotionNewcustomerTypeGetGet(request: PromotionNewcustomerTypeGetV30ApiOpenApiV30PromotionNewcustomerTypeGetGetRequest): Promise<PromotionNewcustomerTypeGetV30Response> {
    const response = await this.openApiV30PromotionNewcustomerTypeGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30PromotionNewcustomerTypeGetGetWithHttpInfo(request: PromotionNewcustomerTypeGetV30ApiOpenApiV30PromotionNewcustomerTypeGetGetRequest): Promise<ApiResponse<PromotionNewcustomerTypeGetV30Response>> {

    return this.apiClient.requestWithHttpInfo<PromotionNewcustomerTypeGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/promotion_newcustomer_type/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId }
      ]
    });
  }
}


