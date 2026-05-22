// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsAdvertiserDiagnosisSuggestionGetV30Filtering, ToolsAdvertiserDiagnosisSuggestionGetV30Response } from "../models";


export interface OpenApiV30ToolsAdvertiserDiagnosisSuggestionGetGetRequest {
  advertiserId: number;
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

  async openApiV30ToolsAdvertiserDiagnosisSuggestionGetGet(request: OpenApiV30ToolsAdvertiserDiagnosisSuggestionGetGetRequest): Promise<ToolsAdvertiserDiagnosisSuggestionGetV30Response> {
    const response = await this.openApiV30ToolsAdvertiserDiagnosisSuggestionGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsAdvertiserDiagnosisSuggestionGetGetWithHttpInfo(request: OpenApiV30ToolsAdvertiserDiagnosisSuggestionGetGetRequest): Promise<ApiResponse<ToolsAdvertiserDiagnosisSuggestionGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ToolsAdvertiserDiagnosisSuggestionGetGet");
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


