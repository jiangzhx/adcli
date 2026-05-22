// Generated from oceanengine/ad_open_sdk_go api/api_tools_app_management_industry_info_list_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsAppManagementIndustryInfoListV2AccountType, ToolsAppManagementIndustryInfoListV2Response } from "../models/index";


export interface ToolsAppManagementIndustryInfoListV2ApiOpenApi2ToolsAppManagementIndustryInfoListGetRequest {
  accountId: number | string;
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

  async openApi2ToolsAppManagementIndustryInfoListGet(request: ToolsAppManagementIndustryInfoListV2ApiOpenApi2ToolsAppManagementIndustryInfoListGetRequest): Promise<ToolsAppManagementIndustryInfoListV2Response> {
    const response = await this.openApi2ToolsAppManagementIndustryInfoListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsAppManagementIndustryInfoListGetWithHttpInfo(request: ToolsAppManagementIndustryInfoListV2ApiOpenApi2ToolsAppManagementIndustryInfoListGetRequest): Promise<ApiResponse<ToolsAppManagementIndustryInfoListV2Response>> {
    if (request.accountId == null) {
      throw new ApiException("accountId is required and must be specified");
    }

    if (request.accountId != null && Number(request.accountId) < 1) {
      throw new ApiException("accountId must be greater than 1");
    }

    if (request.accountType == null) {
      throw new ApiException("accountType is required and must be specified");
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


