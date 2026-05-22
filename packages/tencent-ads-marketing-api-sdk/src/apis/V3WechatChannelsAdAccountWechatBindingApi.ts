// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { WechatChannelsAdAccountWechatBindingAddRequest, WechatChannelsAdAccountWechatBindingAddResponseData, WechatChannelsAdAccountWechatBindingGetResponseData } from "../models";

export interface V3WechatChannelsAdAccountWechatBindingApiAddRequest {
  data: WechatChannelsAdAccountWechatBindingAddRequest;
}

export interface V3WechatChannelsAdAccountWechatBindingApiGetRequest {
  accountId: number | string;
  wechatBindAuthToken: string;
  fields?: unknown;
}


export class V3WechatChannelsAdAccountWechatBindingApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: V3WechatChannelsAdAccountWechatBindingApiAddRequest): Promise<WechatChannelsAdAccountWechatBindingAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: V3WechatChannelsAdAccountWechatBindingApiAddRequest): Promise<ApiResponse<WechatChannelsAdAccountWechatBindingAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<WechatChannelsAdAccountWechatBindingAddResponseData>({
      method: "POST",
      path: "/wechat_channels_ad_account_wechat_binding/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: V3WechatChannelsAdAccountWechatBindingApiGetRequest): Promise<WechatChannelsAdAccountWechatBindingGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3WechatChannelsAdAccountWechatBindingApiGetRequest): Promise<ApiResponse<WechatChannelsAdAccountWechatBindingGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.wechatBindAuthToken == null) {
      throw new ApiException("Missing the required parameter 'wechatBindAuthToken' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<WechatChannelsAdAccountWechatBindingGetResponseData>({
      method: "GET",
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


