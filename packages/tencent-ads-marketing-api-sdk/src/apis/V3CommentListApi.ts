// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CommentListGetResponseData } from "../models";

export interface V3CommentListApiGetRequest {
  accountId: number | string;
  filtering?: unknown;
  count?: number;
  lastBuffer?: string;
  fields?: unknown;
}


export class V3CommentListApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3CommentListApiGetRequest): Promise<CommentListGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3CommentListApiGetRequest): Promise<ApiResponse<CommentListGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<CommentListGetResponseData>({
      method: "GET",
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


