// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AgencyGetResponseData } from "../models";

export interface AgencyApiGetRequest {
  fields: string[];
  page: number;
  pageSize: number;
  accountId?: number | string;
}


export class AgencyApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: AgencyApiGetRequest): Promise<AgencyGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: AgencyApiGetRequest): Promise<ApiResponse<AgencyGetResponseData>> {
    if (request.fields == null) {
      throw new ApiException("Missing the required parameter 'fields' when calling get");
    }

    if (request.page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling get");
    }

    if (request.pageSize == null) {
      throw new ApiException("Missing the required parameter 'pageSize' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<AgencyGetResponseData>({
      method: "GET",
      path: "/agency/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "fields", value: request.fields, collectionFormat: "multi" },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ],
      contentType: "text/plain"
    });
  }

}


