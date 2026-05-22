// Generated from oceanengine/ad_open_sdk_go api/api_analytics_attribution_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AnalyticsAttributionV30Request, AnalyticsAttributionV30Response } from "../models/index";


export interface AnalyticsAttributionV30ApiOpenApiV30AnalyticsAttributionPostRequest {
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

  async openApiV30AnalyticsAttributionPost(request: AnalyticsAttributionV30ApiOpenApiV30AnalyticsAttributionPostRequest): Promise<AnalyticsAttributionV30Response> {
    const response = await this.openApiV30AnalyticsAttributionPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30AnalyticsAttributionPostWithHttpInfo(request: AnalyticsAttributionV30ApiOpenApiV30AnalyticsAttributionPostRequest): Promise<ApiResponse<AnalyticsAttributionV30Response>> {

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


