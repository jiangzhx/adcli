// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsAppManagementIndustryInfoListV2AccountType, ToolsAppManagementIndustryInfoListV2Response } from "../models";


export interface OpenApi2ToolsAppManagementIndustryInfoListGetRequest {
  accountId: number;
  accountType: ToolsAppManagementIndustryInfoListV2AccountType;
}

export class ToolsAppManagementIndustryInfoListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsAppManagementIndustryInfoListGet(request: OpenApi2ToolsAppManagementIndustryInfoListGetRequest): Promise<ToolsAppManagementIndustryInfoListV2Response> {
    const response = await this.openApi2ToolsAppManagementIndustryInfoListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsAppManagementIndustryInfoListGetWithHttpInfo(request: OpenApi2ToolsAppManagementIndustryInfoListGetRequest): Promise<ApiResponse<ToolsAppManagementIndustryInfoListV2Response>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApi2ToolsAppManagementIndustryInfoListGet");
    }

    if (request.accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApi2ToolsAppManagementIndustryInfoListGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsAppManagementIndustryInfoListV2Response>({
      method: "GET",
      path: "/open_api/2/tools/app_management/industry_info/list/",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "account_type", value: request.accountType }
      ]
    });
  }
}


