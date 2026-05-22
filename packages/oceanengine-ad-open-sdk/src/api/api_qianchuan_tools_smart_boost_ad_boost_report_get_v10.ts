// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_tools_smart_boost_ad_boost_report_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanToolsSmartBoostAdBoostReportGetV10OrderType, QianchuanToolsSmartBoostAdBoostReportGetV10Response } from "../models/index";


export interface QianchuanToolsSmartBoostAdBoostReportGetV10ApiOpenApiV10QianchuanToolsSmartBoostAdBoostReportGetGetRequest {
  advertiserId: number | string;
  adId: number | string;
  adRaiseVersion: number;
  startTime: string;
  endTime: string;
  page: number;
  pageSize: number;
  timeGranularity?: string;
  filed?: string[];
  orderField?: string;
  orderType?: QianchuanToolsSmartBoostAdBoostReportGetV10OrderType;
}

export class QianchuanToolsSmartBoostAdBoostReportGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanToolsSmartBoostAdBoostReportGetGet(request: QianchuanToolsSmartBoostAdBoostReportGetV10ApiOpenApiV10QianchuanToolsSmartBoostAdBoostReportGetGetRequest): Promise<QianchuanToolsSmartBoostAdBoostReportGetV10Response> {
    const response = await this.openApiV10QianchuanToolsSmartBoostAdBoostReportGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanToolsSmartBoostAdBoostReportGetGetWithHttpInfo(request: QianchuanToolsSmartBoostAdBoostReportGetV10ApiOpenApiV10QianchuanToolsSmartBoostAdBoostReportGetGetRequest): Promise<ApiResponse<QianchuanToolsSmartBoostAdBoostReportGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.adId == null) {
      throw new ApiException("adId is required and must be specified");
    }

    if (request.adRaiseVersion == null) {
      throw new ApiException("adRaiseVersion is required and must be specified");
    }

    if (request.startTime == null) {
      throw new ApiException("startTime is required and must be specified");
    }

    if (request.endTime == null) {
      throw new ApiException("endTime is required and must be specified");
    }

    if (request.page == null) {
      throw new ApiException("page is required and must be specified");
    }

    if (request.pageSize == null) {
      throw new ApiException("pageSize is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanToolsSmartBoostAdBoostReportGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/tools/smart_boost/ad_boost/report/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "ad_id", value: request.adId },
        { name: "ad_raise_version", value: request.adRaiseVersion },
        { name: "start_time", value: request.startTime },
        { name: "end_time", value: request.endTime },
        { name: "time_granularity", value: request.timeGranularity },
        { name: "filed", value: request.filed },
        { name: "order_field", value: request.orderField },
        { name: "order_type", value: request.orderType },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


