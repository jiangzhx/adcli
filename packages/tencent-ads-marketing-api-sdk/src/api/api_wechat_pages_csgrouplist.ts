// Generated from tencentad/marketing-api-go-sdk pkg/api/api_wechat_pages_csgrouplist.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { WechatPagesCsgrouplistAddRequest, WechatPagesCsgrouplistGetResponseData, WechatPagesCsgrouplistUpdateRequest } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface WechatPagesCsgrouplistApiAddRequest {
  data: WechatPagesCsgrouplistAddRequest;
}

export interface WechatPagesCsgrouplistApiGetRequest {
  accountId: number | string;
  page?: number;
  pageSize?: number;
  corpId?: string;
  fields?: unknown;
}

export interface WechatPagesCsgrouplistApiUpdateRequest {
  data: WechatPagesCsgrouplistUpdateRequest;
}


export class WechatPagesCsgrouplistApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: WechatPagesCsgrouplistApiAddRequest): Promise<unknown> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: WechatPagesCsgrouplistApiAddRequest): Promise<ApiResponse<unknown>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<unknown>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/wechat_pages_csgrouplist/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: WechatPagesCsgrouplistApiGetRequest): Promise<WechatPagesCsgrouplistGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: WechatPagesCsgrouplistApiGetRequest): Promise<ApiResponse<WechatPagesCsgrouplistGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<WechatPagesCsgrouplistGetResponseData>({
      method: "GET",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/wechat_pages_csgrouplist/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "corp_id", value: request.corpId },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

  async update(request: WechatPagesCsgrouplistApiUpdateRequest): Promise<unknown> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: WechatPagesCsgrouplistApiUpdateRequest): Promise<ApiResponse<unknown>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<unknown>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/wechat_pages_csgrouplist/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


