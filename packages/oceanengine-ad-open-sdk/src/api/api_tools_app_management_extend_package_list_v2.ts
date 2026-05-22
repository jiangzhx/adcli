// Generated from oceanengine/ad_open_sdk_go api/api_tools_app_management_extend_package_list_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsAppManagementExtendPackageListV2Filtering, ToolsAppManagementExtendPackageListV2Response } from "../models/index";


export interface ToolsAppManagementExtendPackageListV2ApiOpenApi2ToolsAppManagementExtendPackageListGetRequest {
  advertiserId?: number | string;
  filtering?: ToolsAppManagementExtendPackageListV2Filtering;
  packageId?: string;
  page?: number;
  pageSize?: number;
}

export class ToolsAppManagementExtendPackageListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsAppManagementExtendPackageListGet(request: ToolsAppManagementExtendPackageListV2ApiOpenApi2ToolsAppManagementExtendPackageListGetRequest): Promise<ToolsAppManagementExtendPackageListV2Response> {
    const response = await this.openApi2ToolsAppManagementExtendPackageListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsAppManagementExtendPackageListGetWithHttpInfo(request: ToolsAppManagementExtendPackageListV2ApiOpenApi2ToolsAppManagementExtendPackageListGetRequest): Promise<ApiResponse<ToolsAppManagementExtendPackageListV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsAppManagementExtendPackageListV2Response>({
      method: "GET",
      path: "/open_api/2/tools/app_management/extend_package/list/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "filtering", value: request.filtering },
        { name: "package_id", value: request.packageId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


