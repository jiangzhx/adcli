// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ChargeListV30ChargeSourceList, ChargeListV30ChargeStatusList, ChargeListV30ChargeTargetType, ChargeListV30ChargeTypeList, ChargeListV30PlatformList, ChargeListV30Response } from "../models";


export class ChargeListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ChargeListGet(advertiserId: number, chargeTargetType: ChargeListV30ChargeTargetType, platformList: ChargeListV30PlatformList[], chargeStatusList: ChargeListV30ChargeStatusList[], chargeTypeList: ChargeListV30ChargeTypeList[], chargeSourceList: ChargeListV30ChargeSourceList[], startTime: string, endTime: string, needTotalAmount: boolean, page: number, pageSize: number): Promise<ChargeListV30Response> {
    const response = await this.openApiV30ChargeListGetWithHttpInfo(advertiserId, chargeTargetType, platformList, chargeStatusList, chargeTypeList, chargeSourceList, startTime, endTime, needTotalAmount, page, pageSize);
    return response.data;
  }

  async openApiV30ChargeListGetWithHttpInfo(advertiserId: number, chargeTargetType: ChargeListV30ChargeTargetType, platformList: ChargeListV30PlatformList[], chargeStatusList: ChargeListV30ChargeStatusList[], chargeTypeList: ChargeListV30ChargeTypeList[], chargeSourceList: ChargeListV30ChargeSourceList[], startTime: string, endTime: string, needTotalAmount: boolean, page: number, pageSize: number): Promise<ApiResponse<ChargeListV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ChargeListGet");
    }

    if (chargeTargetType == null) {
      throw new ApiException("Missing the required parameter 'chargeTargetType' when calling openApiV30ChargeListGet");
    }

    if (platformList == null) {
      throw new ApiException("Missing the required parameter 'platformList' when calling openApiV30ChargeListGet");
    }

    if (chargeStatusList == null) {
      throw new ApiException("Missing the required parameter 'chargeStatusList' when calling openApiV30ChargeListGet");
    }

    if (chargeTypeList == null) {
      throw new ApiException("Missing the required parameter 'chargeTypeList' when calling openApiV30ChargeListGet");
    }
    return this.apiClient.requestWithHttpInfo<ChargeListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/charge/list/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "charge_target_type", value: chargeTargetType },
        { name: "start_time", value: startTime },
        { name: "end_time", value: endTime },
        { name: "need_total_amount", value: needTotalAmount },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "platform_list", value: platformList, collectionFormat: "csv" },
        { name: "charge_status_list", value: chargeStatusList, collectionFormat: "csv" },
        { name: "charge_source_list", value: chargeSourceList, collectionFormat: "csv" },
        { name: "charge_type_list", value: chargeTypeList, collectionFormat: "csv" }
      ]
    });
  }
}


