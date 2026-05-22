// Generated from tencentad/marketing-api-go-sdk pkg/api/api_targeting_tags.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { TargetingTagsGetResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface TargetingTagsApiGetRequest {
  type_: string;
  accountId?: number | string;
  tagSpec?: unknown;
  fields?: unknown;
}


export class TargetingTagsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: TargetingTagsApiGetRequest): Promise<TargetingTagsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: TargetingTagsApiGetRequest): Promise<ApiResponse<TargetingTagsGetResponseData>> {
    if (request.type_ == null) {
      throw new ApiException("Missing the required parameter 'type_' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<TargetingTagsGetResponseData>({
      method: "GET",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/targeting_tags/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "type", value: request.type_ },
        { name: "tag_spec", value: request.tagSpec },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


