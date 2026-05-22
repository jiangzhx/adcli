// Generated from tencentad/marketing-api-go-sdk pkg/api/api_queryword_rpt.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QuerywordRptGetRequest, QuerywordRptGetResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface QuerywordRptApiGetRequest {
  data: QuerywordRptGetRequest;
}


export class QuerywordRptApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: QuerywordRptApiGetRequest): Promise<QuerywordRptGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: QuerywordRptApiGetRequest): Promise<ApiResponse<QuerywordRptGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<QuerywordRptGetResponseData>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/queryword_rpt/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


