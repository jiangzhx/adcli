// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsUnionFlowPackageReportV2Filter, ToolsUnionFlowPackageReportV2OrderType, ToolsUnionFlowPackageReportV2Response } from "../models";


export interface OpenApi2ToolsUnionFlowPackageReportGetRequest {
  advertiserId?: number;
  filter?: ToolsUnionFlowPackageReportV2Filter;
  orderField?: string;
  orderType?: ToolsUnionFlowPackageReportV2OrderType;
  page?: number;
  pageSize?: number;
}

export class ToolsUnionFlowPackageReportV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsUnionFlowPackageReportGet(request: OpenApi2ToolsUnionFlowPackageReportGetRequest): Promise<ToolsUnionFlowPackageReportV2Response> {
    const response = await this.openApi2ToolsUnionFlowPackageReportGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsUnionFlowPackageReportGetWithHttpInfo(request: OpenApi2ToolsUnionFlowPackageReportGetRequest): Promise<ApiResponse<ToolsUnionFlowPackageReportV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsUnionFlowPackageReportV2Response>({
      method: "GET",
      path: "/open_api/2/tools/union/flow_package/report/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "filter", value: request.filter },
        { name: "order_field", value: request.orderField },
        { name: "order_type", value: request.orderType },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


