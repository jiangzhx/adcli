// Generated from tencentad/marketing-api-go-sdk pkg/api/api_compliance_validation.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ComplianceValidationGetRequest, ComplianceValidationGetResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

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
      basePath: TencentAdsV13Configuration.basePath,
      path: "/compliance_validation/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


