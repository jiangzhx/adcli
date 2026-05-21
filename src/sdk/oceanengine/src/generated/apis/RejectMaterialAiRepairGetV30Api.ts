// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { RejectMaterialAiRepairGetV30Filtering, RejectMaterialAiRepairGetV30Response } from "../models";


export class RejectMaterialAiRepairGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30RejectMaterialAiRepairGetGet(advertiserId: number, filtering: RejectMaterialAiRepairGetV30Filtering, page: number, pageSize: number): Promise<RejectMaterialAiRepairGetV30Response> {
    const response = await this.openApiV30RejectMaterialAiRepairGetGetWithHttpInfo(advertiserId, filtering, page, pageSize);
    return response.data;
  }

  async openApiV30RejectMaterialAiRepairGetGetWithHttpInfo(advertiserId: number, filtering: RejectMaterialAiRepairGetV30Filtering, page: number, pageSize: number): Promise<ApiResponse<RejectMaterialAiRepairGetV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30RejectMaterialAiRepairGetGet");
    }
    return this.apiClient.requestWithHttpInfo<RejectMaterialAiRepairGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/reject_material/ai_repair/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "filtering", value: filtering },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


