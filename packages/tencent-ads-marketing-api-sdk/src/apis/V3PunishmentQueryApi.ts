// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { PunishmentQueryGetRequest, PunishmentQueryGetResponseData } from "../models";

export interface V3PunishmentQueryApiGetRequest {
  data: PunishmentQueryGetRequest;
}


export class V3PunishmentQueryApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3PunishmentQueryApiGetRequest): Promise<PunishmentQueryGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3PunishmentQueryApiGetRequest): Promise<ApiResponse<PunishmentQueryGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<PunishmentQueryGetResponseData>({
      method: "POST",
      path: "/punishment_query/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


