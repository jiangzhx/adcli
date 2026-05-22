// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsBlueFlowPackageListV30Filtering, ToolsBlueFlowPackageListV30Response } from "../models";


export interface OpenApiV30ToolsBlueFlowPackageListGetRequest {
  advertiserId: number;
  filtering?: ToolsBlueFlowPackageListV30Filtering;
}

export class ToolsBlueFlowPackageListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsBlueFlowPackageListGet(request: OpenApiV30ToolsBlueFlowPackageListGetRequest): Promise<ToolsBlueFlowPackageListV30Response> {
    const response = await this.openApiV30ToolsBlueFlowPackageListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsBlueFlowPackageListGetWithHttpInfo(request: OpenApiV30ToolsBlueFlowPackageListGetRequest): Promise<ApiResponse<ToolsBlueFlowPackageListV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ToolsBlueFlowPackageListGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsBlueFlowPackageListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/blue_flow_package/list/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "filtering", value: request.filtering }
      ]
    });
  }
}


