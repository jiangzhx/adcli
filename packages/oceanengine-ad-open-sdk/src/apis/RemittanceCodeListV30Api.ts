// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { RemittanceCodeListV30Response } from "../models";


export interface OpenApiV30RemittanceCodeListGetRequest {
  agentId: number;
  page?: number;
  pageSize?: number;
  remittanceCodeList?: string[];
}

export class RemittanceCodeListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30RemittanceCodeListGet(request: OpenApiV30RemittanceCodeListGetRequest): Promise<RemittanceCodeListV30Response> {
    const response = await this.openApiV30RemittanceCodeListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30RemittanceCodeListGetWithHttpInfo(request: OpenApiV30RemittanceCodeListGetRequest): Promise<ApiResponse<RemittanceCodeListV30Response>> {
    if (request.agentId == null) {
      throw new ApiException("Missing the required parameter 'agentId' when calling openApiV30RemittanceCodeListGet");
    }
    return this.apiClient.requestWithHttpInfo<RemittanceCodeListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/remittance_code/list/",
      queryParams: [
        { name: "agent_id", value: request.agentId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "remittance_code_list", value: request.remittanceCodeList, collectionFormat: "csv" }
      ]
    });
  }
}


