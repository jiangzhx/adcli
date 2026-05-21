// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { LocalPromotionStatusUpdateV30Request, LocalPromotionStatusUpdateV30Response } from "../models";


export class LocalPromotionStatusUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalPromotionStatusUpdatePost(localPromotionStatusUpdateV30Request: LocalPromotionStatusUpdateV30Request): Promise<LocalPromotionStatusUpdateV30Response> {
    const response = await this.openApiV30LocalPromotionStatusUpdatePostWithHttpInfo(localPromotionStatusUpdateV30Request);
    return response.data;
  }

  async openApiV30LocalPromotionStatusUpdatePostWithHttpInfo(localPromotionStatusUpdateV30Request: LocalPromotionStatusUpdateV30Request): Promise<ApiResponse<LocalPromotionStatusUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<LocalPromotionStatusUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/local/promotion/status/update/",
      queryParams: [

      ],
      body: localPromotionStatusUpdateV30Request
    });
  }
}


