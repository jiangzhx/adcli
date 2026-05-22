// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsBlueFlowPackageListV30Filtering, ToolsBlueFlowPackageListV30Response } from "../models";


export class ToolsBlueFlowPackageListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsBlueFlowPackageListGet(advertiserId: number, filtering: ToolsBlueFlowPackageListV30Filtering): Promise<ToolsBlueFlowPackageListV30Response> {
    const response = await this.openApiV30ToolsBlueFlowPackageListGetWithHttpInfo(advertiserId, filtering);
    return response.data;
  }

  async openApiV30ToolsBlueFlowPackageListGetWithHttpInfo(advertiserId: number, filtering: ToolsBlueFlowPackageListV30Filtering): Promise<ApiResponse<ToolsBlueFlowPackageListV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ToolsBlueFlowPackageListGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsBlueFlowPackageListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/blue_flow_package/list/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "filtering", value: filtering }
      ]
    });
  }
}


