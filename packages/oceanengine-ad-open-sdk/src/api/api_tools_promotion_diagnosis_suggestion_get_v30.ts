// Generated from oceanengine/ad_open_sdk_go api/api_tools_promotion_diagnosis_suggestion_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsPromotionDiagnosisSuggestionGetV30Response, ToolsPromotionDiagnosisSuggestionGetV30Scenes } from "../models/index";


export interface ToolsPromotionDiagnosisSuggestionGetV30ApiOpenApiV30ToolsPromotionDiagnosisSuggestionGetGetRequest {
  advertiserId: number | string;
  promotionIds: (number | string)[];
  scenes: ToolsPromotionDiagnosisSuggestionGetV30Scenes[];
}

export class ToolsPromotionDiagnosisSuggestionGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsPromotionDiagnosisSuggestionGetGet(request: ToolsPromotionDiagnosisSuggestionGetV30ApiOpenApiV30ToolsPromotionDiagnosisSuggestionGetGetRequest): Promise<ToolsPromotionDiagnosisSuggestionGetV30Response> {
    const response = await this.openApiV30ToolsPromotionDiagnosisSuggestionGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsPromotionDiagnosisSuggestionGetGetWithHttpInfo(request: ToolsPromotionDiagnosisSuggestionGetV30ApiOpenApiV30ToolsPromotionDiagnosisSuggestionGetGetRequest): Promise<ApiResponse<ToolsPromotionDiagnosisSuggestionGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.promotionIds == null) {
      throw new ApiException("promotionIds is required and must be specified");
    }

    if (request.promotionIds != null && request.promotionIds.length < 1) {
      throw new ApiException("promotionIds must have at least 1 elements");
    }

    if (request.promotionIds != null && request.promotionIds.length > 100) {
      throw new ApiException("promotionIds must have less than 100 elements");
    }

    if (request.scenes == null) {
      throw new ApiException("scenes is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<ToolsPromotionDiagnosisSuggestionGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/promotion_diagnosis/suggestion/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "promotion_ids", value: request.promotionIds },
        { name: "scenes", value: request.scenes }
      ]
    });
  }
}


