// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsAdvertiserDiagnosisSuggestionGetV30Filtering, ToolsAdvertiserDiagnosisSuggestionGetV30Response } from "../models";


export class ToolsAdvertiserDiagnosisSuggestionGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsAdvertiserDiagnosisSuggestionGetGet(advertiserId: number, filtering: ToolsAdvertiserDiagnosisSuggestionGetV30Filtering): Promise<ToolsAdvertiserDiagnosisSuggestionGetV30Response> {
    const response = await this.openApiV30ToolsAdvertiserDiagnosisSuggestionGetGetWithHttpInfo(advertiserId, filtering);
    return response.data;
  }

  async openApiV30ToolsAdvertiserDiagnosisSuggestionGetGetWithHttpInfo(advertiserId: number, filtering: ToolsAdvertiserDiagnosisSuggestionGetV30Filtering): Promise<ApiResponse<ToolsAdvertiserDiagnosisSuggestionGetV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ToolsAdvertiserDiagnosisSuggestionGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsAdvertiserDiagnosisSuggestionGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/advertiser_diagnosis/suggestion/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "filtering", value: filtering }
      ]
    });
  }
}


