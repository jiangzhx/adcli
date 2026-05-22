// Generated from oceanengine/ad_open_sdk_go api/api_create_statement_invoice_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { CreateStatementInvoiceV2Request, CreateStatementInvoiceV2Response } from "../models/index";


export interface CreateStatementInvoiceV2ApiOpenApi2CreateStatementInvoicePostRequest {
  createStatementInvoiceV2Request?: CreateStatementInvoiceV2Request;
}

export class CreateStatementInvoiceV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2CreateStatementInvoicePost(request: CreateStatementInvoiceV2ApiOpenApi2CreateStatementInvoicePostRequest): Promise<CreateStatementInvoiceV2Response> {
    const response = await this.openApi2CreateStatementInvoicePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2CreateStatementInvoicePostWithHttpInfo(request: CreateStatementInvoiceV2ApiOpenApi2CreateStatementInvoicePostRequest): Promise<ApiResponse<CreateStatementInvoiceV2Response>> {

    return this.apiClient.requestWithHttpInfo<CreateStatementInvoiceV2Response>({
      method: "POST",
      path: "/open_api/2/create/statement_invoice/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.createStatementInvoiceV2Request
    });
  }
}


