// Generated from tencentad/marketing-api-go-sdk pkg/api/api_custom_audience_insights.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { CustomAudienceInsightsGetResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface CustomAudienceInsightsApiGetRequest {
  accountId: number | string;
  audienceId: number | string;
  dimensionType: string[];
  fields?: unknown;
}


export class CustomAudienceInsightsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: CustomAudienceInsightsApiGetRequest): Promise<CustomAudienceInsightsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: CustomAudienceInsightsApiGetRequest): Promise<ApiResponse<CustomAudienceInsightsGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.audienceId == null) {
      throw new ApiException("Missing the required parameter 'audienceId' when calling get");
    }

    if (request.dimensionType == null) {
      throw new ApiException("Missing the required parameter 'dimensionType' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<CustomAudienceInsightsGetResponseData>({
      method: "GET",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/custom_audience_insights/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "audience_id", value: request.audienceId },
        { name: "dimension_type", value: request.dimensionType, collectionFormat: "multi" },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


