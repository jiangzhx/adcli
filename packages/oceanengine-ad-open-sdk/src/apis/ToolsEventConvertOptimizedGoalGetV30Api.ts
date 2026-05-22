// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsEventConvertOptimizedGoalGetV30AssetType, ToolsEventConvertOptimizedGoalGetV30CampaignType, ToolsEventConvertOptimizedGoalGetV30LandingType, ToolsEventConvertOptimizedGoalGetV30MarketingPurpose, ToolsEventConvertOptimizedGoalGetV30Response } from "../models";


export interface OpenApiV30ToolsEventConvertOptimizedGoalGetGetRequest {
  landingType: ToolsEventConvertOptimizedGoalGetV30LandingType;
  marketingPurpose: ToolsEventConvertOptimizedGoalGetV30MarketingPurpose;
  assetType: ToolsEventConvertOptimizedGoalGetV30AssetType;
  advertiserId?: number;
  siteId?: number;
  miniProgramId?: string;
  assetId?: number;
  campaignType?: ToolsEventConvertOptimizedGoalGetV30CampaignType;
  microAppInstanceId?: number;
}

export class ToolsEventConvertOptimizedGoalGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsEventConvertOptimizedGoalGetGet(request: OpenApiV30ToolsEventConvertOptimizedGoalGetGetRequest): Promise<ToolsEventConvertOptimizedGoalGetV30Response> {
    const response = await this.openApiV30ToolsEventConvertOptimizedGoalGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsEventConvertOptimizedGoalGetGetWithHttpInfo(request: OpenApiV30ToolsEventConvertOptimizedGoalGetGetRequest): Promise<ApiResponse<ToolsEventConvertOptimizedGoalGetV30Response>> {
    if (request.landingType == null) {
      throw new ApiException("Missing the required parameter 'landingType' when calling openApiV30ToolsEventConvertOptimizedGoalGetGet");
    }

    if (request.marketingPurpose == null) {
      throw new ApiException("Missing the required parameter 'marketingPurpose' when calling openApiV30ToolsEventConvertOptimizedGoalGetGet");
    }

    if (request.assetType == null) {
      throw new ApiException("Missing the required parameter 'assetType' when calling openApiV30ToolsEventConvertOptimizedGoalGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsEventConvertOptimizedGoalGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/event_convert/optimized_goal/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "site_id", value: request.siteId },
        { name: "mini_program_id", value: request.miniProgramId },
        { name: "asset_id", value: request.assetId },
        { name: "landing_type", value: request.landingType },
        { name: "marketing_purpose", value: request.marketingPurpose },
        { name: "asset_type", value: request.assetType },
        { name: "campaign_type", value: request.campaignType },
        { name: "micro_app_instance_id", value: request.microAppInstanceId }
      ]
    });
  }
}


