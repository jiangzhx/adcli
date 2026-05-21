// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsEbpVideoAttributesListV30AccountType, ToolsEbpVideoAttributesListV30Filtering, ToolsEbpVideoAttributesListV30Response } from "../models";


export class ToolsEbpVideoAttributesListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsEbpVideoAttributesListGet(accountId: number, accountType: ToolsEbpVideoAttributesListV30AccountType, filtering: ToolsEbpVideoAttributesListV30Filtering, returnLowqualitySuggestions: boolean, pageSize: number, page: number): Promise<ToolsEbpVideoAttributesListV30Response> {
    const response = await this.openApiV30ToolsEbpVideoAttributesListGetWithHttpInfo(accountId, accountType, filtering, returnLowqualitySuggestions, pageSize, page);
    return response.data;
  }

  async openApiV30ToolsEbpVideoAttributesListGetWithHttpInfo(accountId: number, accountType: ToolsEbpVideoAttributesListV30AccountType, filtering: ToolsEbpVideoAttributesListV30Filtering, returnLowqualitySuggestions: boolean, pageSize: number, page: number): Promise<ApiResponse<ToolsEbpVideoAttributesListV30Response>> {
    if (accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30ToolsEbpVideoAttributesListGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsEbpVideoAttributesListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/ebp/video_attributes/list/",
      queryParams: [
        { name: "account_id", value: accountId },
        { name: "account_type", value: accountType },
        { name: "filtering", value: filtering },
        { name: "return_lowquality_suggestions", value: returnLowqualitySuggestions },
        { name: "page_size", value: pageSize },
        { name: "page", value: page }
      ]
    });
  }
}


