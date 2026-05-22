// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AndroidChannelGetResponseData } from "../models";

export interface V3AndroidChannelApiGetRequest {
  accountId: number | string;
  appId: number | string;
  filtering?: unknown;
  page?: number;
  pageSize?: number;
  fields?: unknown;
}


export class V3AndroidChannelApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3AndroidChannelApiGetRequest): Promise<AndroidChannelGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3AndroidChannelApiGetRequest): Promise<ApiResponse<AndroidChannelGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.appId == null) {
      throw new ApiException("Missing the required parameter 'appId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<AndroidChannelGetResponseData>({
      method: "GET",
      path: "/android_channel/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "app_id", value: request.appId },
        { name: "filtering", value: request.filtering, collectionFormat: "multi" },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


