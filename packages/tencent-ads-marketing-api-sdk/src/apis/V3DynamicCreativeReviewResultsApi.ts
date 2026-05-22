// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DynamicCreativeReviewResultsGetResponseData } from "../models";

export interface V3DynamicCreativeReviewResultsApiGetRequest {
  accountId: number | string;
  dynamicCreativeIdList: number[];
  fields?: unknown;
}


export class V3DynamicCreativeReviewResultsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3DynamicCreativeReviewResultsApiGetRequest): Promise<DynamicCreativeReviewResultsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3DynamicCreativeReviewResultsApiGetRequest): Promise<ApiResponse<DynamicCreativeReviewResultsGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.dynamicCreativeIdList == null) {
      throw new ApiException("Missing the required parameter 'dynamicCreativeIdList' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<DynamicCreativeReviewResultsGetResponseData>({
      method: "GET",
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


