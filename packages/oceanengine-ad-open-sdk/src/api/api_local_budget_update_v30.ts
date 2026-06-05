// 由 oceanengine/ad_open_sdk_go api/api_local_budget_update_v30.go 生成
// 不要手动编辑。

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { LocalBudgetUpdateV30Request, LocalBudgetUpdateV30Response } from "../models/index";


export interface LocalBudgetUpdateV30ApiOpenApiV30LocalBudgetUpdatePostRequest {
  localBudgetUpdateV30Request?: LocalBudgetUpdateV30Request;
}

export class LocalBudgetUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalBudgetUpdatePost(request: LocalBudgetUpdateV30ApiOpenApiV30LocalBudgetUpdatePostRequest): Promise<LocalBudgetUpdateV30Response> {
    const response = await this.openApiV30LocalBudgetUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalBudgetUpdatePostWithHttpInfo(request: LocalBudgetUpdateV30ApiOpenApiV30LocalBudgetUpdatePostRequest): Promise<ApiResponse<LocalBudgetUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<LocalBudgetUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/local/budget/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.localBudgetUpdateV30Request
    });
  }
}


