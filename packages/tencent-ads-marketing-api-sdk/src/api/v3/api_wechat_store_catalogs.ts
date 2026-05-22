// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_wechat_store_catalogs.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { WechatStoreCatalogsGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface WechatStoreCatalogsApiGetRequest {
  accountId: number | string;
  storeIds?: unknown;
  catalogIds?: unknown;
  catalogName?: string;
  page?: number;
  pageSize?: number;
  fields?: unknown;
}


export class WechatStoreCatalogsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: WechatStoreCatalogsApiGetRequest): Promise<WechatStoreCatalogsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: WechatStoreCatalogsApiGetRequest): Promise<ApiResponse<WechatStoreCatalogsGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<WechatStoreCatalogsGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/wechat_store_catalogs/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "store_ids", value: request.storeIds, collectionFormat: "multi" },
        { name: "catalog_ids", value: request.catalogIds, collectionFormat: "multi" },
        { name: "catalog_name", value: request.catalogName },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


