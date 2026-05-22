// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { OuterCluesActionTypeReportRequest, OuterCluesActionTypeReportResponseData, OuterCluesAddRequest, OuterCluesAddResponseData, OuterCluesUpdateRequest, OuterCluesUpdateResponseData } from "../models";

export interface OuterCluesApiActionTypeReportRequest {
  data: OuterCluesActionTypeReportRequest;
}

export interface OuterCluesApiAddRequest {
  data: OuterCluesAddRequest;
}

export interface OuterCluesApiUpdateRequest {
  data: OuterCluesUpdateRequest;
}


export class OuterCluesApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async actionTypeReport(request: OuterCluesApiActionTypeReportRequest): Promise<OuterCluesActionTypeReportResponseData> {
    const response = await this.actionTypeReportWithHttpInfo(request);
    return response.data;
  }

  async actionTypeReportWithHttpInfo(request: OuterCluesApiActionTypeReportRequest): Promise<ApiResponse<OuterCluesActionTypeReportResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling actionTypeReport");
    }
    return this.apiClient.requestWithHttpInfo<OuterCluesActionTypeReportResponseData>({
      method: "POST",
      path: "/outer_clues/action_type_report",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async add(request: OuterCluesApiAddRequest): Promise<OuterCluesAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: OuterCluesApiAddRequest): Promise<ApiResponse<OuterCluesAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<OuterCluesAddResponseData>({
      method: "POST",
      path: "/outer_clues/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async update(request: OuterCluesApiUpdateRequest): Promise<OuterCluesUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: OuterCluesApiUpdateRequest): Promise<ApiResponse<OuterCluesUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<OuterCluesUpdateResponseData>({
      method: "POST",
      path: "/outer_clues/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


