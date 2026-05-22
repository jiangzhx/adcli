// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LocalPromotionUpdateV30Request, LocalPromotionUpdateV30Response } from "../models";


export interface OpenApiV30LocalPromotionUpdatePostRequest {
  localPromotionUpdateV30Request?: LocalPromotionUpdateV30Request;
}

export class LocalPromotionUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalPromotionUpdatePost(request: OpenApiV30LocalPromotionUpdatePostRequest): Promise<LocalPromotionUpdateV30Response> {
    const response = await this.openApiV30LocalPromotionUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalPromotionUpdatePostWithHttpInfo(request: OpenApiV30LocalPromotionUpdatePostRequest): Promise<ApiResponse<LocalPromotionUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<LocalPromotionUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/local/promotion/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.localPromotionUpdateV30Request
    });
  }
}


