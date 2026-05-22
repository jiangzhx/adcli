// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { TargetingTagsUvGetResponseData } from "../models";

export interface TargetingTagsUvApiGetRequest {
  accountId: number | string;
  categoryType: string;
  categoryList?: unknown;
  fields?: unknown;
}


export class TargetingTagsUvApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: TargetingTagsUvApiGetRequest): Promise<TargetingTagsUvGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: TargetingTagsUvApiGetRequest): Promise<ApiResponse<TargetingTagsUvGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.categoryType == null) {
      throw new ApiException("Missing the required parameter 'categoryType' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<TargetingTagsUvGetResponseData>({
      method: "GET",
      path: "/targeting_tags_uv/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "category_type", value: request.categoryType },
        { name: "category_list", value: request.categoryList, collectionFormat: "multi" },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


