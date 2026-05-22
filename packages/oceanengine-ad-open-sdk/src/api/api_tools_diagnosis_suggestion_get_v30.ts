// Generated from oceanengine/ad_open_sdk_go api/api_tools_diagnosis_suggestion_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsDiagnosisSuggestionGetV30Response } from "../models/index";


export interface ToolsDiagnosisSuggestionGetV30ApiOpenApiV30ToolsDiagnosisSuggestionGetGetRequest {
  promotionIds: number | string[];
  advertiserId: number | string;
}

export class ToolsDiagnosisSuggestionGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsDiagnosisSuggestionGetGet(request: ToolsDiagnosisSuggestionGetV30ApiOpenApiV30ToolsDiagnosisSuggestionGetGetRequest): Promise<ToolsDiagnosisSuggestionGetV30Response> {
    const response = await this.openApiV30ToolsDiagnosisSuggestionGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsDiagnosisSuggestionGetGetWithHttpInfo(request: ToolsDiagnosisSuggestionGetV30ApiOpenApiV30ToolsDiagnosisSuggestionGetGetRequest): Promise<ApiResponse<ToolsDiagnosisSuggestionGetV30Response>> {
    if (request.promotionIds == null) {
      throw new ApiException("Missing the required parameter 'promotionIds' when calling openApiV30ToolsDiagnosisSuggestionGetGet");
    }

    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ToolsDiagnosisSuggestionGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsDiagnosisSuggestionGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/diagnosis/suggestion/get/",
      queryParams: [
        { name: "promotion_ids", value: request.promotionIds },
        { name: "advertiser_id", value: request.advertiserId }
      ]
    });
  }
}


