// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { WechatStoreCatalogsGetResponseData } from "../models";

export interface V3WechatStoreCatalogsApiGetRequest {
  accountId: number | string;
  storeIds?: unknown;
  catalogIds?: unknown;
  catalogName?: string;
  page?: number;
  pageSize?: number;
  fields?: unknown;
}


export class V3WechatStoreCatalogsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3WechatStoreCatalogsApiGetRequest): Promise<WechatStoreCatalogsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3WechatStoreCatalogsApiGetRequest): Promise<ApiResponse<WechatStoreCatalogsGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<WechatStoreCatalogsGetResponseData>({
      method: "GET",
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


