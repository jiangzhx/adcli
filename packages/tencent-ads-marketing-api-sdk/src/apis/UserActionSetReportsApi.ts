// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DateRange, UserActionSetReportsGetResponseData } from "../models";

export interface UserActionSetReportsApiGetRequest {
  accountId: number | string;
  userActionSetId: number | string;
  dateRange: DateRange;
  timeGranularity: string;
  aggregation?: string;
  fields?: unknown;
}


export class UserActionSetReportsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: UserActionSetReportsApiGetRequest): Promise<UserActionSetReportsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: UserActionSetReportsApiGetRequest): Promise<ApiResponse<UserActionSetReportsGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.userActionSetId == null) {
      throw new ApiException("Missing the required parameter 'userActionSetId' when calling get");
    }

    if (request.dateRange == null) {
      throw new ApiException("Missing the required parameter 'dateRange' when calling get");
    }

    if (request.timeGranularity == null) {
      throw new ApiException("Missing the required parameter 'timeGranularity' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<UserActionSetReportsGetResponseData>({
      method: "GET",
      path: "/user_action_set_reports/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "user_action_set_id", value: request.userActionSetId },
        { name: "date_range", value: request.dateRange },
        { name: "time_granularity", value: request.timeGranularity },
        { name: "aggregation", value: request.aggregation },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


