// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsPromotionRaiseVersionGetV30Response } from "../models";


export class ToolsPromotionRaiseVersionGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsPromotionRaiseVersionGetGet(advertiserId: number, promotionId: number, page: number, pageSize: number): Promise<ToolsPromotionRaiseVersionGetV30Response> {
    const response = await this.openApiV30ToolsPromotionRaiseVersionGetGetWithHttpInfo(advertiserId, promotionId, page, pageSize);
    return response.data;
  }

  async openApiV30ToolsPromotionRaiseVersionGetGetWithHttpInfo(advertiserId: number, promotionId: number, page: number, pageSize: number): Promise<ApiResponse<ToolsPromotionRaiseVersionGetV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ToolsPromotionRaiseVersionGetGet");
    }

    if (promotionId == null) {
      throw new ApiException("Missing the required parameter 'promotionId' when calling openApiV30ToolsPromotionRaiseVersionGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsPromotionRaiseVersionGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/promotion_raise_version/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "promotion_id", value: promotionId },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


