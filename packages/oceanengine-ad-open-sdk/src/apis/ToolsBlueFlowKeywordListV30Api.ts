// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsBlueFlowKeywordListV30Filtering, ToolsBlueFlowKeywordListV30Response } from "../models";


export interface OpenApiV30ToolsBlueFlowKeywordListGetRequest {
  advertiserId: number;
  projectId: number;
  filtering?: ToolsBlueFlowKeywordListV30Filtering;
}

export class ToolsBlueFlowKeywordListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsBlueFlowKeywordListGet(request: OpenApiV30ToolsBlueFlowKeywordListGetRequest): Promise<ToolsBlueFlowKeywordListV30Response> {
    const response = await this.openApiV30ToolsBlueFlowKeywordListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsBlueFlowKeywordListGetWithHttpInfo(request: OpenApiV30ToolsBlueFlowKeywordListGetRequest): Promise<ApiResponse<ToolsBlueFlowKeywordListV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ToolsBlueFlowKeywordListGet");
    }

    if (request.projectId == null) {
      throw new ApiException("Missing the required parameter 'projectId' when calling openApiV30ToolsBlueFlowKeywordListGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsBlueFlowKeywordListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/blue_flow_keyword/list/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "project_id", value: request.projectId },
        { name: "filtering", value: request.filtering }
      ]
    });
  }
}


