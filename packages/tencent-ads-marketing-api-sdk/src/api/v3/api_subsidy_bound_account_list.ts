// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_subsidy_bound_account_list.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { SubsidyBoundAccountListGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface SubsidyBoundAccountListApiGetRequest {
  accountId: number | string;
  page: number;
  pageSize: number;
  fields?: unknown;
}


export class SubsidyBoundAccountListApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: SubsidyBoundAccountListApiGetRequest): Promise<SubsidyBoundAccountListGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: SubsidyBoundAccountListApiGetRequest): Promise<ApiResponse<SubsidyBoundAccountListGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling get");
    }

    if (request.pageSize == null) {
      throw new ApiException("Missing the required parameter 'pageSize' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<SubsidyBoundAccountListGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/subsidy_bound_account_list/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


