// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_punishment_config.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { PunishmentConfigGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface PunishmentConfigApiGetRequest {
  fields?: unknown;
}


export class PunishmentConfigApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: PunishmentConfigApiGetRequest): Promise<PunishmentConfigGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: PunishmentConfigApiGetRequest): Promise<ApiResponse<PunishmentConfigGetResponseData>> {

    return this.apiClient.requestWithHttpInfo<PunishmentConfigGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/punishment_config/get",
      queryParams: [
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


