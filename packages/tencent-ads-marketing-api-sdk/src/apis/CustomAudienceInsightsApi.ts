// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CustomAudienceInsightsGetResponseData } from "../models";

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


