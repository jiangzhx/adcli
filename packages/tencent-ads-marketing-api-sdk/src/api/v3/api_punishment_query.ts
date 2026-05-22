// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_punishment_query.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { PunishmentQueryGetRequest, PunishmentQueryGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface PunishmentQueryApiGetRequest {
  data: PunishmentQueryGetRequest;
}


export class PunishmentQueryApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: PunishmentQueryApiGetRequest): Promise<PunishmentQueryGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: PunishmentQueryApiGetRequest): Promise<ApiResponse<PunishmentQueryGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<PunishmentQueryGetResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/punishment_query/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


