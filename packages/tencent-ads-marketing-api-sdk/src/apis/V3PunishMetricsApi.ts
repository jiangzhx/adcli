// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { PunishMetricsGetRequest, PunishMetricsGetResponseData } from "../models";

export interface V3PunishMetricsApiGetRequest {
  data: PunishMetricsGetRequest;
}


export class V3PunishMetricsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3PunishMetricsApiGetRequest): Promise<PunishMetricsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3PunishMetricsApiGetRequest): Promise<ApiResponse<PunishMetricsGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<PunishMetricsGetResponseData>({
      method: "POST",
      path: "/punish_metrics/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


