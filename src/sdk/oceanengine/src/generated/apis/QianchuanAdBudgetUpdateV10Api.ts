// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { QianchuanAdBudgetUpdateV10Request, QianchuanAdBudgetUpdateV10Response } from "../models";


export class QianchuanAdBudgetUpdateV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAdBudgetUpdatePost(qianchuanAdBudgetUpdateV10Request: QianchuanAdBudgetUpdateV10Request): Promise<QianchuanAdBudgetUpdateV10Response> {
    const response = await this.openApiV10QianchuanAdBudgetUpdatePostWithHttpInfo(qianchuanAdBudgetUpdateV10Request);
    return response.data;
  }

  async openApiV10QianchuanAdBudgetUpdatePostWithHttpInfo(qianchuanAdBudgetUpdateV10Request: QianchuanAdBudgetUpdateV10Request): Promise<ApiResponse<QianchuanAdBudgetUpdateV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanAdBudgetUpdateV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/ad/budget/update/",
      queryParams: [

      ],
      body: qianchuanAdBudgetUpdateV10Request
    });
  }
}


