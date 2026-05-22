// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { PunishmentConfigGetResponseData } from "../models";

export interface V3PunishmentConfigApiGetRequest {
  fields?: unknown;
}


export class V3PunishmentConfigApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3PunishmentConfigApiGetRequest): Promise<PunishmentConfigGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3PunishmentConfigApiGetRequest): Promise<ApiResponse<PunishmentConfigGetResponseData>> {

    return this.apiClient.requestWithHttpInfo<PunishmentConfigGetResponseData>({
      method: "GET",
      path: "/punishment_config/get",
      queryParams: [
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


