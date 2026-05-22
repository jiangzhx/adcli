// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_tools_log_search_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanToolsLogSearchV10ObjectType, QianchuanToolsLogSearchV10Response } from "../models/index";


export interface QianchuanToolsLogSearchV10ApiOpenApiV10QianchuanToolsLogSearchGetRequest {
  advertiserId: number | string;
  objectType: QianchuanToolsLogSearchV10ObjectType;
  objectId?: number | string;
  operatorId?: number | string[];
  startTime?: string;
  endTime?: string;
  page?: number;
  pageSize?: number;
}

export class QianchuanToolsLogSearchV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanToolsLogSearchGet(request: QianchuanToolsLogSearchV10ApiOpenApiV10QianchuanToolsLogSearchGetRequest): Promise<QianchuanToolsLogSearchV10Response> {
    const response = await this.openApiV10QianchuanToolsLogSearchGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanToolsLogSearchGetWithHttpInfo(request: QianchuanToolsLogSearchV10ApiOpenApiV10QianchuanToolsLogSearchGetRequest): Promise<ApiResponse<QianchuanToolsLogSearchV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanToolsLogSearchGet");
    }

    if (request.objectType == null) {
      throw new ApiException("Missing the required parameter 'objectType' when calling openApiV10QianchuanToolsLogSearchGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanToolsLogSearchV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/tools/log_search/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "object_id", value: request.objectId },
        { name: "object_type", value: request.objectType },
        { name: "operator_id", value: request.operatorId, collectionFormat: "csv" },
        { name: "start_time", value: request.startTime },
        { name: "end_time", value: request.endTime },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


