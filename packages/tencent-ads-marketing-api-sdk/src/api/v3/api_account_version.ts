// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_account_version.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AccountVersionGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface AccountVersionApiGetRequest {
  accountId: number | string;
  fields?: unknown;
}


export class AccountVersionApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: AccountVersionApiGetRequest): Promise<AccountVersionGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: AccountVersionApiGetRequest): Promise<ApiResponse<AccountVersionGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<AccountVersionGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/account_version/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


