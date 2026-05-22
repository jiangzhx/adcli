// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { PromotionScheduleTimeUpdateV30Request, PromotionScheduleTimeUpdateV30Response } from "../models";


export interface OpenApiV30PromotionScheduleTimeUpdatePostRequest {
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

  async openApiV30PromotionScheduleTimeUpdatePost(request: OpenApiV30PromotionScheduleTimeUpdatePostRequest): Promise<PromotionScheduleTimeUpdateV30Response> {
    const response = await this.openApiV30PromotionScheduleTimeUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30PromotionScheduleTimeUpdatePostWithHttpInfo(request: OpenApiV30PromotionScheduleTimeUpdatePostRequest): Promise<ApiResponse<PromotionScheduleTimeUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<PromotionScheduleTimeUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/promotion/schedule_time/update/",
      queryParams: [

      ],
      body: request.promotionScheduleTimeUpdateV30Request
    });
  }
}


