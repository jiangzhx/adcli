// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CreateProjectInvoiceV2Request, CreateProjectInvoiceV2Response } from "../models";


export interface OpenApi2CreateProjectInvoicePostRequest {
  createProjectInvoiceV2Request?: CreateProjectInvoiceV2Request;
}

export class CreateProjectInvoiceV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2CreateProjectInvoicePost(request: OpenApi2CreateProjectInvoicePostRequest): Promise<CreateProjectInvoiceV2Response> {
    const response = await this.openApi2CreateProjectInvoicePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2CreateProjectInvoicePostWithHttpInfo(request: OpenApi2CreateProjectInvoicePostRequest): Promise<ApiResponse<CreateProjectInvoiceV2Response>> {

    return this.apiClient.requestWithHttpInfo<CreateProjectInvoiceV2Response>({
      method: "POST",
      path: "/open_api/2/create/project_invoice/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.createProjectInvoiceV2Request
    });
  }
}


