// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_leads_call_record.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { LeadsCallRecordGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface LeadsCallRecordApiGetRequest {
  accountId: number | string;
  leadsId?: number | string;
  outerLeadsId?: string;
  requestId?: string;
  contactId?: string;
  fields?: unknown;
}


export class LeadsCallRecordApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: LeadsCallRecordApiGetRequest): Promise<LeadsCallRecordGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: LeadsCallRecordApiGetRequest): Promise<ApiResponse<LeadsCallRecordGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<LeadsCallRecordGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
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


