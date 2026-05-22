// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { RejectMaterialAiRepairAcceptTaskListV30Response } from "../models";


export interface OpenApiV30RejectMaterialAiRepairAcceptTaskListGetRequest {
  advertiserId: number;
  aiRepairIds: number[];
}

export class RejectMaterialAiRepairAcceptTaskListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30RejectMaterialAiRepairAcceptTaskListGet(request: OpenApiV30RejectMaterialAiRepairAcceptTaskListGetRequest): Promise<RejectMaterialAiRepairAcceptTaskListV30Response> {
    const response = await this.openApiV30RejectMaterialAiRepairAcceptTaskListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30RejectMaterialAiRepairAcceptTaskListGetWithHttpInfo(request: OpenApiV30RejectMaterialAiRepairAcceptTaskListGetRequest): Promise<ApiResponse<RejectMaterialAiRepairAcceptTaskListV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30RejectMaterialAiRepairAcceptTaskListGet");
    }

    if (request.aiRepairIds == null) {
      throw new ApiException("Missing the required parameter 'aiRepairIds' when calling openApiV30RejectMaterialAiRepairAcceptTaskListGet");
    }
    return this.apiClient.requestWithHttpInfo<RejectMaterialAiRepairAcceptTaskListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/reject_material/ai_repair_accept_task/list/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "ai_repair_ids", value: request.aiRepairIds, collectionFormat: "csv" }
      ]
    });
  }
}


