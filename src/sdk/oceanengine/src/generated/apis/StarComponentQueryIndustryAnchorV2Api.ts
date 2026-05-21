// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { StarComponentQueryIndustryAnchorV2Response } from "../models";


export class StarComponentQueryIndustryAnchorV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarComponentQueryIndustryAnchorGet(starId: number, anchorStatus: number, anchorType: number, page: number, limit: number): Promise<StarComponentQueryIndustryAnchorV2Response> {
    const response = await this.openApi2StarComponentQueryIndustryAnchorGetWithHttpInfo(starId, anchorStatus, anchorType, page, limit);
    return response.data;
  }

  async openApi2StarComponentQueryIndustryAnchorGetWithHttpInfo(starId: number, anchorStatus: number, anchorType: number, page: number, limit: number): Promise<ApiResponse<StarComponentQueryIndustryAnchorV2Response>> {
    if (starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarComponentQueryIndustryAnchorGet");
    }
    return this.apiClient.requestWithHttpInfo<StarComponentQueryIndustryAnchorV2Response>({
      method: "GET",
      path: "/open_api/2/star/component/query_industry_anchor/",
      queryParams: [
        { name: "star_id", value: starId },
        { name: "anchor_status", value: anchorStatus },
        { name: "anchor_type", value: anchorType },
        { name: "page", value: page },
        { name: "limit", value: limit }
      ]
    });
  }
}


