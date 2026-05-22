// Generated from oceanengine/ad_open_sdk_go api/api_reject_material_ai_repair_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { RejectMaterialAiRepairGetV30Filtering, RejectMaterialAiRepairGetV30Response } from "../models/index";


export interface RejectMaterialAiRepairGetV30ApiOpenApiV30RejectMaterialAiRepairGetGetRequest {
  advertiserId: number | string;
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

  async openApiV30RejectMaterialAiRepairGetGet(request: RejectMaterialAiRepairGetV30ApiOpenApiV30RejectMaterialAiRepairGetGetRequest): Promise<RejectMaterialAiRepairGetV30Response> {
    const response = await this.openApiV30RejectMaterialAiRepairGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30RejectMaterialAiRepairGetGetWithHttpInfo(request: RejectMaterialAiRepairGetV30ApiOpenApiV30RejectMaterialAiRepairGetGetRequest): Promise<ApiResponse<RejectMaterialAiRepairGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
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


