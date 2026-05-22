// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanToolsSmartBoostAdBoostReportGetV10OrderType, QianchuanToolsSmartBoostAdBoostReportGetV10Response } from "../models";


export interface OpenApiV10QianchuanToolsSmartBoostAdBoostReportGetGetRequest {
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

  async openApiV10QianchuanToolsSmartBoostAdBoostReportGetGet(request: OpenApiV10QianchuanToolsSmartBoostAdBoostReportGetGetRequest): Promise<QianchuanToolsSmartBoostAdBoostReportGetV10Response> {
    const response = await this.openApiV10QianchuanToolsSmartBoostAdBoostReportGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanToolsSmartBoostAdBoostReportGetGetWithHttpInfo(request: OpenApiV10QianchuanToolsSmartBoostAdBoostReportGetGetRequest): Promise<ApiResponse<QianchuanToolsSmartBoostAdBoostReportGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanToolsSmartBoostAdBoostReportGetGet");
    }

    if (request.adId == null) {
      throw new ApiException("Missing the required parameter 'adId' when calling openApiV10QianchuanToolsSmartBoostAdBoostReportGetGet");
    }

    if (request.adRaiseVersion == null) {
      throw new ApiException("Missing the required parameter 'adRaiseVersion' when calling openApiV10QianchuanToolsSmartBoostAdBoostReportGetGet");
    }

    if (request.startTime == null) {
      throw new ApiException("Missing the required parameter 'startTime' when calling openApiV10QianchuanToolsSmartBoostAdBoostReportGetGet");
    }

    if (request.endTime == null) {
      throw new ApiException("Missing the required parameter 'endTime' when calling openApiV10QianchuanToolsSmartBoostAdBoostReportGetGet");
    }

    if (request.page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApiV10QianchuanToolsSmartBoostAdBoostReportGetGet");
    }

    if (request.pageSize == null) {
      throw new ApiException("Missing the required parameter 'pageSize' when calling openApiV10QianchuanToolsSmartBoostAdBoostReportGetGet");
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
        { name: "filed", value: request.filed, collectionFormat: "csv" },
        { name: "order_field", value: request.orderField },
        { name: "order_type", value: request.orderType },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


