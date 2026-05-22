// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_marketing_rules.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { MarketingRulesGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface MarketingRulesApiGetRequest {
  accountId: number | string;
  fields?: unknown;
}


export class MarketingRulesApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: MarketingRulesApiGetRequest): Promise<MarketingRulesGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: MarketingRulesApiGetRequest): Promise<ApiResponse<MarketingRulesGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<MarketingRulesGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/marketing_rules/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


