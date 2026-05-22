// Generated from oceanengine/ad_open_sdk_go api/api_create_statement_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { CreateStatementV2Request, CreateStatementV2Response } from "../models/index";


export interface CreateStatementV2ApiOpenApi2CreateStatementPostRequest {
  createStatementV2Request?: CreateStatementV2Request;
}

export class CreateStatementV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2CreateStatementPost(request: CreateStatementV2ApiOpenApi2CreateStatementPostRequest): Promise<CreateStatementV2Response> {
    const response = await this.openApi2CreateStatementPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2CreateStatementPostWithHttpInfo(request: CreateStatementV2ApiOpenApi2CreateStatementPostRequest): Promise<ApiResponse<CreateStatementV2Response>> {

    return this.apiClient.requestWithHttpInfo<CreateStatementV2Response>({
      method: "POST",
      path: "/open_api/2/create/statement/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.createStatementV2Request
    });
  }
}


