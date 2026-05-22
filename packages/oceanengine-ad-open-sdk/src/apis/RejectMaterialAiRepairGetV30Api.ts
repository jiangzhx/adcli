// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { RejectMaterialAiRepairGetV30Filtering, RejectMaterialAiRepairGetV30Response } from "../models";


export interface OpenApiV30RejectMaterialAiRepairGetGetRequest {
  advertiserId: number;
  filtering?: RejectMaterialAiRepairGetV30Filtering;
  page?: number;
  pageSize?: number;
}

export class RejectMaterialAiRepairGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30RejectMaterialAiRepairGetGet(request: OpenApiV30RejectMaterialAiRepairGetGetRequest): Promise<RejectMaterialAiRepairGetV30Response> {
    const response = await this.openApiV30RejectMaterialAiRepairGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30RejectMaterialAiRepairGetGetWithHttpInfo(request: OpenApiV30RejectMaterialAiRepairGetGetRequest): Promise<ApiResponse<RejectMaterialAiRepairGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30RejectMaterialAiRepairGetGet");
    }
    return this.apiClient.requestWithHttpInfo<RejectMaterialAiRepairGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/reject_material/ai_repair/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


