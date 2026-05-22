// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_wechat_shop_authorization.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { WechatShopAuthorizationAddRequest, WechatShopAuthorizationAddResponseData, WechatShopAuthorizationGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface WechatShopAuthorizationApiAddRequest {
  data: WechatShopAuthorizationAddRequest;
}

export interface WechatShopAuthorizationApiGetRequest {
  accountId: number | string;
  filtering?: unknown;
  page?: number;
  pageSize?: number;
  fields?: unknown;
}


export class WechatShopAuthorizationApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: WechatShopAuthorizationApiAddRequest): Promise<WechatShopAuthorizationAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: WechatShopAuthorizationApiAddRequest): Promise<ApiResponse<WechatShopAuthorizationAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<WechatShopAuthorizationAddResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/wechat_shop_authorization/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: WechatShopAuthorizationApiGetRequest): Promise<WechatShopAuthorizationGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: WechatShopAuthorizationApiGetRequest): Promise<ApiResponse<WechatShopAuthorizationGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<WechatShopAuthorizationGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/wechat_shop_authorization/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "filtering", value: request.filtering, collectionFormat: "multi" },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


