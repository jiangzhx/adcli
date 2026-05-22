// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AsyncReportsAddRequest, AsyncReportsAddResponseData, AsyncReportsGetResponseData } from "../models";

export interface AsyncReportsApiAddRequest {
  data: AsyncReportsAddRequest;
}

export interface AsyncReportsApiGetRequest {
  accountId: number | string;
  filtering?: unknown;
  page?: number;
  pageSize?: number;
  weixinOfficialAccountsUpgradeEnabled?: boolean;
  fields?: unknown;
}


export class AsyncReportsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: AsyncReportsApiAddRequest): Promise<AsyncReportsAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: AsyncReportsApiAddRequest): Promise<ApiResponse<AsyncReportsAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<AsyncReportsAddResponseData>({
      method: "POST",
      path: "/async_reports/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: AsyncReportsApiGetRequest): Promise<AsyncReportsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: AsyncReportsApiGetRequest): Promise<ApiResponse<AsyncReportsGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<AsyncReportsGetResponseData>({
      method: "GET",
      path: "/async_reports/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "filtering", value: request.filtering, collectionFormat: "multi" },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "weixin_official_accounts_upgrade_enabled", value: request.weixinOfficialAccountsUpgradeEnabled },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


