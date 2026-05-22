// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsUnionFlowPackageGetV2Filtering, ToolsUnionFlowPackageGetV2Response } from "../models";


export interface OpenApi2ToolsUnionFlowPackageGetGetRequest {
  advertiserId?: number | string;
  filtering?: ToolsUnionFlowPackageGetV2Filtering;
  page?: number;
  pageSize?: number;
}

export class ToolsUnionFlowPackageGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsUnionFlowPackageGetGet(request: OpenApi2ToolsUnionFlowPackageGetGetRequest): Promise<ToolsUnionFlowPackageGetV2Response> {
    const response = await this.openApi2ToolsUnionFlowPackageGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsUnionFlowPackageGetGetWithHttpInfo(request: OpenApi2ToolsUnionFlowPackageGetGetRequest): Promise<ApiResponse<ToolsUnionFlowPackageGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsUnionFlowPackageGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/union/flow_package/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


