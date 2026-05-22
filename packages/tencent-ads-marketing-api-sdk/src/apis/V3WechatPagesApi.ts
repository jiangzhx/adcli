// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { WechatPagesAddRequest, WechatPagesAddResponseData, WechatPagesDeleteRequest, WechatPagesDeleteResponseData, WechatPagesGetResponseData } from "../models";

export interface V3WechatPagesApiAddRequest {
  data: WechatPagesAddRequest;
}

export interface V3WechatPagesApiDeleteRequest {
  data: WechatPagesDeleteRequest;
}

export interface V3WechatPagesApiGetRequest {
  accountId: number | string;
  ownerUid?: number;
  filtering?: unknown;
  page?: number;
  pageSize?: number;
  fields?: unknown;
}


export class V3WechatPagesApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: V3WechatPagesApiAddRequest): Promise<WechatPagesAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: V3WechatPagesApiAddRequest): Promise<ApiResponse<WechatPagesAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<WechatPagesAddResponseData>({
      method: "POST",
      path: "/wechat_pages/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async delete(request: V3WechatPagesApiDeleteRequest): Promise<WechatPagesDeleteResponseData> {
    const response = await this.deleteWithHttpInfo(request);
    return response.data;
  }

  async deleteWithHttpInfo(request: V3WechatPagesApiDeleteRequest): Promise<ApiResponse<WechatPagesDeleteResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling delete");
    }
    return this.apiClient.requestWithHttpInfo<WechatPagesDeleteResponseData>({
      method: "POST",
      path: "/wechat_pages/delete",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: V3WechatPagesApiGetRequest): Promise<WechatPagesGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3WechatPagesApiGetRequest): Promise<ApiResponse<WechatPagesGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<WechatPagesGetResponseData>({
      method: "GET",
      path: "/wechat_pages/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "owner_uid", value: request.ownerUid },
        { name: "filtering", value: request.filtering, collectionFormat: "multi" },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


