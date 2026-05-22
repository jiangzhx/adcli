// Generated from oceanengine/ad_open_sdk_go api/api_tools_promotion_diagnosis_suggestion_accept_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsPromotionDiagnosisSuggestionAcceptV30Request, ToolsPromotionDiagnosisSuggestionAcceptV30Response } from "../models/index";


export interface ToolsPromotionDiagnosisSuggestionAcceptV30ApiOpenApiV30ToolsPromotionDiagnosisSuggestionAcceptPostRequest {
  toolsPromotionDiagnosisSuggestionAcceptV30Request?: ToolsPromotionDiagnosisSuggestionAcceptV30Request;
}

export class ToolsPromotionDiagnosisSuggestionAcceptV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsPromotionDiagnosisSuggestionAcceptPost(request: ToolsPromotionDiagnosisSuggestionAcceptV30ApiOpenApiV30ToolsPromotionDiagnosisSuggestionAcceptPostRequest): Promise<ToolsPromotionDiagnosisSuggestionAcceptV30Response> {
    const response = await this.openApiV30ToolsPromotionDiagnosisSuggestionAcceptPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsPromotionDiagnosisSuggestionAcceptPostWithHttpInfo(request: ToolsPromotionDiagnosisSuggestionAcceptV30ApiOpenApiV30ToolsPromotionDiagnosisSuggestionAcceptPostRequest): Promise<ApiResponse<ToolsPromotionDiagnosisSuggestionAcceptV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsPromotionDiagnosisSuggestionAcceptV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/promotion_diagnosis/suggestion/accept/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsPromotionDiagnosisSuggestionAcceptV30Request
    });
  }
}


