// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LeadsCallRecordGetResponseData } from "../models";

export interface V3LeadsCallRecordApiGetRequest {
  accountId: number | string;
  leadsId?: number | string;
  outerLeadsId?: string;
  requestId?: string;
  contactId?: string;
  fields?: unknown;
}


export class V3LeadsCallRecordApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3LeadsCallRecordApiGetRequest): Promise<LeadsCallRecordGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3LeadsCallRecordApiGetRequest): Promise<ApiResponse<LeadsCallRecordGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<LeadsCallRecordGetResponseData>({
      method: "GET",
      path: "/leads_call_record/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "leads_id", value: request.leadsId },
        { name: "outer_leads_id", value: request.outerLeadsId },
        { name: "request_id", value: request.requestId },
        { name: "contact_id", value: request.contactId },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


