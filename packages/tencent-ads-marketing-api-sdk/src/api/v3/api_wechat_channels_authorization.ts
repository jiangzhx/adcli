// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_wechat_channels_authorization.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { WechatChannelsAuthorizationAddRequest, WechatChannelsAuthorizationAddResponseData, WechatChannelsAuthorizationDeleteRequest, WechatChannelsAuthorizationDeleteResponseData, WechatChannelsAuthorizationGetResponseData, WechatChannelsAuthorizationUpdateRequest, WechatChannelsAuthorizationUpdateResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface WechatChannelsAuthorizationApiAddRequest {
  data: WechatChannelsAuthorizationAddRequest;
}

export interface WechatChannelsAuthorizationApiDeleteRequest {
  data: WechatChannelsAuthorizationDeleteRequest;
}

export interface WechatChannelsAuthorizationApiGetRequest {
  accountId: number | string;
  wechatChannelsAccountName?: string;
  page?: number;
  pageSize?: number;
  filtering?: unknown;
  fields?: unknown;
}

export interface WechatChannelsAuthorizationApiUpdateRequest {
  data: WechatChannelsAuthorizationUpdateRequest;
}


export class WechatChannelsAuthorizationApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: WechatChannelsAuthorizationApiAddRequest): Promise<WechatChannelsAuthorizationAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: WechatChannelsAuthorizationApiAddRequest): Promise<ApiResponse<WechatChannelsAuthorizationAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<WechatChannelsAuthorizationAddResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/wechat_channels_authorization/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async delete(request: WechatChannelsAuthorizationApiDeleteRequest): Promise<WechatChannelsAuthorizationDeleteResponseData> {
    const response = await this.deleteWithHttpInfo(request);
    return response.data;
  }

  async deleteWithHttpInfo(request: WechatChannelsAuthorizationApiDeleteRequest): Promise<ApiResponse<WechatChannelsAuthorizationDeleteResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling delete");
    }
    return this.apiClient.requestWithHttpInfo<WechatChannelsAuthorizationDeleteResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/wechat_channels_authorization/delete",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: WechatChannelsAuthorizationApiGetRequest): Promise<WechatChannelsAuthorizationGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: WechatChannelsAuthorizationApiGetRequest): Promise<ApiResponse<WechatChannelsAuthorizationGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<WechatChannelsAuthorizationGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
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

  async update(request: WechatChannelsAuthorizationApiUpdateRequest): Promise<WechatChannelsAuthorizationUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: WechatChannelsAuthorizationApiUpdateRequest): Promise<ApiResponse<WechatChannelsAuthorizationUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<WechatChannelsAuthorizationUpdateResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/wechat_channels_authorization/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


