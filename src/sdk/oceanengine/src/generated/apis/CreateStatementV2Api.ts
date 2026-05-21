// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { CreateStatementV2Request, CreateStatementV2Response } from "../models";


export class CreateStatementV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2CreateStatementPost(createStatementV2Request: CreateStatementV2Request): Promise<CreateStatementV2Response> {
    const response = await this.openApi2CreateStatementPostWithHttpInfo(createStatementV2Request);
    return response.data;
  }

  async openApi2CreateStatementPostWithHttpInfo(createStatementV2Request: CreateStatementV2Request): Promise<ApiResponse<CreateStatementV2Response>> {

    return this.apiClient.requestWithHttpInfo<CreateStatementV2Response>({
      method: "POST",
      path: "/open_api/2/create/statement/",
      queryParams: [

      ],
      body: createStatementV2Request
    });
  }
}


