// Generated from oceanengine/ad_open_sdk_go api/api_reject_material_ai_repair_cross_account_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { RejectMaterialAiRepairCrossAccountGetV30Response } from "../models/index";


export interface RejectMaterialAiRepairCrossAccountGetV30ApiOpenApiV30RejectMaterialAiRepairCrossAccountGetGetRequest {
  advertiserId: number | string;
  materialId: number | string;
}

export class RejectMaterialAiRepairCrossAccountGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30RejectMaterialAiRepairCrossAccountGetGet(request: RejectMaterialAiRepairCrossAccountGetV30ApiOpenApiV30RejectMaterialAiRepairCrossAccountGetGetRequest): Promise<RejectMaterialAiRepairCrossAccountGetV30Response> {
    const response = await this.openApiV30RejectMaterialAiRepairCrossAccountGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30RejectMaterialAiRepairCrossAccountGetGetWithHttpInfo(request: RejectMaterialAiRepairCrossAccountGetV30ApiOpenApiV30RejectMaterialAiRepairCrossAccountGetGetRequest): Promise<ApiResponse<RejectMaterialAiRepairCrossAccountGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30RejectMaterialAiRepairCrossAccountGetGet");
    }

    if (request.materialId == null) {
      throw new ApiException("Missing the required parameter 'materialId' when calling openApiV30RejectMaterialAiRepairCrossAccountGetGet");
    }
    return this.apiClient.requestWithHttpInfo<RejectMaterialAiRepairCrossAccountGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/reject_material/ai_repair/cross_account/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "material_id", value: request.materialId }
      ]
    });
  }
}


