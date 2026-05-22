// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanTodayLiveRoomProductListGetV10ExplainStatus, QianchuanTodayLiveRoomProductListGetV10Response } from "../models";


export interface OpenApiV10QianchuanTodayLiveRoomProductListGetGetRequest {
  advertiserId: number | string;
  roomId: number | string;
  fields: string[];
  explainStatus?: QianchuanTodayLiveRoomProductListGetV10ExplainStatus;
  page?: number;
  pageSize?: number;
}

export class QianchuanTodayLiveRoomProductListGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanTodayLiveRoomProductListGetGet(request: OpenApiV10QianchuanTodayLiveRoomProductListGetGetRequest): Promise<QianchuanTodayLiveRoomProductListGetV10Response> {
    const response = await this.openApiV10QianchuanTodayLiveRoomProductListGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanTodayLiveRoomProductListGetGetWithHttpInfo(request: OpenApiV10QianchuanTodayLiveRoomProductListGetGetRequest): Promise<ApiResponse<QianchuanTodayLiveRoomProductListGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanTodayLiveRoomProductListGetGet");
    }

    if (request.roomId == null) {
      throw new ApiException("Missing the required parameter 'roomId' when calling openApiV10QianchuanTodayLiveRoomProductListGetGet");
    }

    if (request.fields == null) {
      throw new ApiException("Missing the required parameter 'fields' when calling openApiV10QianchuanTodayLiveRoomProductListGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanTodayLiveRoomProductListGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/today_live/room/product_list/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "room_id", value: request.roomId },
        { name: "fields", value: request.fields, collectionFormat: "csv" },
        { name: "explain_status", value: request.explainStatus },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


