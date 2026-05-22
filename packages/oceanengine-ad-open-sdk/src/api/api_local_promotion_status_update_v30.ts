// Generated from oceanengine/ad_open_sdk_go api/api_local_promotion_status_update_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { LocalPromotionStatusUpdateV30Request, LocalPromotionStatusUpdateV30Response } from "../models/index";


export interface LocalPromotionStatusUpdateV30ApiOpenApiV30LocalPromotionStatusUpdatePostRequest {
  localPromotionStatusUpdateV30Request?: LocalPromotionStatusUpdateV30Request;
}

export class LocalPromotionStatusUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalPromotionStatusUpdatePost(request: LocalPromotionStatusUpdateV30ApiOpenApiV30LocalPromotionStatusUpdatePostRequest): Promise<LocalPromotionStatusUpdateV30Response> {
    const response = await this.openApiV30LocalPromotionStatusUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalPromotionStatusUpdatePostWithHttpInfo(request: LocalPromotionStatusUpdateV30ApiOpenApiV30LocalPromotionStatusUpdatePostRequest): Promise<ApiResponse<LocalPromotionStatusUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<LocalPromotionStatusUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/local/promotion/status/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.localPromotionStatusUpdateV30Request
    });
  }
}


