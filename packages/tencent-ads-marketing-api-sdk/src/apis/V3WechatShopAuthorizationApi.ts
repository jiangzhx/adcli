// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { WechatShopAuthorizationAddRequest, WechatShopAuthorizationAddResponseData, WechatShopAuthorizationGetResponseData } from "../models";

export interface V3WechatShopAuthorizationApiAddRequest {
  data: WechatShopAuthorizationAddRequest;
}

export interface V3WechatShopAuthorizationApiGetRequest {
  accountId: number | string;
  filtering?: unknown;
  page?: number;
  pageSize?: number;
  fields?: unknown;
}


export class V3WechatShopAuthorizationApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: V3WechatShopAuthorizationApiAddRequest): Promise<WechatShopAuthorizationAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: V3WechatShopAuthorizationApiAddRequest): Promise<ApiResponse<WechatShopAuthorizationAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<WechatShopAuthorizationAddResponseData>({
      method: "POST",
      path: "/wechat_shop_authorization/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: V3WechatShopAuthorizationApiGetRequest): Promise<WechatShopAuthorizationGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3WechatShopAuthorizationApiGetRequest): Promise<ApiResponse<WechatShopAuthorizationGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<WechatShopAuthorizationGetResponseData>({
      method: "GET",
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


