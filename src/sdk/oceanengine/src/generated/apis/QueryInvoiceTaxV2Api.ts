// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { QueryInvoiceTaxV2Filtering, QueryInvoiceTaxV2Response } from "../models";


export class QueryInvoiceTaxV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2QueryInvoiceTaxGet(agentId: number, filtering: QueryInvoiceTaxV2Filtering): Promise<QueryInvoiceTaxV2Response> {
    const response = await this.openApi2QueryInvoiceTaxGetWithHttpInfo(agentId, filtering);
    return response.data;
  }

  async openApi2QueryInvoiceTaxGetWithHttpInfo(agentId: number, filtering: QueryInvoiceTaxV2Filtering): Promise<ApiResponse<QueryInvoiceTaxV2Response>> {
    if (agentId == null) {
      throw new ApiException("Missing the required parameter 'agentId' when calling openApi2QueryInvoiceTaxGet");
    }

    if (filtering == null) {
      throw new ApiException("Missing the required parameter 'filtering' when calling openApi2QueryInvoiceTaxGet");
    }
    return this.apiClient.requestWithHttpInfo<QueryInvoiceTaxV2Response>({
      method: "GET",
      path: "/open_api/2/query/invoice_tax/",
      queryParams: [
        { name: "agent_id", value: agentId },
        { name: "filtering", value: filtering }
      ]
    });
  }
}


