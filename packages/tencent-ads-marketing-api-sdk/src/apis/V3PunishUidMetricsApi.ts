// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { PunishUidMetricsGetRequest, PunishUidMetricsGetResponseData } from "../models";

export interface V3PunishUidMetricsApiGetRequest {
  data: PunishUidMetricsGetRequest;
}


export class V3PunishUidMetricsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3PunishUidMetricsApiGetRequest): Promise<PunishUidMetricsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3PunishUidMetricsApiGetRequest): Promise<ApiResponse<PunishUidMetricsGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<PunishUidMetricsGetResponseData>({
      method: "POST",
      path: "/punish_uid_metrics/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


