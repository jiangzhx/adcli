// Generated from oceanengine/ad_open_sdk_go api/api_tools_star_task_settlement_config_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsStarTaskSettlementConfigV2Response, ToolsStarTaskSettlementConfigV2StarTaskExternalAction } from "../models/index";


export interface ToolsStarTaskSettlementConfigV2ApiOpenApi2ToolsStarTaskSettlementConfigGetRequest {
  advertiserId: number | string;
  firstIndustryId: number | string;
  secondIndustryId: number | string;
  starMaterialFirstType: number;
  starMaterialSecondType: number;
  starTaskExternalAction: ToolsStarTaskSettlementConfigV2StarTaskExternalAction;
}

export class ToolsStarTaskSettlementConfigV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsStarTaskSettlementConfigGet(request: ToolsStarTaskSettlementConfigV2ApiOpenApi2ToolsStarTaskSettlementConfigGetRequest): Promise<ToolsStarTaskSettlementConfigV2Response> {
    const response = await this.openApi2ToolsStarTaskSettlementConfigGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsStarTaskSettlementConfigGetWithHttpInfo(request: ToolsStarTaskSettlementConfigV2ApiOpenApi2ToolsStarTaskSettlementConfigGetRequest): Promise<ApiResponse<ToolsStarTaskSettlementConfigV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsStarTaskSettlementConfigGet");
    }

    if (request.firstIndustryId == null) {
      throw new ApiException("Missing the required parameter 'firstIndustryId' when calling openApi2ToolsStarTaskSettlementConfigGet");
    }

    if (request.secondIndustryId == null) {
      throw new ApiException("Missing the required parameter 'secondIndustryId' when calling openApi2ToolsStarTaskSettlementConfigGet");
    }

    if (request.starMaterialFirstType == null) {
      throw new ApiException("Missing the required parameter 'starMaterialFirstType' when calling openApi2ToolsStarTaskSettlementConfigGet");
    }

    if (request.starMaterialSecondType == null) {
      throw new ApiException("Missing the required parameter 'starMaterialSecondType' when calling openApi2ToolsStarTaskSettlementConfigGet");
    }

    if (request.starTaskExternalAction == null) {
      throw new ApiException("Missing the required parameter 'starTaskExternalAction' when calling openApi2ToolsStarTaskSettlementConfigGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsStarTaskSettlementConfigV2Response>({
      method: "GET",
      path: "/open_api/2/tools/star_task/settlement_config/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "first_industry_id", value: request.firstIndustryId },
        { name: "second_industry_id", value: request.secondIndustryId },
        { name: "star_material_first_type", value: request.starMaterialFirstType },
        { name: "star_material_second_type", value: request.starMaterialSecondType },
        { name: "star_task_external_action", value: request.starTaskExternalAction }
      ]
    });
  }
}


