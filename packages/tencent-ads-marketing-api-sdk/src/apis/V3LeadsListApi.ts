// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LeadsListGetResponseData, TimeRange } from "../models";

export interface V3LeadsListApiGetRequest {
  accountId: number | string;
  timeRange: TimeRange;
  page?: number;
  pageSize?: number;
  lastSearchAfterValues?: unknown;
  fields?: unknown;
}


export class V3LeadsListApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3LeadsListApiGetRequest): Promise<LeadsListGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3LeadsListApiGetRequest): Promise<ApiResponse<LeadsListGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.timeRange == null) {
      throw new ApiException("Missing the required parameter 'timeRange' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<LeadsListGetResponseData>({
      method: "GET",
      path: "/leads_list/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "time_range", value: request.timeRange },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "last_search_after_values", value: request.lastSearchAfterValues, collectionFormat: "multi" },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


