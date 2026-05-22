// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StardeliveryTaskBudgetUpdateV30Request, StardeliveryTaskBudgetUpdateV30Response } from "../models";


export class StardeliveryTaskBudgetUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30StardeliveryTaskBudgetUpdatePost(request: StardeliveryTaskBudgetUpdateV30Request): Promise<StardeliveryTaskBudgetUpdateV30Response> {
    const response = await this.openApiV30StardeliveryTaskBudgetUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30StardeliveryTaskBudgetUpdatePostWithHttpInfo(request: StardeliveryTaskBudgetUpdateV30Request): Promise<ApiResponse<StardeliveryTaskBudgetUpdateV30Response>> {
    return this.apiClient.requestWithHttpInfo<StardeliveryTaskBudgetUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/stardelivery/task/budget/update/",
      queryParams: [

      ],
      body: request
    });
  }
}


