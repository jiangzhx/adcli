// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { WechatPagesGrantinfoGetResponseData } from "../models";

export interface V3WechatPagesGrantinfoApiGetRequest {
  accountId: number | string;
  searchKey?: string;
  page?: number;
  pageSize?: number;
  fields?: unknown;
}


export class V3WechatPagesGrantinfoApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3WechatPagesGrantinfoApiGetRequest): Promise<WechatPagesGrantinfoGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3WechatPagesGrantinfoApiGetRequest): Promise<ApiResponse<WechatPagesGrantinfoGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<WechatPagesGrantinfoGetResponseData>({
      method: "GET",
      path: "/wechat_pages_grantinfo/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "search_key", value: request.searchKey },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


