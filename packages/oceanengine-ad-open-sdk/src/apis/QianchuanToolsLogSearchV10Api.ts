// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanToolsLogSearchV10ObjectType, QianchuanToolsLogSearchV10Response } from "../models";


export class QianchuanToolsLogSearchV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanToolsLogSearchGet(advertiserId: number, objectType: QianchuanToolsLogSearchV10ObjectType, objectId: number, operatorId: number[], startTime: string, endTime: string, page: number, pageSize: number): Promise<QianchuanToolsLogSearchV10Response> {
    const response = await this.openApiV10QianchuanToolsLogSearchGetWithHttpInfo(advertiserId, objectType, objectId, operatorId, startTime, endTime, page, pageSize);
    return response.data;
  }

  async openApiV10QianchuanToolsLogSearchGetWithHttpInfo(advertiserId: number, objectType: QianchuanToolsLogSearchV10ObjectType, objectId: number, operatorId: number[], startTime: string, endTime: string, page: number, pageSize: number): Promise<ApiResponse<QianchuanToolsLogSearchV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanToolsLogSearchGet");
    }

    if (objectType == null) {
      throw new ApiException("Missing the required parameter 'objectType' when calling openApiV10QianchuanToolsLogSearchGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanToolsLogSearchV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/tools/log_search/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "object_id", value: objectId },
        { name: "object_type", value: objectType },
        { name: "start_time", value: startTime },
        { name: "end_time", value: endTime },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "operator_id", value: operatorId, collectionFormat: "csv" }
      ]
    });
  }
}


