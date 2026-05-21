// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsAdvertiserDiagnosisSuggestionAcceptUpdateV30Request, ToolsAdvertiserDiagnosisSuggestionAcceptUpdateV30Response } from "../models";


export class ToolsAdvertiserDiagnosisSuggestionAcceptUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsAdvertiserDiagnosisSuggestionAcceptUpdatePost(toolsAdvertiserDiagnosisSuggestionAcceptUpdateV30Request: ToolsAdvertiserDiagnosisSuggestionAcceptUpdateV30Request): Promise<ToolsAdvertiserDiagnosisSuggestionAcceptUpdateV30Response> {
    const response = await this.openApiV30ToolsAdvertiserDiagnosisSuggestionAcceptUpdatePostWithHttpInfo(toolsAdvertiserDiagnosisSuggestionAcceptUpdateV30Request);
    return response.data;
  }

  async openApiV30ToolsAdvertiserDiagnosisSuggestionAcceptUpdatePostWithHttpInfo(toolsAdvertiserDiagnosisSuggestionAcceptUpdateV30Request: ToolsAdvertiserDiagnosisSuggestionAcceptUpdateV30Request): Promise<ApiResponse<ToolsAdvertiserDiagnosisSuggestionAcceptUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsAdvertiserDiagnosisSuggestionAcceptUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/advertiser_diagnosis/suggestion/accept/update/",
      queryParams: [

      ],
      body: toolsAdvertiserDiagnosisSuggestionAcceptUpdateV30Request
    });
  }
}


