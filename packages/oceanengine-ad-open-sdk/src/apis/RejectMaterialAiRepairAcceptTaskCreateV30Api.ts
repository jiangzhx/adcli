// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { RejectMaterialAiRepairAcceptTaskCreateV30Request, RejectMaterialAiRepairAcceptTaskCreateV30Response } from "../models";


export class RejectMaterialAiRepairAcceptTaskCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30RejectMaterialAiRepairAcceptTaskCreatePost(request: RejectMaterialAiRepairAcceptTaskCreateV30Request): Promise<RejectMaterialAiRepairAcceptTaskCreateV30Response> {
    const response = await this.openApiV30RejectMaterialAiRepairAcceptTaskCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30RejectMaterialAiRepairAcceptTaskCreatePostWithHttpInfo(request: RejectMaterialAiRepairAcceptTaskCreateV30Request): Promise<ApiResponse<RejectMaterialAiRepairAcceptTaskCreateV30Response>> {
    return this.apiClient.requestWithHttpInfo<RejectMaterialAiRepairAcceptTaskCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/reject_material/ai_repair_accept_task/create/",
      queryParams: [

      ],
      body: request
    });
  }
}


