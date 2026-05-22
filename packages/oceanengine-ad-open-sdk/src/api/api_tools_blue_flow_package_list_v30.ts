// Generated from oceanengine/ad_open_sdk_go api/api_tools_blue_flow_package_list_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsBlueFlowPackageListV30Filtering, ToolsBlueFlowPackageListV30Response } from "../models/index";


export interface ToolsBlueFlowPackageListV30ApiOpenApiV30ToolsBlueFlowPackageListGetRequest {
  advertiserId: number | string;
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

  async openApiV30ToolsBlueFlowPackageListGet(request: ToolsBlueFlowPackageListV30ApiOpenApiV30ToolsBlueFlowPackageListGetRequest): Promise<ToolsBlueFlowPackageListV30Response> {
    const response = await this.openApiV30ToolsBlueFlowPackageListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsBlueFlowPackageListGetWithHttpInfo(request: ToolsBlueFlowPackageListV30ApiOpenApiV30ToolsBlueFlowPackageListGetRequest): Promise<ApiResponse<ToolsBlueFlowPackageListV30Response>> {
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


