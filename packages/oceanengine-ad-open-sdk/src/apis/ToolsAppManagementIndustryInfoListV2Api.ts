// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsAppManagementIndustryInfoListV2AccountType, ToolsAppManagementIndustryInfoListV2Response } from "../models";


export class ToolsAppManagementIndustryInfoListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsAppManagementIndustryInfoListGet(accountId: number, accountType: ToolsAppManagementIndustryInfoListV2AccountType): Promise<ToolsAppManagementIndustryInfoListV2Response> {
    const response = await this.openApi2ToolsAppManagementIndustryInfoListGetWithHttpInfo(accountId, accountType);
    return response.data;
  }

  async openApi2ToolsAppManagementIndustryInfoListGetWithHttpInfo(accountId: number, accountType: ToolsAppManagementIndustryInfoListV2AccountType): Promise<ApiResponse<ToolsAppManagementIndustryInfoListV2Response>> {
    if (accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApi2ToolsAppManagementIndustryInfoListGet");
    }

    if (accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApi2ToolsAppManagementIndustryInfoListGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsAppManagementIndustryInfoListV2Response>({
      method: "GET",
      path: "/open_api/2/tools/app_management/industry_info/list/",
      queryParams: [
        { name: "account_id", value: accountId },
        { name: "account_type", value: accountType }
      ]
    });
  }
}


