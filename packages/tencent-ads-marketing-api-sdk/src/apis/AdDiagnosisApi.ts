// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdDiagnosisGetRequest, AdDiagnosisGetResponseData } from "../models";

export interface AdDiagnosisApiGetRequest {
  data: AdDiagnosisGetRequest;
}


export class AdDiagnosisApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: AdDiagnosisApiGetRequest): Promise<AdDiagnosisGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: AdDiagnosisApiGetRequest): Promise<ApiResponse<AdDiagnosisGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<AdDiagnosisGetResponseData>({
      method: "POST",
      path: "/ad_diagnosis/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


