// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsStarTaskSettlementConfigV2Response, ToolsStarTaskSettlementConfigV2StarTaskExternalAction } from "../models";


export class ToolsStarTaskSettlementConfigV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsStarTaskSettlementConfigGet(advertiserId: number, firstIndustryId: number, secondIndustryId: number, starMaterialFirstType: number, starMaterialSecondType: number, starTaskExternalAction: ToolsStarTaskSettlementConfigV2StarTaskExternalAction): Promise<ToolsStarTaskSettlementConfigV2Response> {
    const response = await this.openApi2ToolsStarTaskSettlementConfigGetWithHttpInfo(advertiserId, firstIndustryId, secondIndustryId, starMaterialFirstType, starMaterialSecondType, starTaskExternalAction);
    return response.data;
  }

  async openApi2ToolsStarTaskSettlementConfigGetWithHttpInfo(advertiserId: number, firstIndustryId: number, secondIndustryId: number, starMaterialFirstType: number, starMaterialSecondType: number, starTaskExternalAction: ToolsStarTaskSettlementConfigV2StarTaskExternalAction): Promise<ApiResponse<ToolsStarTaskSettlementConfigV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsStarTaskSettlementConfigGet");
    }

    if (firstIndustryId == null) {
      throw new ApiException("Missing the required parameter 'firstIndustryId' when calling openApi2ToolsStarTaskSettlementConfigGet");
    }

    if (secondIndustryId == null) {
      throw new ApiException("Missing the required parameter 'secondIndustryId' when calling openApi2ToolsStarTaskSettlementConfigGet");
    }

    if (starMaterialFirstType == null) {
      throw new ApiException("Missing the required parameter 'starMaterialFirstType' when calling openApi2ToolsStarTaskSettlementConfigGet");
    }

    if (starMaterialSecondType == null) {
      throw new ApiException("Missing the required parameter 'starMaterialSecondType' when calling openApi2ToolsStarTaskSettlementConfigGet");
    }

    if (starTaskExternalAction == null) {
      throw new ApiException("Missing the required parameter 'starTaskExternalAction' when calling openApi2ToolsStarTaskSettlementConfigGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsStarTaskSettlementConfigV2Response>({
      method: "GET",
      path: "/open_api/2/tools/star_task/settlement_config/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "first_industry_id", value: firstIndustryId },
        { name: "second_industry_id", value: secondIndustryId },
        { name: "star_material_first_type", value: starMaterialFirstType },
        { name: "star_material_second_type", value: starMaterialSecondType },
        { name: "star_task_external_action", value: starTaskExternalAction }
      ]
    });
  }
}


