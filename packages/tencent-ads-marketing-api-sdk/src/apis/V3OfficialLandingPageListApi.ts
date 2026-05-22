// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { OfficialLandingPageListGetResponseData } from "../models";

export interface V3OfficialLandingPageListApiGetRequest {
  accountId: number | string;
  page?: number;
  pageSize?: number;
  filtering?: unknown;
  fields?: unknown;
}


export class V3OfficialLandingPageListApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3OfficialLandingPageListApiGetRequest): Promise<OfficialLandingPageListGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3OfficialLandingPageListApiGetRequest): Promise<ApiResponse<OfficialLandingPageListGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<OfficialLandingPageListGetResponseData>({
      method: "GET",
      path: "/official_landing_page_list/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "filtering", value: request.filtering, collectionFormat: "multi" },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


