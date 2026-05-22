// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { WeixinOfficialAccountsUpgradeStatusGetResponseData } from "../models";

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
      path: "/weixin_official_accounts_upgrade_status/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


