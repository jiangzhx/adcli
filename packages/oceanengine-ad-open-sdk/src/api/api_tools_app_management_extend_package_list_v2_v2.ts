// Generated from oceanengine/ad_open_sdk_go api/api_tools_app_management_extend_package_list_v2_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsAppManagementExtendPackageListV2V2AccountType, ToolsAppManagementExtendPackageListV2V2Filtering, ToolsAppManagementExtendPackageListV2V2Response } from "../models/index";


export interface ToolsAppManagementExtendPackageListV2V2ApiOpenApi2ToolsAppManagementExtendPackageListV2GetRequest {
  accountId: number | string;
  accountType: ToolsAppManagementExtendPackageListV2V2AccountType;
  packageId: string;
  page?: number;
  pageSize?: number;
  filtering?: ToolsAppManagementExtendPackageListV2V2Filtering;
}

export class ToolsAppManagementExtendPackageListV2V2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsAppManagementExtendPackageListV2Get(request: ToolsAppManagementExtendPackageListV2V2ApiOpenApi2ToolsAppManagementExtendPackageListV2GetRequest): Promise<ToolsAppManagementExtendPackageListV2V2Response> {
    const response = await this.openApi2ToolsAppManagementExtendPackageListV2GetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsAppManagementExtendPackageListV2GetWithHttpInfo(request: ToolsAppManagementExtendPackageListV2V2ApiOpenApi2ToolsAppManagementExtendPackageListV2GetRequest): Promise<ApiResponse<ToolsAppManagementExtendPackageListV2V2Response>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApi2ToolsAppManagementExtendPackageListV2Get");
    }

    if (request.accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApi2ToolsAppManagementExtendPackageListV2Get");
    }

    if (request.packageId == null) {
      throw new ApiException("Missing the required parameter 'packageId' when calling openApi2ToolsAppManagementExtendPackageListV2Get");
    }
    return this.apiClient.requestWithHttpInfo<ToolsAppManagementExtendPackageListV2V2Response>({
      method: "GET",
      path: "/open_api/2/tools/app_management/extend_package/list_v2/",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "account_type", value: request.accountType },
        { name: "package_id", value: request.packageId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "filtering", value: request.filtering }
      ]
    });
  }
}


