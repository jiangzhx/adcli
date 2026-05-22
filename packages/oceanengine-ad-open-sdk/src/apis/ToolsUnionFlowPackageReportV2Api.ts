// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsUnionFlowPackageReportV2Filter, ToolsUnionFlowPackageReportV2OrderType, ToolsUnionFlowPackageReportV2Response } from "../models";


export class ToolsUnionFlowPackageReportV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsUnionFlowPackageReportGet(advertiserId: number, filter: ToolsUnionFlowPackageReportV2Filter, orderField: string, orderType: ToolsUnionFlowPackageReportV2OrderType, page: number, pageSize: number): Promise<ToolsUnionFlowPackageReportV2Response> {
    const response = await this.openApi2ToolsUnionFlowPackageReportGetWithHttpInfo(advertiserId, filter, orderField, orderType, page, pageSize);
    return response.data;
  }

  async openApi2ToolsUnionFlowPackageReportGetWithHttpInfo(advertiserId: number, filter: ToolsUnionFlowPackageReportV2Filter, orderField: string, orderType: ToolsUnionFlowPackageReportV2OrderType, page: number, pageSize: number): Promise<ApiResponse<ToolsUnionFlowPackageReportV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsUnionFlowPackageReportV2Response>({
      method: "GET",
      path: "/open_api/2/tools/union/flow_package/report/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "filter", value: filter },
        { name: "order_field", value: orderField },
        { name: "order_type", value: orderType },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


