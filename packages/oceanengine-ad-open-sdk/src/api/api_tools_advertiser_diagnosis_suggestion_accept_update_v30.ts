// Generated from oceanengine/ad_open_sdk_go api/api_tools_advertiser_diagnosis_suggestion_accept_update_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsAdvertiserDiagnosisSuggestionAcceptUpdateV30Request, ToolsAdvertiserDiagnosisSuggestionAcceptUpdateV30Response } from "../models/index";


export interface ToolsAdvertiserDiagnosisSuggestionAcceptUpdateV30ApiOpenApiV30ToolsAdvertiserDiagnosisSuggestionAcceptUpdatePostRequest {
  toolsAdvertiserDiagnosisSuggestionAcceptUpdateV30Request?: ToolsAdvertiserDiagnosisSuggestionAcceptUpdateV30Request;
}

export class ToolsAdvertiserDiagnosisSuggestionAcceptUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsAdvertiserDiagnosisSuggestionAcceptUpdatePost(request: ToolsAdvertiserDiagnosisSuggestionAcceptUpdateV30ApiOpenApiV30ToolsAdvertiserDiagnosisSuggestionAcceptUpdatePostRequest): Promise<ToolsAdvertiserDiagnosisSuggestionAcceptUpdateV30Response> {
    const response = await this.openApiV30ToolsAdvertiserDiagnosisSuggestionAcceptUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsAdvertiserDiagnosisSuggestionAcceptUpdatePostWithHttpInfo(request: ToolsAdvertiserDiagnosisSuggestionAcceptUpdateV30ApiOpenApiV30ToolsAdvertiserDiagnosisSuggestionAcceptUpdatePostRequest): Promise<ApiResponse<ToolsAdvertiserDiagnosisSuggestionAcceptUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsAdvertiserDiagnosisSuggestionAcceptUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/advertiser_diagnosis/suggestion/accept/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsAdvertiserDiagnosisSuggestionAcceptUpdateV30Request
    });
  }
}


