// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_wechat_channels_ad_account_wechat_binding.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { WechatChannelsAdAccountWechatBindingAddRequest, WechatChannelsAdAccountWechatBindingAddResponseData, WechatChannelsAdAccountWechatBindingGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface WechatChannelsAdAccountWechatBindingApiAddRequest {
  data: WechatChannelsAdAccountWechatBindingAddRequest;
}

export interface WechatChannelsAdAccountWechatBindingApiGetRequest {
  accountId: number | string;
  wechatBindAuthToken: string;
  fields?: unknown;
}


export class WechatChannelsAdAccountWechatBindingApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: WechatChannelsAdAccountWechatBindingApiAddRequest): Promise<WechatChannelsAdAccountWechatBindingAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: WechatChannelsAdAccountWechatBindingApiAddRequest): Promise<ApiResponse<WechatChannelsAdAccountWechatBindingAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<WechatChannelsAdAccountWechatBindingAddResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/wechat_channels_ad_account_wechat_binding/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: WechatChannelsAdAccountWechatBindingApiGetRequest): Promise<WechatChannelsAdAccountWechatBindingGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: WechatChannelsAdAccountWechatBindingApiGetRequest): Promise<ApiResponse<WechatChannelsAdAccountWechatBindingGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.wechatBindAuthToken == null) {
      throw new ApiException("Missing the required parameter 'wechatBindAuthToken' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<WechatChannelsAdAccountWechatBindingGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/wechat_channels_ad_account_wechat_binding/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "wechat_bind_auth_token", value: request.wechatBindAuthToken },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


