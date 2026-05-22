// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsDiagnosisSuggestionGetV30Response } from "../models";


export interface OpenApiV30ToolsDiagnosisSuggestionGetGetRequest {
  promotionIds: number[];
  advertiserId: number;
}

export class ToolsDiagnosisSuggestionGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsDiagnosisSuggestionGetGet(request: OpenApiV30ToolsDiagnosisSuggestionGetGetRequest): Promise<ToolsDiagnosisSuggestionGetV30Response> {
    const response = await this.openApiV30ToolsDiagnosisSuggestionGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsDiagnosisSuggestionGetGetWithHttpInfo(request: OpenApiV30ToolsDiagnosisSuggestionGetGetRequest): Promise<ApiResponse<ToolsDiagnosisSuggestionGetV30Response>> {
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
        { name: "promotion_ids", value: request.promotionIds, collectionFormat: "csv" },
        { name: "advertiser_id", value: request.advertiserId }
      ]
    });
  }
}


