// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsAdvertiserDiagnosisSuggestionAcceptUpdateV30Request, ToolsAdvertiserDiagnosisSuggestionAcceptUpdateV30Response } from "../models";


export interface OpenApiV30ToolsAdvertiserDiagnosisSuggestionAcceptUpdatePostRequest {
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

  async openApiV30ToolsAdvertiserDiagnosisSuggestionAcceptUpdatePost(request: OpenApiV30ToolsAdvertiserDiagnosisSuggestionAcceptUpdatePostRequest): Promise<ToolsAdvertiserDiagnosisSuggestionAcceptUpdateV30Response> {
    const response = await this.openApiV30ToolsAdvertiserDiagnosisSuggestionAcceptUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsAdvertiserDiagnosisSuggestionAcceptUpdatePostWithHttpInfo(request: OpenApiV30ToolsAdvertiserDiagnosisSuggestionAcceptUpdatePostRequest): Promise<ApiResponse<ToolsAdvertiserDiagnosisSuggestionAcceptUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsAdvertiserDiagnosisSuggestionAcceptUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/advertiser_diagnosis/suggestion/accept/update/",
      queryParams: [

      ],
      body: request.toolsAdvertiserDiagnosisSuggestionAcceptUpdateV30Request
    });
  }
}


