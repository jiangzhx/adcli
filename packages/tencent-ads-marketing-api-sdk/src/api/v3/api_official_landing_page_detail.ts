// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_official_landing_page_detail.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { OfficialLandingPageDetailGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface OfficialLandingPageDetailApiGetRequest {
  accountId: number | string;
  pageId: number | string;
  protoVersion?: number;
  fields?: unknown;
}


export class OfficialLandingPageDetailApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: OfficialLandingPageDetailApiGetRequest): Promise<OfficialLandingPageDetailGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: OfficialLandingPageDetailApiGetRequest): Promise<ApiResponse<OfficialLandingPageDetailGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.pageId == null) {
      throw new ApiException("Missing the required parameter 'pageId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<OfficialLandingPageDetailGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
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


