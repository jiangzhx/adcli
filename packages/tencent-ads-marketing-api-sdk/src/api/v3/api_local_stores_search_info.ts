// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_local_stores_search_info.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { LocalStoresSearchInfoGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface LocalStoresSearchInfoApiGetRequest {
  accountId: number | string;
  keyWord: string;
  page?: number;
  pageSize?: number;
  fields?: unknown;
}


export class LocalStoresSearchInfoApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: LocalStoresSearchInfoApiGetRequest): Promise<LocalStoresSearchInfoGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: LocalStoresSearchInfoApiGetRequest): Promise<ApiResponse<LocalStoresSearchInfoGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.keyWord == null) {
      throw new ApiException("Missing the required parameter 'keyWord' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<LocalStoresSearchInfoGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/local_stores_search_info/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "key_word", value: request.keyWord },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


