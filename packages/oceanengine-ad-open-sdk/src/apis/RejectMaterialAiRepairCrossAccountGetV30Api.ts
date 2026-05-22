// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { RejectMaterialAiRepairCrossAccountGetV30Response } from "../models";


export class RejectMaterialAiRepairCrossAccountGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30RejectMaterialAiRepairCrossAccountGetGet(advertiserId: number, materialId: number): Promise<RejectMaterialAiRepairCrossAccountGetV30Response> {
    const response = await this.openApiV30RejectMaterialAiRepairCrossAccountGetGetWithHttpInfo(advertiserId, materialId);
    return response.data;
  }

  async openApiV30RejectMaterialAiRepairCrossAccountGetGetWithHttpInfo(advertiserId: number, materialId: number): Promise<ApiResponse<RejectMaterialAiRepairCrossAccountGetV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30RejectMaterialAiRepairCrossAccountGetGet");
    }

    if (materialId == null) {
      throw new ApiException("Missing the required parameter 'materialId' when calling openApiV30RejectMaterialAiRepairCrossAccountGetGet");
    }
    return this.apiClient.requestWithHttpInfo<RejectMaterialAiRepairCrossAccountGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/reject_material/ai_repair/cross_account/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "material_id", value: materialId }
      ]
    });
  }
}


