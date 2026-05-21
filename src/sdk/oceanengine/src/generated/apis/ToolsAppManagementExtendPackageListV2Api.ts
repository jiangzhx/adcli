// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsAppManagementExtendPackageListV2Filtering, ToolsAppManagementExtendPackageListV2Response } from "../models";


export class ToolsAppManagementExtendPackageListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsAppManagementExtendPackageListGet(advertiserId: number, filtering: ToolsAppManagementExtendPackageListV2Filtering, packageId: string, page: number, pageSize: number): Promise<ToolsAppManagementExtendPackageListV2Response> {
    const response = await this.openApi2ToolsAppManagementExtendPackageListGetWithHttpInfo(advertiserId, filtering, packageId, page, pageSize);
    return response.data;
  }

  async openApi2ToolsAppManagementExtendPackageListGetWithHttpInfo(advertiserId: number, filtering: ToolsAppManagementExtendPackageListV2Filtering, packageId: string, page: number, pageSize: number): Promise<ApiResponse<ToolsAppManagementExtendPackageListV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsAppManagementExtendPackageListV2Response>({
      method: "GET",
      path: "/open_api/2/tools/app_management/extend_package/list/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "filtering", value: filtering },
        { name: "package_id", value: packageId },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


