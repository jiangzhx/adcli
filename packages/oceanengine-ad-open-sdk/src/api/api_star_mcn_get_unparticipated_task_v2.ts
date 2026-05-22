// Generated from oceanengine/ad_open_sdk_go api/api_star_mcn_get_unparticipated_task_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarMcnGetUnparticipatedTaskV2Response } from "../models/index";


export interface StarMcnGetUnparticipatedTaskV2ApiOpenApi2StarMcnGetUnparticipatedTaskGetRequest {
  starId: number | string;
  page: number;
  pageSize: number;
  payType?: number;
  minCreateTimeStamp?: number;
  maxCreateTimeStamp?: number;
  firstClassCategory?: number;
  secondClassCategory?: number;
  keyword?: string;
  settlementType?: number;
  playletCategory?: number;
  playletTheme?: number[];
  playletGender?: number;
  playletHot?: number;
  playletFirstWeek?: number;
  playletSecondWeek?: number;
  highProfitChallenge?: number;
  developerId?: number | string;
}

export class StarMcnGetUnparticipatedTaskV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarMcnGetUnparticipatedTaskGet(request: StarMcnGetUnparticipatedTaskV2ApiOpenApi2StarMcnGetUnparticipatedTaskGetRequest): Promise<StarMcnGetUnparticipatedTaskV2Response> {
    const response = await this.openApi2StarMcnGetUnparticipatedTaskGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarMcnGetUnparticipatedTaskGetWithHttpInfo(request: StarMcnGetUnparticipatedTaskV2ApiOpenApi2StarMcnGetUnparticipatedTaskGetRequest): Promise<ApiResponse<StarMcnGetUnparticipatedTaskV2Response>> {
    if (request.starId == null) {
      throw new ApiException("starId is required and must be specified");
    }

    if (request.page == null) {
      throw new ApiException("page is required and must be specified");
    }

    if (request.pageSize == null) {
      throw new ApiException("pageSize is required and must be specified");
    }

    if (request.pageSize != null && Number(request.pageSize) < 1) {
      throw new ApiException("pageSize must be greater than 1");
    }

    if (request.pageSize != null && Number(request.pageSize) > 10) {
      throw new ApiException("pageSize must be less than 10");
    }
    return this.apiClient.requestWithHttpInfo<StarMcnGetUnparticipatedTaskV2Response>({
      method: "GET",
      path: "/open_api/2/star/mcn/get_unparticipated_task/",
      queryParams: [
        { name: "star_id", value: request.starId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "pay_type", value: request.payType },
        { name: "min_create_time_stamp", value: request.minCreateTimeStamp },
        { name: "max_create_time_stamp", value: request.maxCreateTimeStamp },
        { name: "first_class_category", value: request.firstClassCategory },
        { name: "second_class_category", value: request.secondClassCategory },
        { name: "keyword", value: request.keyword },
        { name: "settlement_type", value: request.settlementType },
        { name: "playlet_category", value: request.playletCategory },
        { name: "playlet_theme", value: request.playletTheme },
        { name: "playlet_gender", value: request.playletGender },
        { name: "playlet_hot", value: request.playletHot },
        { name: "playlet_first_week", value: request.playletFirstWeek },
        { name: "playlet_second_week", value: request.playletSecondWeek },
        { name: "high_profit_challenge", value: request.highProfitChallenge },
        { name: "developer_id", value: request.developerId }
      ]
    });
  }
}


