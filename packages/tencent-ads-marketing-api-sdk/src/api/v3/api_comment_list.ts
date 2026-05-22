// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_comment_list.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { CommentListGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface CommentListApiGetRequest {
  accountId: number | string;
  filtering?: unknown;
  count?: number;
  lastBuffer?: string;
  fields?: unknown;
}


export class CommentListApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: CommentListApiGetRequest): Promise<CommentListGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: CommentListApiGetRequest): Promise<ApiResponse<CommentListGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<CommentListGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/comment_list/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "filtering", value: request.filtering, collectionFormat: "multi" },
        { name: "count", value: request.count },
        { name: "last_buffer", value: request.lastBuffer },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


