// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StardeliveryTaskBudgetUpdateV30Request, StardeliveryTaskBudgetUpdateV30Response } from "../models";


export interface OpenApiV30StardeliveryTaskBudgetUpdatePostRequest {
  stardeliveryTaskBudgetUpdateV30Request?: StardeliveryTaskBudgetUpdateV30Request;
}

export class StardeliveryTaskBudgetUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30StardeliveryTaskBudgetUpdatePost(request: OpenApiV30StardeliveryTaskBudgetUpdatePostRequest): Promise<StardeliveryTaskBudgetUpdateV30Response> {
    const response = await this.openApiV30StardeliveryTaskBudgetUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30StardeliveryTaskBudgetUpdatePostWithHttpInfo(request: OpenApiV30StardeliveryTaskBudgetUpdatePostRequest): Promise<ApiResponse<StardeliveryTaskBudgetUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<StardeliveryTaskBudgetUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/stardelivery/task/budget/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.stardeliveryTaskBudgetUpdateV30Request
    });
  }
}


