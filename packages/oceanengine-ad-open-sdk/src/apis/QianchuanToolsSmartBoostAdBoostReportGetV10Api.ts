// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanToolsSmartBoostAdBoostReportGetV10OrderType, QianchuanToolsSmartBoostAdBoostReportGetV10Response } from "../models";


export class QianchuanToolsSmartBoostAdBoostReportGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanToolsSmartBoostAdBoostReportGetGet(advertiserId: number, adId: number, adRaiseVersion: number, startTime: string, endTime: string, page: number, pageSize: number, timeGranularity: string, filed: string[], orderField: string, orderType: QianchuanToolsSmartBoostAdBoostReportGetV10OrderType): Promise<QianchuanToolsSmartBoostAdBoostReportGetV10Response> {
    const response = await this.openApiV10QianchuanToolsSmartBoostAdBoostReportGetGetWithHttpInfo(advertiserId, adId, adRaiseVersion, startTime, endTime, page, pageSize, timeGranularity, filed, orderField, orderType);
    return response.data;
  }

  async openApiV10QianchuanToolsSmartBoostAdBoostReportGetGetWithHttpInfo(advertiserId: number, adId: number, adRaiseVersion: number, startTime: string, endTime: string, page: number, pageSize: number, timeGranularity: string, filed: string[], orderField: string, orderType: QianchuanToolsSmartBoostAdBoostReportGetV10OrderType): Promise<ApiResponse<QianchuanToolsSmartBoostAdBoostReportGetV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanToolsSmartBoostAdBoostReportGetGet");
    }

    if (adId == null) {
      throw new ApiException("Missing the required parameter 'adId' when calling openApiV10QianchuanToolsSmartBoostAdBoostReportGetGet");
    }

    if (adRaiseVersion == null) {
      throw new ApiException("Missing the required parameter 'adRaiseVersion' when calling openApiV10QianchuanToolsSmartBoostAdBoostReportGetGet");
    }

    if (startTime == null) {
      throw new ApiException("Missing the required parameter 'startTime' when calling openApiV10QianchuanToolsSmartBoostAdBoostReportGetGet");
    }

    if (endTime == null) {
      throw new ApiException("Missing the required parameter 'endTime' when calling openApiV10QianchuanToolsSmartBoostAdBoostReportGetGet");
    }

    if (page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApiV10QianchuanToolsSmartBoostAdBoostReportGetGet");
    }

    if (pageSize == null) {
      throw new ApiException("Missing the required parameter 'pageSize' when calling openApiV10QianchuanToolsSmartBoostAdBoostReportGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanToolsSmartBoostAdBoostReportGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/tools/smart_boost/ad_boost/report/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "ad_id", value: adId },
        { name: "ad_raise_version", value: adRaiseVersion },
        { name: "start_time", value: startTime },
        { name: "end_time", value: endTime },
        { name: "time_granularity", value: timeGranularity },
        { name: "order_field", value: orderField },
        { name: "order_type", value: orderType },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "filed", value: filed, collectionFormat: "csv" }
      ]
    });
  }
}


