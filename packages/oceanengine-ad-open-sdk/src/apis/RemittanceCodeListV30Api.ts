// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { RemittanceCodeListV30Response } from "../models";


export class RemittanceCodeListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30RemittanceCodeListGet(agentId: number, page: number, pageSize: number, remittanceCodeList: string[]): Promise<RemittanceCodeListV30Response> {
    const response = await this.openApiV30RemittanceCodeListGetWithHttpInfo(agentId, page, pageSize, remittanceCodeList);
    return response.data;
  }

  async openApiV30RemittanceCodeListGetWithHttpInfo(agentId: number, page: number, pageSize: number, remittanceCodeList: string[]): Promise<ApiResponse<RemittanceCodeListV30Response>> {
    if (agentId == null) {
      throw new ApiException("Missing the required parameter 'agentId' when calling openApiV30RemittanceCodeListGet");
    }
    return this.apiClient.requestWithHttpInfo<RemittanceCodeListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/remittance_code/list/",
      queryParams: [
        { name: "agent_id", value: agentId },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "remittance_code_list", value: remittanceCodeList, collectionFormat: "csv" }
      ]
    });
  }
}


