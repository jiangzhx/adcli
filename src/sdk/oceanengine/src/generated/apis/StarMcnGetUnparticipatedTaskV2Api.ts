// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { StarMcnGetUnparticipatedTaskV2Response } from "../models";


export class StarMcnGetUnparticipatedTaskV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarMcnGetUnparticipatedTaskGet(starId: number, page: number, pageSize: number, payType: number, minCreateTimeStamp: number, maxCreateTimeStamp: number, firstClassCategory: number, secondClassCategory: number, keyword: string, settlementType: number, playletCategory: number, playletTheme: number[], playletGender: number, playletHot: number, playletFirstWeek: number, playletSecondWeek: number, highProfitChallenge: number, developerId: number): Promise<StarMcnGetUnparticipatedTaskV2Response> {
    const response = await this.openApi2StarMcnGetUnparticipatedTaskGetWithHttpInfo(starId, page, pageSize, payType, minCreateTimeStamp, maxCreateTimeStamp, firstClassCategory, secondClassCategory, keyword, settlementType, playletCategory, playletTheme, playletGender, playletHot, playletFirstWeek, playletSecondWeek, highProfitChallenge, developerId);
    return response.data;
  }

  async openApi2StarMcnGetUnparticipatedTaskGetWithHttpInfo(starId: number, page: number, pageSize: number, payType: number, minCreateTimeStamp: number, maxCreateTimeStamp: number, firstClassCategory: number, secondClassCategory: number, keyword: string, settlementType: number, playletCategory: number, playletTheme: number[], playletGender: number, playletHot: number, playletFirstWeek: number, playletSecondWeek: number, highProfitChallenge: number, developerId: number): Promise<ApiResponse<StarMcnGetUnparticipatedTaskV2Response>> {
    if (starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarMcnGetUnparticipatedTaskGet");
    }

    if (page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApi2StarMcnGetUnparticipatedTaskGet");
    }

    if (pageSize == null) {
      throw new ApiException("Missing the required parameter 'pageSize' when calling openApi2StarMcnGetUnparticipatedTaskGet");
    }
    return this.apiClient.requestWithHttpInfo<StarMcnGetUnparticipatedTaskV2Response>({
      method: "GET",
      path: "/open_api/2/star/mcn/get_unparticipated_task/",
      queryParams: [
        { name: "star_id", value: starId },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "pay_type", value: payType },
        { name: "min_create_time_stamp", value: minCreateTimeStamp },
        { name: "max_create_time_stamp", value: maxCreateTimeStamp },
        { name: "first_class_category", value: firstClassCategory },
        { name: "second_class_category", value: secondClassCategory },
        { name: "keyword", value: keyword },
        { name: "settlement_type", value: settlementType },
        { name: "playlet_category", value: playletCategory },
        { name: "playlet_gender", value: playletGender },
        { name: "playlet_hot", value: playletHot },
        { name: "playlet_first_week", value: playletFirstWeek },
        { name: "playlet_second_week", value: playletSecondWeek },
        { name: "high_profit_challenge", value: highProfitChallenge },
        { name: "developer_id", value: developerId },
        { name: "playlet_theme", value: playletTheme, collectionFormat: "csv" }
      ]
    });
  }
}


