// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_realtime_cost.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { RealtimeCostGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface RealtimeCostApiGetRequest {
  accountId: number | string;
  level: string;
  date: string;
  filtering?: unknown;
  page?: number;
  pageSize?: number;
  fields?: unknown;
}


export class RealtimeCostApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: RealtimeCostApiGetRequest): Promise<RealtimeCostGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: RealtimeCostApiGetRequest): Promise<ApiResponse<RealtimeCostGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.level == null) {
      throw new ApiException("Missing the required parameter 'level' when calling get");
    }

    if (request.date == null) {
      throw new ApiException("Missing the required parameter 'date' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<RealtimeCostGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/realtime_cost/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "level", value: request.level },
        { name: "date", value: request.date },
        { name: "filtering", value: request.filtering, collectionFormat: "multi" },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


