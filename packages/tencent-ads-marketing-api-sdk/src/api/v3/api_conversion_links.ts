// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_conversion_links.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ConversionLinksGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface ConversionLinksApiGetRequest {
  accountId: number | string;
  secondCategoryType: string;
  optimizationGoalStruct?: unknown;
  fields?: unknown;
}


export class ConversionLinksApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: ConversionLinksApiGetRequest): Promise<ConversionLinksGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: ConversionLinksApiGetRequest): Promise<ApiResponse<ConversionLinksGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.secondCategoryType == null) {
      throw new ApiException("Missing the required parameter 'secondCategoryType' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<ConversionLinksGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/conversion_links/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "second_category_type", value: request.secondCategoryType },
        { name: "optimization_goal_struct", value: request.optimizationGoalStruct },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


