// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LocalStoresSearchInfoGetResponseData } from "../models";

export interface V3LocalStoresSearchInfoApiGetRequest {
  accountId: number | string;
  keyWord: string;
  page?: number;
  pageSize?: number;
  fields?: unknown;
}


export class V3LocalStoresSearchInfoApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3LocalStoresSearchInfoApiGetRequest): Promise<LocalStoresSearchInfoGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3LocalStoresSearchInfoApiGetRequest): Promise<ApiResponse<LocalStoresSearchInfoGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.keyWord == null) {
      throw new ApiException("Missing the required parameter 'keyWord' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<LocalStoresSearchInfoGetResponseData>({
      method: "GET",
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


