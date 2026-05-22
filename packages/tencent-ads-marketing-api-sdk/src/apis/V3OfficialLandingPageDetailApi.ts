// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { OfficialLandingPageDetailGetResponseData } from "../models";

export interface V3OfficialLandingPageDetailApiGetRequest {
  accountId: number | string;
  pageId: number | string;
  protoVersion?: number;
  fields?: unknown;
}


export class V3OfficialLandingPageDetailApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3OfficialLandingPageDetailApiGetRequest): Promise<OfficialLandingPageDetailGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3OfficialLandingPageDetailApiGetRequest): Promise<ApiResponse<OfficialLandingPageDetailGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.pageId == null) {
      throw new ApiException("Missing the required parameter 'pageId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<OfficialLandingPageDetailGetResponseData>({
      method: "GET",
      path: "/official_landing_page_detail/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "page_id", value: request.pageId },
        { name: "proto_version", value: request.protoVersion },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


