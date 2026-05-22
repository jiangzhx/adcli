// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsAppManagementExtendPackageListV2Filtering, ToolsAppManagementExtendPackageListV2Response } from "../models";


export interface OpenApi2ToolsAppManagementExtendPackageListGetRequest {
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

  async openApi2ToolsAppManagementExtendPackageListGet(request: OpenApi2ToolsAppManagementExtendPackageListGetRequest): Promise<ToolsAppManagementExtendPackageListV2Response> {
    const response = await this.openApi2ToolsAppManagementExtendPackageListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsAppManagementExtendPackageListGetWithHttpInfo(request: OpenApi2ToolsAppManagementExtendPackageListGetRequest): Promise<ApiResponse<ToolsAppManagementExtendPackageListV2Response>> {

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


