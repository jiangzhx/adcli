// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsEventConvertOptimizedGoalGetV30AssetType, ToolsEventConvertOptimizedGoalGetV30CampaignType, ToolsEventConvertOptimizedGoalGetV30LandingType, ToolsEventConvertOptimizedGoalGetV30MarketingPurpose, ToolsEventConvertOptimizedGoalGetV30Response } from "../models";


export class ToolsEventConvertOptimizedGoalGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsEventConvertOptimizedGoalGetGet(landingType: ToolsEventConvertOptimizedGoalGetV30LandingType, marketingPurpose: ToolsEventConvertOptimizedGoalGetV30MarketingPurpose, assetType: ToolsEventConvertOptimizedGoalGetV30AssetType, advertiserId: number, siteId: number, miniProgramId: string, assetId: number, campaignType: ToolsEventConvertOptimizedGoalGetV30CampaignType, microAppInstanceId: number): Promise<ToolsEventConvertOptimizedGoalGetV30Response> {
    const response = await this.openApiV30ToolsEventConvertOptimizedGoalGetGetWithHttpInfo(landingType, marketingPurpose, assetType, advertiserId, siteId, miniProgramId, assetId, campaignType, microAppInstanceId);
    return response.data;
  }

  async openApiV30ToolsEventConvertOptimizedGoalGetGetWithHttpInfo(landingType: ToolsEventConvertOptimizedGoalGetV30LandingType, marketingPurpose: ToolsEventConvertOptimizedGoalGetV30MarketingPurpose, assetType: ToolsEventConvertOptimizedGoalGetV30AssetType, advertiserId: number, siteId: number, miniProgramId: string, assetId: number, campaignType: ToolsEventConvertOptimizedGoalGetV30CampaignType, microAppInstanceId: number): Promise<ApiResponse<ToolsEventConvertOptimizedGoalGetV30Response>> {
    if (landingType == null) {
      throw new ApiException("Missing the required parameter 'landingType' when calling openApiV30ToolsEventConvertOptimizedGoalGetGet");
    }

    if (marketingPurpose == null) {
      throw new ApiException("Missing the required parameter 'marketingPurpose' when calling openApiV30ToolsEventConvertOptimizedGoalGetGet");
    }

    if (assetType == null) {
      throw new ApiException("Missing the required parameter 'assetType' when calling openApiV30ToolsEventConvertOptimizedGoalGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsEventConvertOptimizedGoalGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/event_convert/optimized_goal/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "site_id", value: siteId },
        { name: "mini_program_id", value: miniProgramId },
        { name: "asset_id", value: assetId },
        { name: "landing_type", value: landingType },
        { name: "marketing_purpose", value: marketingPurpose },
        { name: "asset_type", value: assetType },
        { name: "campaign_type", value: campaignType },
        { name: "micro_app_instance_id", value: microAppInstanceId }
      ]
    });
  }
}


