// Generated from oceanengine/ad_open_sdk_go api/api_reject_material_ai_repair_accept_task_list_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { RejectMaterialAiRepairAcceptTaskListV30Response } from "../models/index";


export interface RejectMaterialAiRepairAcceptTaskListV30ApiOpenApiV30RejectMaterialAiRepairAcceptTaskListGetRequest {
  advertiserId: number | string;
  aiRepairIds: number | string[];
}

export class RejectMaterialAiRepairAcceptTaskListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30RejectMaterialAiRepairAcceptTaskListGet(request: RejectMaterialAiRepairAcceptTaskListV30ApiOpenApiV30RejectMaterialAiRepairAcceptTaskListGetRequest): Promise<RejectMaterialAiRepairAcceptTaskListV30Response> {
    const response = await this.openApiV30RejectMaterialAiRepairAcceptTaskListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30RejectMaterialAiRepairAcceptTaskListGetWithHttpInfo(request: RejectMaterialAiRepairAcceptTaskListV30ApiOpenApiV30RejectMaterialAiRepairAcceptTaskListGetRequest): Promise<ApiResponse<RejectMaterialAiRepairAcceptTaskListV30Response>> {
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


