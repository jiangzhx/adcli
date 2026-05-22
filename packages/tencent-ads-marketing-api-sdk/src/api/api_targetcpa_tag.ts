// Generated from tencentad/marketing-api-go-sdk pkg/api/api_targetcpa_tag.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { TargetcpaTagGetResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface TargetcpaTagApiGetRequest {
  accountId: number | string;
  tagTypes: string[];
  fields?: unknown;
}


export class TargetcpaTagApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: TargetcpaTagApiGetRequest): Promise<TargetcpaTagGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: TargetcpaTagApiGetRequest): Promise<ApiResponse<TargetcpaTagGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.tagTypes == null) {
      throw new ApiException("Missing the required parameter 'tagTypes' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<TargetcpaTagGetResponseData>({
      method: "GET",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/targetcpa_tag/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "tag_types", value: request.tagTypes, collectionFormat: "multi" },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


