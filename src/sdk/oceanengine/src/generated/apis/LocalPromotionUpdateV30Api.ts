// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { LocalPromotionUpdateV30Request, LocalPromotionUpdateV30Response } from "../models";


export class LocalPromotionUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalPromotionUpdatePost(localPromotionUpdateV30Request: LocalPromotionUpdateV30Request): Promise<LocalPromotionUpdateV30Response> {
    const response = await this.openApiV30LocalPromotionUpdatePostWithHttpInfo(localPromotionUpdateV30Request);
    return response.data;
  }

  async openApiV30LocalPromotionUpdatePostWithHttpInfo(localPromotionUpdateV30Request: LocalPromotionUpdateV30Request): Promise<ApiResponse<LocalPromotionUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<LocalPromotionUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/local/promotion/update/",
      queryParams: [

      ],
      body: localPromotionUpdateV30Request
    });
  }
}


