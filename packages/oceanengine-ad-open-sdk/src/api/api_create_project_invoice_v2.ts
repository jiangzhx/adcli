// Generated from oceanengine/ad_open_sdk_go api/api_create_project_invoice_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { CreateProjectInvoiceV2Request, CreateProjectInvoiceV2Response } from "../models/index";


export interface CreateProjectInvoiceV2ApiOpenApi2CreateProjectInvoicePostRequest {
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

  async openApi2CreateProjectInvoicePost(request: CreateProjectInvoiceV2ApiOpenApi2CreateProjectInvoicePostRequest): Promise<CreateProjectInvoiceV2Response> {
    const response = await this.openApi2CreateProjectInvoicePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2CreateProjectInvoicePostWithHttpInfo(request: CreateProjectInvoiceV2ApiOpenApi2CreateProjectInvoicePostRequest): Promise<ApiResponse<CreateProjectInvoiceV2Response>> {

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


