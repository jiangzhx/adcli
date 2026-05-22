// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_official_landing_page_list.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { OfficialLandingPageListGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface OfficialLandingPageListApiGetRequest {
  accountId: number | string;
  page?: number;
  pageSize?: number;
  filtering?: unknown;
  fields?: unknown;
}


export class OfficialLandingPageListApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: OfficialLandingPageListApiGetRequest): Promise<OfficialLandingPageListGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: OfficialLandingPageListApiGetRequest): Promise<ApiResponse<OfficialLandingPageListGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<OfficialLandingPageListGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
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


