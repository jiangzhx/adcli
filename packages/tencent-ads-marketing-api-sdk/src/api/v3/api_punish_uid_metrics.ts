// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_punish_uid_metrics.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { PunishUidMetricsGetRequest, PunishUidMetricsGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface PunishUidMetricsApiGetRequest {
  data: PunishUidMetricsGetRequest;
}


export class PunishUidMetricsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: PunishUidMetricsApiGetRequest): Promise<PunishUidMetricsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: PunishUidMetricsApiGetRequest): Promise<ApiResponse<PunishUidMetricsGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<PunishUidMetricsGetResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/punish_uid_metrics/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


