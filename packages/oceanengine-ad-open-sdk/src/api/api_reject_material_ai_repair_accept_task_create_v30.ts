// Generated from oceanengine/ad_open_sdk_go api/api_reject_material_ai_repair_accept_task_create_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { RejectMaterialAiRepairAcceptTaskCreateV30Request, RejectMaterialAiRepairAcceptTaskCreateV30Response } from "../models/index";


export interface RejectMaterialAiRepairAcceptTaskCreateV30ApiOpenApiV30RejectMaterialAiRepairAcceptTaskCreatePostRequest {
  rejectMaterialAiRepairAcceptTaskCreateV30Request?: RejectMaterialAiRepairAcceptTaskCreateV30Request;
}

export class RejectMaterialAiRepairAcceptTaskCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30RejectMaterialAiRepairAcceptTaskCreatePost(request: RejectMaterialAiRepairAcceptTaskCreateV30ApiOpenApiV30RejectMaterialAiRepairAcceptTaskCreatePostRequest): Promise<RejectMaterialAiRepairAcceptTaskCreateV30Response> {
    const response = await this.openApiV30RejectMaterialAiRepairAcceptTaskCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30RejectMaterialAiRepairAcceptTaskCreatePostWithHttpInfo(request: RejectMaterialAiRepairAcceptTaskCreateV30ApiOpenApiV30RejectMaterialAiRepairAcceptTaskCreatePostRequest): Promise<ApiResponse<RejectMaterialAiRepairAcceptTaskCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<RejectMaterialAiRepairAcceptTaskCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/reject_material/ai_repair_accept_task/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.rejectMaterialAiRepairAcceptTaskCreateV30Request
    });
  }
}


