// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AgencyRealtimeCostGetResponseData } from "../models";

export interface V3AgencyRealtimeCostApiGetRequest {
  accountId: number | string;
  fields?: unknown;
}


export class V3AgencyRealtimeCostApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3AgencyRealtimeCostApiGetRequest): Promise<AgencyRealtimeCostGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3AgencyRealtimeCostApiGetRequest): Promise<ApiResponse<AgencyRealtimeCostGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<AgencyRealtimeCostGetResponseData>({
      method: "GET",
      path: "/agency_realtime_cost/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


