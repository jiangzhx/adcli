// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_leads_action_type_report.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { LeadsActionTypeReportAddRequest, LeadsActionTypeReportAddResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface LeadsActionTypeReportApiAddRequest {
  data: LeadsActionTypeReportAddRequest;
}


export class LeadsActionTypeReportApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: LeadsActionTypeReportApiAddRequest): Promise<LeadsActionTypeReportAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: LeadsActionTypeReportApiAddRequest): Promise<ApiResponse<LeadsActionTypeReportAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<LeadsActionTypeReportAddResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/leads_action_type_report/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


