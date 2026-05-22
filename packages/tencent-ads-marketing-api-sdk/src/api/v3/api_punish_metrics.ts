// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_punish_metrics.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { PunishMetricsGetRequest, PunishMetricsGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface PunishMetricsApiGetRequest {
  data: PunishMetricsGetRequest;
}


export class PunishMetricsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: PunishMetricsApiGetRequest): Promise<PunishMetricsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: PunishMetricsApiGetRequest): Promise<ApiResponse<PunishMetricsGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<PunishMetricsGetResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/punish_metrics/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


