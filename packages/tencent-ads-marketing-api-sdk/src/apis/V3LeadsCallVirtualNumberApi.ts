// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LeadsCallVirtualNumberGetResponseData } from "../models";

export interface V3LeadsCallVirtualNumberApiGetRequest {
  accountId: number | string;
  caller: string;
  callee: string;
  leadsId?: number | string;
  outerLeadsId?: string;
  requestId?: string;
  fields?: unknown;
}


export class V3LeadsCallVirtualNumberApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3LeadsCallVirtualNumberApiGetRequest): Promise<LeadsCallVirtualNumberGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3LeadsCallVirtualNumberApiGetRequest): Promise<ApiResponse<LeadsCallVirtualNumberGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.caller == null) {
      throw new ApiException("Missing the required parameter 'caller' when calling get");
    }

    if (request.callee == null) {
      throw new ApiException("Missing the required parameter 'callee' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<LeadsCallVirtualNumberGetResponseData>({
      method: "GET",
      path: "/leads_call_virtual_number/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "leads_id", value: request.leadsId },
        { name: "outer_leads_id", value: request.outerLeadsId },
        { name: "caller", value: request.caller },
        { name: "callee", value: request.callee },
        { name: "request_id", value: request.requestId },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


