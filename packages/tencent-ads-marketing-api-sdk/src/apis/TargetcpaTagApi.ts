// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { TargetcpaTagGetResponseData } from "../models";

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


