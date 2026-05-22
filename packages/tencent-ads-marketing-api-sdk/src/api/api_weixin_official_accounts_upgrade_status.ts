// Generated from tencentad/marketing-api-go-sdk pkg/api/api_weixin_official_accounts_upgrade_status.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { WeixinOfficialAccountsUpgradeStatusGetResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface WeixinOfficialAccountsUpgradeStatusApiGetRequest {
  accountId: number | string;
  fields?: unknown;
}


export class WeixinOfficialAccountsUpgradeStatusApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: WeixinOfficialAccountsUpgradeStatusApiGetRequest): Promise<WeixinOfficialAccountsUpgradeStatusGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: WeixinOfficialAccountsUpgradeStatusApiGetRequest): Promise<ApiResponse<WeixinOfficialAccountsUpgradeStatusGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<WeixinOfficialAccountsUpgradeStatusGetResponseData>({
      method: "GET",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/weixin_official_accounts_upgrade_status/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


