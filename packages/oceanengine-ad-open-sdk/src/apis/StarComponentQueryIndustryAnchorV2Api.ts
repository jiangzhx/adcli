// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarComponentQueryIndustryAnchorV2Response } from "../models";


export interface OpenApi2StarComponentQueryIndustryAnchorGetRequest {
  starId: number | string;
  anchorStatus?: number;
  anchorType?: number;
  page?: number;
  limit?: number;
}

export class StarComponentQueryIndustryAnchorV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarComponentQueryIndustryAnchorGet(request: OpenApi2StarComponentQueryIndustryAnchorGetRequest): Promise<StarComponentQueryIndustryAnchorV2Response> {
    const response = await this.openApi2StarComponentQueryIndustryAnchorGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarComponentQueryIndustryAnchorGetWithHttpInfo(request: OpenApi2StarComponentQueryIndustryAnchorGetRequest): Promise<ApiResponse<StarComponentQueryIndustryAnchorV2Response>> {
    if (request.starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarComponentQueryIndustryAnchorGet");
    }
    return this.apiClient.requestWithHttpInfo<StarComponentQueryIndustryAnchorV2Response>({
      method: "GET",
      path: "/open_api/2/star/component/query_industry_anchor/",
      queryParams: [
        { name: "star_id", value: request.starId },
        { name: "anchor_status", value: request.anchorStatus },
        { name: "anchor_type", value: request.anchorType },
        { name: "page", value: request.page },
        { name: "limit", value: request.limit }
      ]
    });
  }
}


