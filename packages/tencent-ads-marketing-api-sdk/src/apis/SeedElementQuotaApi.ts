// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { SeedElementQuotaGetRequest, SeedElementQuotaGetResponseData } from "../models";

export interface SeedElementQuotaApiGetRequest {
  data: SeedElementQuotaGetRequest;
}


export class SeedElementQuotaApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: SeedElementQuotaApiGetRequest): Promise<SeedElementQuotaGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: SeedElementQuotaApiGetRequest): Promise<ApiResponse<SeedElementQuotaGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<SeedElementQuotaGetResponseData>({
      method: "POST",
      path: "/seed_element_quota/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


