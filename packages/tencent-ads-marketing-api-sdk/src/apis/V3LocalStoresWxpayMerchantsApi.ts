// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LocalStoresWxpayMerchantsGetResponseData } from "../models";

export interface V3LocalStoresWxpayMerchantsApiGetRequest {
  accountId: number | string;
  page?: number;
  pageSize?: number;
  fields?: unknown;
}


export class V3LocalStoresWxpayMerchantsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3LocalStoresWxpayMerchantsApiGetRequest): Promise<LocalStoresWxpayMerchantsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3LocalStoresWxpayMerchantsApiGetRequest): Promise<ApiResponse<LocalStoresWxpayMerchantsGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<LocalStoresWxpayMerchantsGetResponseData>({
      method: "GET",
      path: "/local_stores_wxpay_merchants/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


