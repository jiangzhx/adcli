// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { QianchuanTodayLiveRoomProductListGetV10ExplainStatus, QianchuanTodayLiveRoomProductListGetV10Response } from "../models";


export class QianchuanTodayLiveRoomProductListGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanTodayLiveRoomProductListGetGet(advertiserId: number, roomId: number, fields: string[], explainStatus: QianchuanTodayLiveRoomProductListGetV10ExplainStatus, page: number, pageSize: number): Promise<QianchuanTodayLiveRoomProductListGetV10Response> {
    const response = await this.openApiV10QianchuanTodayLiveRoomProductListGetGetWithHttpInfo(advertiserId, roomId, fields, explainStatus, page, pageSize);
    return response.data;
  }

  async openApiV10QianchuanTodayLiveRoomProductListGetGetWithHttpInfo(advertiserId: number, roomId: number, fields: string[], explainStatus: QianchuanTodayLiveRoomProductListGetV10ExplainStatus, page: number, pageSize: number): Promise<ApiResponse<QianchuanTodayLiveRoomProductListGetV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanTodayLiveRoomProductListGetGet");
    }

    if (roomId == null) {
      throw new ApiException("Missing the required parameter 'roomId' when calling openApiV10QianchuanTodayLiveRoomProductListGetGet");
    }

    if (fields == null) {
      throw new ApiException("Missing the required parameter 'fields' when calling openApiV10QianchuanTodayLiveRoomProductListGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanTodayLiveRoomProductListGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/today_live/room/product_list/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "room_id", value: roomId },
        { name: "explain_status", value: explainStatus },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "fields", value: fields, collectionFormat: "csv" }
      ]
    });
  }
}


