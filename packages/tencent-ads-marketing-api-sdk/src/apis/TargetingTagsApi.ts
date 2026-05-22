// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { TargetingTagsGetResponseData } from "../models";

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


