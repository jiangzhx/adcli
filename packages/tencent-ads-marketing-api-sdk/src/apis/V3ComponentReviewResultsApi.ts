// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ComponentReviewResultsGetResponseData } from "../models";

export interface V3ComponentReviewResultsApiGetRequest {
  accountId: number | string;
  componentIdList: number[];
  fields?: unknown;
}


export class V3ComponentReviewResultsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3ComponentReviewResultsApiGetRequest): Promise<ComponentReviewResultsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3ComponentReviewResultsApiGetRequest): Promise<ApiResponse<ComponentReviewResultsGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.componentIdList == null) {
      throw new ApiException("Missing the required parameter 'componentIdList' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<ComponentReviewResultsGetResponseData>({
      method: "GET",
      path: "/component_review_results/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "component_id_list", value: request.componentIdList, collectionFormat: "multi" },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


