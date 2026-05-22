// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AnalyticsAttributionV30Request, AnalyticsAttributionV30Response } from "../models";


export interface OpenApiV30AnalyticsAttributionPostRequest {
  analyticsAttributionV30Request?: AnalyticsAttributionV30Request;
}

export class AnalyticsAttributionV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30AnalyticsAttributionPost(request: OpenApiV30AnalyticsAttributionPostRequest): Promise<AnalyticsAttributionV30Response> {
    const response = await this.openApiV30AnalyticsAttributionPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30AnalyticsAttributionPostWithHttpInfo(request: OpenApiV30AnalyticsAttributionPostRequest): Promise<ApiResponse<AnalyticsAttributionV30Response>> {

    return this.apiClient.requestWithHttpInfo<AnalyticsAttributionV30Response>({
      method: "POST",
      path: "/open_api/v3.0/analytics/attribution/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.analyticsAttributionV30Request
    });
  }
}


