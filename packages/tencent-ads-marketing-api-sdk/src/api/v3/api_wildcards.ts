// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_wildcards.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { WildcardsGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface WildcardsApiGetRequest {
  accountId: number | string;
  productCatalogId: number | string;
  marketingCarrierType: string;
  fields?: unknown;
}


export class WildcardsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: WildcardsApiGetRequest): Promise<WildcardsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: WildcardsApiGetRequest): Promise<ApiResponse<WildcardsGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.productCatalogId == null) {
      throw new ApiException("Missing the required parameter 'productCatalogId' when calling get");
    }

    if (request.marketingCarrierType == null) {
      throw new ApiException("Missing the required parameter 'marketingCarrierType' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<WildcardsGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/wildcards/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "product_catalog_id", value: request.productCatalogId },
        { name: "marketing_carrier_type", value: request.marketingCarrierType },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


