// Generated from oceanengine/ad_open_sdk_go api/api_star_component_query_industry_anchor_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarComponentQueryIndustryAnchorV2Response } from "../models/index";


export interface StarComponentQueryIndustryAnchorV2ApiOpenApi2StarComponentQueryIndustryAnchorGetRequest {
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

  async openApi2StarComponentQueryIndustryAnchorGet(request: StarComponentQueryIndustryAnchorV2ApiOpenApi2StarComponentQueryIndustryAnchorGetRequest): Promise<StarComponentQueryIndustryAnchorV2Response> {
    const response = await this.openApi2StarComponentQueryIndustryAnchorGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarComponentQueryIndustryAnchorGetWithHttpInfo(request: StarComponentQueryIndustryAnchorV2ApiOpenApi2StarComponentQueryIndustryAnchorGetRequest): Promise<ApiResponse<StarComponentQueryIndustryAnchorV2Response>> {
    if (request.starId == null) {
      throw new ApiException("starId is required and must be specified");
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


