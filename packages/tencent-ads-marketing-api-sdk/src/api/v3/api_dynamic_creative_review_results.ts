// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_dynamic_creative_review_results.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { DynamicCreativeReviewResultsGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface DynamicCreativeReviewResultsApiGetRequest {
  accountId: number | string;
  dynamicCreativeIdList: number[];
  fields?: unknown;
}


export class DynamicCreativeReviewResultsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: DynamicCreativeReviewResultsApiGetRequest): Promise<DynamicCreativeReviewResultsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: DynamicCreativeReviewResultsApiGetRequest): Promise<ApiResponse<DynamicCreativeReviewResultsGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.dynamicCreativeIdList == null) {
      throw new ApiException("Missing the required parameter 'dynamicCreativeIdList' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<DynamicCreativeReviewResultsGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/dynamic_creative_review_results/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "dynamic_creative_id_list", value: request.dynamicCreativeIdList, collectionFormat: "multi" },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


