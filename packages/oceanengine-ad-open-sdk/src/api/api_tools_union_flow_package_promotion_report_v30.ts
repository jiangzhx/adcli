// Generated from oceanengine/ad_open_sdk_go api/api_tools_union_flow_package_promotion_report_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsUnionFlowPackagePromotionReportV30Filter, ToolsUnionFlowPackagePromotionReportV30OrderType, ToolsUnionFlowPackagePromotionReportV30Response } from "../models/index";


export interface ToolsUnionFlowPackagePromotionReportV30ApiOpenApiV30ToolsUnionFlowPackagePromotionReportGetRequest {
  advertiserId: number | string;
  filter: ToolsUnionFlowPackagePromotionReportV30Filter;
  orderField?: string;
  orderType?: ToolsUnionFlowPackagePromotionReportV30OrderType;
  page?: number;
  pageSize?: number;
}

export class ToolsUnionFlowPackagePromotionReportV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsUnionFlowPackagePromotionReportGet(request: ToolsUnionFlowPackagePromotionReportV30ApiOpenApiV30ToolsUnionFlowPackagePromotionReportGetRequest): Promise<ToolsUnionFlowPackagePromotionReportV30Response> {
    const response = await this.openApiV30ToolsUnionFlowPackagePromotionReportGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsUnionFlowPackagePromotionReportGetWithHttpInfo(request: ToolsUnionFlowPackagePromotionReportV30ApiOpenApiV30ToolsUnionFlowPackagePromotionReportGetRequest): Promise<ApiResponse<ToolsUnionFlowPackagePromotionReportV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.filter == null) {
      throw new ApiException("filter is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<ToolsUnionFlowPackagePromotionReportV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/union/flow_package/promotion/report/",
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


