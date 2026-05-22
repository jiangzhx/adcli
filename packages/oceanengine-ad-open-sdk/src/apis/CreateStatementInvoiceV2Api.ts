// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CreateStatementInvoiceV2Request, CreateStatementInvoiceV2Response } from "../models";


export class CreateStatementInvoiceV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2CreateStatementInvoicePost(createStatementInvoiceV2Request: CreateStatementInvoiceV2Request): Promise<CreateStatementInvoiceV2Response> {
    const response = await this.openApi2CreateStatementInvoicePostWithHttpInfo(createStatementInvoiceV2Request);
    return response.data;
  }

  async openApi2CreateStatementInvoicePostWithHttpInfo(createStatementInvoiceV2Request: CreateStatementInvoiceV2Request): Promise<ApiResponse<CreateStatementInvoiceV2Response>> {

    return this.apiClient.requestWithHttpInfo<CreateStatementInvoiceV2Response>({
      method: "POST",
      path: "/open_api/2/create/statement_invoice/",
      queryParams: [

      ],
      body: createStatementInvoiceV2Request
    });
  }
}


