// Generated from oceanengine/ad_open_sdk_go api/api_tools_advertiser_diagnosis_suggestion_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsAdvertiserDiagnosisSuggestionGetV30Filtering, ToolsAdvertiserDiagnosisSuggestionGetV30Response } from "../models/index";


export interface ToolsAdvertiserDiagnosisSuggestionGetV30ApiOpenApiV30ToolsAdvertiserDiagnosisSuggestionGetGetRequest {
  advertiserId: number | string;
  filtering?: ToolsAdvertiserDiagnosisSuggestionGetV30Filtering;
}

export class ToolsAdvertiserDiagnosisSuggestionGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsAdvertiserDiagnosisSuggestionGetGet(request: ToolsAdvertiserDiagnosisSuggestionGetV30ApiOpenApiV30ToolsAdvertiserDiagnosisSuggestionGetGetRequest): Promise<ToolsAdvertiserDiagnosisSuggestionGetV30Response> {
    const response = await this.openApiV30ToolsAdvertiserDiagnosisSuggestionGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsAdvertiserDiagnosisSuggestionGetGetWithHttpInfo(request: ToolsAdvertiserDiagnosisSuggestionGetV30ApiOpenApiV30ToolsAdvertiserDiagnosisSuggestionGetGetRequest): Promise<ApiResponse<ToolsAdvertiserDiagnosisSuggestionGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<ToolsAdvertiserDiagnosisSuggestionGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/advertiser_diagnosis/suggestion/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "filtering", value: request.filtering }
      ]
    });
  }
}


