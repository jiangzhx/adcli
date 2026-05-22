// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_android_channel.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AndroidChannelGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface AndroidChannelApiGetRequest {
  accountId: number | string;
  appId: number | string;
  filtering?: unknown;
  page?: number;
  pageSize?: number;
  fields?: unknown;
}


export class AndroidChannelApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: AndroidChannelApiGetRequest): Promise<AndroidChannelGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: AndroidChannelApiGetRequest): Promise<ApiResponse<AndroidChannelGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.appId == null) {
      throw new ApiException("Missing the required parameter 'appId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<AndroidChannelGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
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


