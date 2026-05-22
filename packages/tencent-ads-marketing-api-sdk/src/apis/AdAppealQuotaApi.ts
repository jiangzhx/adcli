// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdAppealQuotaGetRequest, AdAppealQuotaGetResponseData } from "../models";

export interface AdAppealQuotaApiGetRequest {
  data: AdAppealQuotaGetRequest;
}


export class AdAppealQuotaApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: AdAppealQuotaApiGetRequest): Promise<AdAppealQuotaGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: AdAppealQuotaApiGetRequest): Promise<ApiResponse<AdAppealQuotaGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<AdAppealQuotaGetResponseData>({
      method: "POST",
      path: "/ad_appeal_quota/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


