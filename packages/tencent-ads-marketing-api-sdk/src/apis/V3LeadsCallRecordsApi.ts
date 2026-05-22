// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LeadsCallRecordsGetResponseData } from "../models";

export interface V3LeadsCallRecordsApiGetRequest {
  accountId: number | string;
  pageSize: number;
  page: number;
  startDate: string;
  endDate: string;
  searchAfter?: string;
  fields?: unknown;
}


export class V3LeadsCallRecordsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3LeadsCallRecordsApiGetRequest): Promise<LeadsCallRecordsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3LeadsCallRecordsApiGetRequest): Promise<ApiResponse<LeadsCallRecordsGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.pageSize == null) {
      throw new ApiException("Missing the required parameter 'pageSize' when calling get");
    }

    if (request.page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling get");
    }

    if (request.startDate == null) {
      throw new ApiException("Missing the required parameter 'startDate' when calling get");
    }

    if (request.endDate == null) {
      throw new ApiException("Missing the required parameter 'endDate' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<LeadsCallRecordsGetResponseData>({
      method: "GET",
      path: "/leads_call_records/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "page_size", value: request.pageSize },
        { name: "page", value: request.page },
        { name: "start_date", value: request.startDate },
        { name: "end_date", value: request.endDate },
        { name: "search_after", value: request.searchAfter },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


