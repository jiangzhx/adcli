// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CreateProjectInvoiceV2Request, CreateProjectInvoiceV2Response } from "../models";


export class CreateProjectInvoiceV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2CreateProjectInvoicePost(createProjectInvoiceV2Request: CreateProjectInvoiceV2Request): Promise<CreateProjectInvoiceV2Response> {
    const response = await this.openApi2CreateProjectInvoicePostWithHttpInfo(createProjectInvoiceV2Request);
    return response.data;
  }

  async openApi2CreateProjectInvoicePostWithHttpInfo(createProjectInvoiceV2Request: CreateProjectInvoiceV2Request): Promise<ApiResponse<CreateProjectInvoiceV2Response>> {

    return this.apiClient.requestWithHttpInfo<CreateProjectInvoiceV2Response>({
      method: "POST",
      path: "/open_api/2/create/project_invoice/",
      queryParams: [

      ],
      body: createProjectInvoiceV2Request
    });
  }
}


