// Generated from oceanengine/ad_open_sdk_go api/api_promotion_schedule_time_update_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { PromotionScheduleTimeUpdateV30Request, PromotionScheduleTimeUpdateV30Response } from "../models/index";


export interface PromotionScheduleTimeUpdateV30ApiOpenApiV30PromotionScheduleTimeUpdatePostRequest {
  promotionScheduleTimeUpdateV30Request?: PromotionScheduleTimeUpdateV30Request;
}

export class PromotionScheduleTimeUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30PromotionScheduleTimeUpdatePost(request: PromotionScheduleTimeUpdateV30ApiOpenApiV30PromotionScheduleTimeUpdatePostRequest): Promise<PromotionScheduleTimeUpdateV30Response> {
    const response = await this.openApiV30PromotionScheduleTimeUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30PromotionScheduleTimeUpdatePostWithHttpInfo(request: PromotionScheduleTimeUpdateV30ApiOpenApiV30PromotionScheduleTimeUpdatePostRequest): Promise<ApiResponse<PromotionScheduleTimeUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<PromotionScheduleTimeUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/promotion/schedule_time/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.promotionScheduleTimeUpdateV30Request
    });
  }
}


