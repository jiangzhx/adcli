// Generated from tencentad/marketing-api-go-sdk pkg/api/api_local_stores_wxpay_merchants.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { LocalStoresWxpayMerchantsGetResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface LocalStoresWxpayMerchantsApiGetRequest {
  accountId: number | string;
  page?: number;
  pageSize?: number;
  fields?: unknown;
}


export class LocalStoresWxpayMerchantsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: LocalStoresWxpayMerchantsApiGetRequest): Promise<LocalStoresWxpayMerchantsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: LocalStoresWxpayMerchantsApiGetRequest): Promise<ApiResponse<LocalStoresWxpayMerchantsGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<LocalStoresWxpayMerchantsGetResponseData>({
      method: "GET",
      basePath: TencentAdsV13Configuration.basePath,
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


