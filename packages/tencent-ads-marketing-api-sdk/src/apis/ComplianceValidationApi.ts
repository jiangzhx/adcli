// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ComplianceValidationGetRequest, ComplianceValidationGetResponseData } from "../models";

export interface ComplianceValidationApiGetRequest {
  data: ComplianceValidationGetRequest;
}


export class ComplianceValidationApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: ComplianceValidationApiGetRequest): Promise<ComplianceValidationGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: ComplianceValidationApiGetRequest): Promise<ApiResponse<ComplianceValidationGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<ComplianceValidationGetResponseData>({
      method: "POST",
      path: "/compliance_validation/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


