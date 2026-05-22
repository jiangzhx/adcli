// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_merge_fund_type_funds.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { MergeFundTypeFundsGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface MergeFundTypeFundsApiGetRequest {
  accountId: number | string;
  fields?: unknown;
}


export class MergeFundTypeFundsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: MergeFundTypeFundsApiGetRequest): Promise<MergeFundTypeFundsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: MergeFundTypeFundsApiGetRequest): Promise<ApiResponse<MergeFundTypeFundsGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<MergeFundTypeFundsGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/merge_fund_type_funds/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


