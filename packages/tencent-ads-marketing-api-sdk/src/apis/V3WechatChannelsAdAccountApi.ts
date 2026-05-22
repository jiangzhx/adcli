// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { WechatChannelsAdAccountAddRequest, WechatChannelsAdAccountAddResponseData, WechatChannelsAdAccountDeleteRequest, WechatChannelsAdAccountDeleteResponseData, WechatChannelsAdAccountGetResponseData, WechatChannelsAdAccountUpdateRequest, WechatChannelsAdAccountUpdateResponseData } from "../models";

export interface V3WechatChannelsAdAccountApiAddRequest {
  data: WechatChannelsAdAccountAddRequest;
}

export interface V3WechatChannelsAdAccountApiDeleteRequest {
  data: WechatChannelsAdAccountDeleteRequest;
}

export interface V3WechatChannelsAdAccountApiGetRequest {
  accountId: number | string;
  filtering?: unknown;
  page?: number;
  pageSize?: number;
  fields?: unknown;
}

export interface V3WechatChannelsAdAccountApiUpdateRequest {
  data: WechatChannelsAdAccountUpdateRequest;
}


export class V3WechatChannelsAdAccountApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: V3WechatChannelsAdAccountApiAddRequest): Promise<WechatChannelsAdAccountAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: V3WechatChannelsAdAccountApiAddRequest): Promise<ApiResponse<WechatChannelsAdAccountAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<WechatChannelsAdAccountAddResponseData>({
      method: "POST",
      path: "/wechat_channels_ad_account/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async delete(request: V3WechatChannelsAdAccountApiDeleteRequest): Promise<WechatChannelsAdAccountDeleteResponseData> {
    const response = await this.deleteWithHttpInfo(request);
    return response.data;
  }

  async deleteWithHttpInfo(request: V3WechatChannelsAdAccountApiDeleteRequest): Promise<ApiResponse<WechatChannelsAdAccountDeleteResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling delete");
    }
    return this.apiClient.requestWithHttpInfo<WechatChannelsAdAccountDeleteResponseData>({
      method: "POST",
      path: "/wechat_channels_ad_account/delete",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: V3WechatChannelsAdAccountApiGetRequest): Promise<WechatChannelsAdAccountGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3WechatChannelsAdAccountApiGetRequest): Promise<ApiResponse<WechatChannelsAdAccountGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<WechatChannelsAdAccountGetResponseData>({
      method: "GET",
      path: "/wechat_channels_ad_account/get",
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

  async update(request: V3WechatChannelsAdAccountApiUpdateRequest): Promise<WechatChannelsAdAccountUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: V3WechatChannelsAdAccountApiUpdateRequest): Promise<ApiResponse<WechatChannelsAdAccountUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<WechatChannelsAdAccountUpdateResponseData>({
      method: "POST",
      path: "/wechat_channels_ad_account/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


