// Generated from oceanengine/ad_open_sdk_go api/api_charge_list_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ChargeListV30ChargeSourceList, ChargeListV30ChargeStatusList, ChargeListV30ChargeTargetType, ChargeListV30ChargeTypeList, ChargeListV30PlatformList, ChargeListV30Response } from "../models/index";


export interface ChargeListV30ApiOpenApiV30ChargeListGetRequest {
  advertiserId: number | string;
  chargeTargetType: ChargeListV30ChargeTargetType;
  platformList: ChargeListV30PlatformList[];
  chargeStatusList: ChargeListV30ChargeStatusList[];
  chargeTypeList: ChargeListV30ChargeTypeList[];
  chargeSourceList?: ChargeListV30ChargeSourceList[];
  startTime?: string;
  endTime?: string;
  needTotalAmount?: boolean;
  page?: number;
  pageSize?: number;
}

export class ChargeListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ChargeListGet(request: ChargeListV30ApiOpenApiV30ChargeListGetRequest): Promise<ChargeListV30Response> {
    const response = await this.openApiV30ChargeListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ChargeListGetWithHttpInfo(request: ChargeListV30ApiOpenApiV30ChargeListGetRequest): Promise<ApiResponse<ChargeListV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ChargeListGet");
    }

    if (request.chargeTargetType == null) {
      throw new ApiException("Missing the required parameter 'chargeTargetType' when calling openApiV30ChargeListGet");
    }

    if (request.platformList == null) {
      throw new ApiException("Missing the required parameter 'platformList' when calling openApiV30ChargeListGet");
    }

    if (request.chargeStatusList == null) {
      throw new ApiException("Missing the required parameter 'chargeStatusList' when calling openApiV30ChargeListGet");
    }

    if (request.chargeTypeList == null) {
      throw new ApiException("Missing the required parameter 'chargeTypeList' when calling openApiV30ChargeListGet");
    }
    return this.apiClient.requestWithHttpInfo<ChargeListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/charge/list/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "charge_target_type", value: request.chargeTargetType },
        { name: "platform_list", value: request.platformList, collectionFormat: "csv" },
        { name: "charge_status_list", value: request.chargeStatusList, collectionFormat: "csv" },
        { name: "charge_source_list", value: request.chargeSourceList, collectionFormat: "csv" },
        { name: "start_time", value: request.startTime },
        { name: "end_time", value: request.endTime },
        { name: "charge_type_list", value: request.chargeTypeList, collectionFormat: "csv" },
        { name: "need_total_amount", value: request.needTotalAmount },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


