// Generated from tencentad/marketing-api-go-sdk pkg/api/api_material_audit.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { MaterialAuditListRequest, MaterialAuditListResponseData, MaterialAuditSubmitRequest, MaterialAuditSubmitResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface MaterialAuditApiListRequest {
  data: MaterialAuditListRequest;
}

export interface MaterialAuditApiSubmitRequest {
  data: MaterialAuditSubmitRequest;
}


export class MaterialAuditApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async list(request: MaterialAuditApiListRequest): Promise<MaterialAuditListResponseData> {
    const response = await this.listWithHttpInfo(request);
    return response.data;
  }

  async listWithHttpInfo(request: MaterialAuditApiListRequest): Promise<ApiResponse<MaterialAuditListResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling list");
    }
    return this.apiClient.requestWithHttpInfo<MaterialAuditListResponseData>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/material_audit/list",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async submit(request: MaterialAuditApiSubmitRequest): Promise<MaterialAuditSubmitResponseData> {
    const response = await this.submitWithHttpInfo(request);
    return response.data;
  }

  async submitWithHttpInfo(request: MaterialAuditApiSubmitRequest): Promise<ApiResponse<MaterialAuditSubmitResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling submit");
    }
    return this.apiClient.requestWithHttpInfo<MaterialAuditSubmitResponseData>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/material_audit/submit",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


