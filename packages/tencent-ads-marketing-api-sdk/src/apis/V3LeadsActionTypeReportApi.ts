// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LeadsActionTypeReportAddRequest, LeadsActionTypeReportAddResponseData } from "../models";

export interface V3LeadsActionTypeReportApiAddRequest {
  data: LeadsActionTypeReportAddRequest;
}


export class V3LeadsActionTypeReportApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: V3LeadsActionTypeReportApiAddRequest): Promise<LeadsActionTypeReportAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: V3LeadsActionTypeReportApiAddRequest): Promise<ApiResponse<LeadsActionTypeReportAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<LeadsActionTypeReportAddResponseData>({
      method: "POST",
      path: "/leads_action_type_report/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


