// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_wechat_channels_ad_account.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { WechatChannelsAdAccountAddRequest, WechatChannelsAdAccountAddResponseData, WechatChannelsAdAccountDeleteRequest, WechatChannelsAdAccountDeleteResponseData, WechatChannelsAdAccountGetResponseData, WechatChannelsAdAccountUpdateRequest, WechatChannelsAdAccountUpdateResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface WechatChannelsAdAccountApiAddRequest {
  data: WechatChannelsAdAccountAddRequest;
}

export interface WechatChannelsAdAccountApiDeleteRequest {
  data: WechatChannelsAdAccountDeleteRequest;
}

export interface WechatChannelsAdAccountApiGetRequest {
  accountId: number | string;
  filtering?: unknown;
  page?: number;
  pageSize?: number;
  fields?: unknown;
}

export interface WechatChannelsAdAccountApiUpdateRequest {
  data: WechatChannelsAdAccountUpdateRequest;
}


export class WechatChannelsAdAccountApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: WechatChannelsAdAccountApiAddRequest): Promise<WechatChannelsAdAccountAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: WechatChannelsAdAccountApiAddRequest): Promise<ApiResponse<WechatChannelsAdAccountAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<WechatChannelsAdAccountAddResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/wechat_channels_ad_account/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async delete(request: WechatChannelsAdAccountApiDeleteRequest): Promise<WechatChannelsAdAccountDeleteResponseData> {
    const response = await this.deleteWithHttpInfo(request);
    return response.data;
  }

  async deleteWithHttpInfo(request: WechatChannelsAdAccountApiDeleteRequest): Promise<ApiResponse<WechatChannelsAdAccountDeleteResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling delete");
    }
    return this.apiClient.requestWithHttpInfo<WechatChannelsAdAccountDeleteResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/wechat_channels_ad_account/delete",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: WechatChannelsAdAccountApiGetRequest): Promise<WechatChannelsAdAccountGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: WechatChannelsAdAccountApiGetRequest): Promise<ApiResponse<WechatChannelsAdAccountGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<WechatChannelsAdAccountGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
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

  async update(request: WechatChannelsAdAccountApiUpdateRequest): Promise<WechatChannelsAdAccountUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: WechatChannelsAdAccountApiUpdateRequest): Promise<ApiResponse<WechatChannelsAdAccountUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<WechatChannelsAdAccountUpdateResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/wechat_channels_ad_account/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


