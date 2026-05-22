// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsUnionFlowPackageGetV2Filtering, ToolsUnionFlowPackageGetV2Response } from "../models";


export class ToolsUnionFlowPackageGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsUnionFlowPackageGetGet(advertiserId: number, filtering: ToolsUnionFlowPackageGetV2Filtering, page: number, pageSize: number): Promise<ToolsUnionFlowPackageGetV2Response> {
    const response = await this.openApi2ToolsUnionFlowPackageGetGetWithHttpInfo(advertiserId, filtering, page, pageSize);
    return response.data;
  }

  async openApi2ToolsUnionFlowPackageGetGetWithHttpInfo(advertiserId: number, filtering: ToolsUnionFlowPackageGetV2Filtering, page: number, pageSize: number): Promise<ApiResponse<ToolsUnionFlowPackageGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsUnionFlowPackageGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/union/flow_package/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "filtering", value: filtering },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


