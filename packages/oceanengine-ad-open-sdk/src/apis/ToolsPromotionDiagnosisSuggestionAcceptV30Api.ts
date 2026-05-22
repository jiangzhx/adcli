// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsPromotionDiagnosisSuggestionAcceptV30Request, ToolsPromotionDiagnosisSuggestionAcceptV30Response } from "../models";


export interface OpenApiV30ToolsPromotionDiagnosisSuggestionAcceptPostRequest {
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

  async openApiV30ToolsPromotionDiagnosisSuggestionAcceptPost(request: OpenApiV30ToolsPromotionDiagnosisSuggestionAcceptPostRequest): Promise<ToolsPromotionDiagnosisSuggestionAcceptV30Response> {
    const response = await this.openApiV30ToolsPromotionDiagnosisSuggestionAcceptPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsPromotionDiagnosisSuggestionAcceptPostWithHttpInfo(request: OpenApiV30ToolsPromotionDiagnosisSuggestionAcceptPostRequest): Promise<ApiResponse<ToolsPromotionDiagnosisSuggestionAcceptV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsPromotionDiagnosisSuggestionAcceptV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/promotion_diagnosis/suggestion/accept/",
      queryParams: [

      ],
      body: request.toolsPromotionDiagnosisSuggestionAcceptV30Request
    });
  }
}


