// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { WechatChannelsAuthorizationAddRequest, WechatChannelsAuthorizationAddResponseData, WechatChannelsAuthorizationDeleteRequest, WechatChannelsAuthorizationDeleteResponseData, WechatChannelsAuthorizationGetResponseData, WechatChannelsAuthorizationUpdateRequest, WechatChannelsAuthorizationUpdateResponseData } from "../models";

export interface V3WechatChannelsAuthorizationApiAddRequest {
  data: WechatChannelsAuthorizationAddRequest;
}

export interface V3WechatChannelsAuthorizationApiDeleteRequest {
  data: WechatChannelsAuthorizationDeleteRequest;
}

export interface V3WechatChannelsAuthorizationApiGetRequest {
  accountId: number | string;
  wechatChannelsAccountName?: string;
  page?: number;
  pageSize?: number;
  filtering?: unknown;
  fields?: unknown;
}

export interface V3WechatChannelsAuthorizationApiUpdateRequest {
  data: WechatChannelsAuthorizationUpdateRequest;
}


export class V3WechatChannelsAuthorizationApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: V3WechatChannelsAuthorizationApiAddRequest): Promise<WechatChannelsAuthorizationAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: V3WechatChannelsAuthorizationApiAddRequest): Promise<ApiResponse<WechatChannelsAuthorizationAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<WechatChannelsAuthorizationAddResponseData>({
      method: "POST",
      path: "/wechat_channels_authorization/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async delete(request: V3WechatChannelsAuthorizationApiDeleteRequest): Promise<WechatChannelsAuthorizationDeleteResponseData> {
    const response = await this.deleteWithHttpInfo(request);
    return response.data;
  }

  async deleteWithHttpInfo(request: V3WechatChannelsAuthorizationApiDeleteRequest): Promise<ApiResponse<WechatChannelsAuthorizationDeleteResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling delete");
    }
    return this.apiClient.requestWithHttpInfo<WechatChannelsAuthorizationDeleteResponseData>({
      method: "POST",
      path: "/wechat_channels_authorization/delete",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: V3WechatChannelsAuthorizationApiGetRequest): Promise<WechatChannelsAuthorizationGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3WechatChannelsAuthorizationApiGetRequest): Promise<ApiResponse<WechatChannelsAuthorizationGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<WechatChannelsAuthorizationGetResponseData>({
      method: "GET",
      path: "/wechat_channels_authorization/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "wechat_channels_account_name", value: request.wechatChannelsAccountName },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "filtering", value: request.filtering, collectionFormat: "multi" },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

  async update(request: V3WechatChannelsAuthorizationApiUpdateRequest): Promise<WechatChannelsAuthorizationUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: V3WechatChannelsAuthorizationApiUpdateRequest): Promise<ApiResponse<WechatChannelsAuthorizationUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<WechatChannelsAuthorizationUpdateResponseData>({
      method: "POST",
      path: "/wechat_channels_authorization/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


