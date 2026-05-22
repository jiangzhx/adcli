// Generated from tencentad/marketing-api-go-sdk pkg/api/api_agency_realtime_cost.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AgencyRealtimeCostGetResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface AgencyRealtimeCostApiGetRequest {
  accountId: number | string;
  fields?: unknown;
}


export class AgencyRealtimeCostApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: AgencyRealtimeCostApiGetRequest): Promise<AgencyRealtimeCostGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: AgencyRealtimeCostApiGetRequest): Promise<ApiResponse<AgencyRealtimeCostGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<AgencyRealtimeCostGetResponseData>({
      method: "GET",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/agency_realtime_cost/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


