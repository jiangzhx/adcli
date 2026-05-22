// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_component_review_results.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ComponentReviewResultsGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface ComponentReviewResultsApiGetRequest {
  accountId: number | string;
  componentIdList: number[];
  fields?: unknown;
}


export class ComponentReviewResultsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: ComponentReviewResultsApiGetRequest): Promise<ComponentReviewResultsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: ComponentReviewResultsApiGetRequest): Promise<ApiResponse<ComponentReviewResultsGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.componentIdList == null) {
      throw new ApiException("Missing the required parameter 'componentIdList' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<ComponentReviewResultsGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
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


