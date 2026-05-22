// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsEbpVideoAttributesListV30AccountType, ToolsEbpVideoAttributesListV30Filtering, ToolsEbpVideoAttributesListV30Response } from "../models";


export interface OpenApiV30ToolsEbpVideoAttributesListGetRequest {
  accountId: number;
  accountType?: ToolsEbpVideoAttributesListV30AccountType;
  filtering?: ToolsEbpVideoAttributesListV30Filtering;
  returnLowqualitySuggestions?: boolean;
  pageSize?: number;
  page?: number;
}

export class ToolsEbpVideoAttributesListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsEbpVideoAttributesListGet(request: OpenApiV30ToolsEbpVideoAttributesListGetRequest): Promise<ToolsEbpVideoAttributesListV30Response> {
    const response = await this.openApiV30ToolsEbpVideoAttributesListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsEbpVideoAttributesListGetWithHttpInfo(request: OpenApiV30ToolsEbpVideoAttributesListGetRequest): Promise<ApiResponse<ToolsEbpVideoAttributesListV30Response>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30ToolsEbpVideoAttributesListGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsEbpVideoAttributesListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/ebp/video_attributes/list/",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "account_type", value: request.accountType },
        { name: "filtering", value: request.filtering },
        { name: "return_lowquality_suggestions", value: request.returnLowqualitySuggestions },
        { name: "page_size", value: request.pageSize },
        { name: "page", value: request.page }
      ]
    });
  }
}


