// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_punish_detail.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { PunishDetailGetRequest, PunishDetailGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface PunishDetailApiGetRequest {
  data: PunishDetailGetRequest;
}


export class PunishDetailApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: PunishDetailApiGetRequest): Promise<PunishDetailGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: PunishDetailApiGetRequest): Promise<ApiResponse<PunishDetailGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<PunishDetailGetResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/punish_detail/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


