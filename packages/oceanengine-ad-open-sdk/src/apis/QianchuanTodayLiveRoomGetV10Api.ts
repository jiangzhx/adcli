// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanTodayLiveRoomGetV10AdStatus, QianchuanTodayLiveRoomGetV10Response, QianchuanTodayLiveRoomGetV10RoomStatus } from "../models";


export interface OpenApiV10QianchuanTodayLiveRoomGetGetRequest {
  advertiserId: number | string;
  awemeId: number | string;
  dateTime: string;
  fields: string[];
  roomStatus?: QianchuanTodayLiveRoomGetV10RoomStatus;
  adStatus?: QianchuanTodayLiveRoomGetV10AdStatus;
  page?: number;
  pageSize?: number;
}

export class QianchuanTodayLiveRoomGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanTodayLiveRoomGetGet(request: OpenApiV10QianchuanTodayLiveRoomGetGetRequest): Promise<QianchuanTodayLiveRoomGetV10Response> {
    const response = await this.openApiV10QianchuanTodayLiveRoomGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanTodayLiveRoomGetGetWithHttpInfo(request: OpenApiV10QianchuanTodayLiveRoomGetGetRequest): Promise<ApiResponse<QianchuanTodayLiveRoomGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanTodayLiveRoomGetGet");
    }

    if (request.awemeId == null) {
      throw new ApiException("Missing the required parameter 'awemeId' when calling openApiV10QianchuanTodayLiveRoomGetGet");
    }

    if (request.dateTime == null) {
      throw new ApiException("Missing the required parameter 'dateTime' when calling openApiV10QianchuanTodayLiveRoomGetGet");
    }

    if (request.fields == null) {
      throw new ApiException("Missing the required parameter 'fields' when calling openApiV10QianchuanTodayLiveRoomGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanTodayLiveRoomGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/today_live/room/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "aweme_id", value: request.awemeId },
        { name: "date_time", value: request.dateTime },
        { name: "room_status", value: request.roomStatus },
        { name: "ad_status", value: request.adStatus },
        { name: "fields", value: request.fields, collectionFormat: "csv" },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


