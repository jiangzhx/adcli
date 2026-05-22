// Generated from tencentad/marketing-api-go-sdk pkg/api/api_wechat_pages_grantinfo.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { WechatPagesGrantinfoGetResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface WechatPagesGrantinfoApiGetRequest {
  accountId: number | string;
  searchKey?: string;
  page?: number;
  pageSize?: number;
  fields?: unknown;
}


export class WechatPagesGrantinfoApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: WechatPagesGrantinfoApiGetRequest): Promise<WechatPagesGrantinfoGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: WechatPagesGrantinfoApiGetRequest): Promise<ApiResponse<WechatPagesGrantinfoGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<WechatPagesGrantinfoGetResponseData>({
      method: "GET",
      basePath: TencentAdsV13Configuration.basePath,
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


