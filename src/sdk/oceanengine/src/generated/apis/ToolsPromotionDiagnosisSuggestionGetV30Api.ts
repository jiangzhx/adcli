// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsPromotionDiagnosisSuggestionGetV30Response, ToolsPromotionDiagnosisSuggestionGetV30Scenes } from "../models";


export class ToolsPromotionDiagnosisSuggestionGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsPromotionDiagnosisSuggestionGetGet(advertiserId: number, promotionIds: number[], scenes: ToolsPromotionDiagnosisSuggestionGetV30Scenes[]): Promise<ToolsPromotionDiagnosisSuggestionGetV30Response> {
    const response = await this.openApiV30ToolsPromotionDiagnosisSuggestionGetGetWithHttpInfo(advertiserId, promotionIds, scenes);
    return response.data;
  }

  async openApiV30ToolsPromotionDiagnosisSuggestionGetGetWithHttpInfo(advertiserId: number, promotionIds: number[], scenes: ToolsPromotionDiagnosisSuggestionGetV30Scenes[]): Promise<ApiResponse<ToolsPromotionDiagnosisSuggestionGetV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ToolsPromotionDiagnosisSuggestionGetGet");
    }

    if (promotionIds == null) {
      throw new ApiException("Missing the required parameter 'promotionIds' when calling openApiV30ToolsPromotionDiagnosisSuggestionGetGet");
    }

    if (scenes == null) {
      throw new ApiException("Missing the required parameter 'scenes' when calling openApiV30ToolsPromotionDiagnosisSuggestionGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsPromotionDiagnosisSuggestionGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/promotion_diagnosis/suggestion/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "promotion_ids", value: promotionIds, collectionFormat: "csv" },
        { name: "scenes", value: scenes, collectionFormat: "csv" }
      ]
    });
  }
}


