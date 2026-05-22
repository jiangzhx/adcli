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
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.firstIndustryId == null) {
      throw new ApiException("firstIndustryId is required and must be specified");
    }

    if (request.secondIndustryId == null) {
      throw new ApiException("secondIndustryId is required and must be specified");
    }

    if (request.starMaterialFirstType == null) {
      throw new ApiException("starMaterialFirstType is required and must be specified");
    }

    if (request.starMaterialSecondType == null) {
      throw new ApiException("starMaterialSecondType is required and must be specified");
    }

    if (request.starTaskExternalAction == null) {
      throw new ApiException("starTaskExternalAction is required and must be specified");
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


