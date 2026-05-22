// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_leads_list.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { LeadsListGetResponseData, TimeRange } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface LeadsListApiGetRequest {
  accountId: number | string;
  timeRange: TimeRange;
  page?: number;
  pageSize?: number;
  lastSearchAfterValues?: unknown;
  fields?: unknown;
}


export class LeadsListApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: LeadsListApiGetRequest): Promise<LeadsListGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: LeadsListApiGetRequest): Promise<ApiResponse<LeadsListGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.timeRange == null) {
      throw new ApiException("Missing the required parameter 'timeRange' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<LeadsListGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/leads_list/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "time_range", value: request.timeRange },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "last_search_after_values", value: request.lastSearchAfterValues, collectionFormat: "multi" },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


