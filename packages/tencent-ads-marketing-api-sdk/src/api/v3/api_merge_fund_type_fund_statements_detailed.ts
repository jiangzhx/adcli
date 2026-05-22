// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_merge_fund_type_fund_statements_detailed.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { DateRangeTransaction, MergeFundTypeFundStatementsDetailedGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface MergeFundTypeFundStatementsDetailedApiGetRequest {
  accountId: number | string;
  fundType: string;
  dateRange: DateRangeTransaction;
  page?: number;
  pageSize?: number;
  fields?: unknown;
}


export class MergeFundTypeFundStatementsDetailedApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: MergeFundTypeFundStatementsDetailedApiGetRequest): Promise<MergeFundTypeFundStatementsDetailedGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: MergeFundTypeFundStatementsDetailedApiGetRequest): Promise<ApiResponse<MergeFundTypeFundStatementsDetailedGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.fundType == null) {
      throw new ApiException("Missing the required parameter 'fundType' when calling get");
    }

    if (request.dateRange == null) {
      throw new ApiException("Missing the required parameter 'dateRange' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<MergeFundTypeFundStatementsDetailedGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/merge_fund_type_fund_statements_detailed/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "fund_type", value: request.fundType },
        { name: "date_range", value: request.dateRange },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


