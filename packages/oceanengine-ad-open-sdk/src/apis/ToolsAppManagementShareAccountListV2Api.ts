// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsAppManagementShareAccountListV2Response, ToolsAppManagementShareAccountListV2SearchType } from "../models";


export class ToolsAppManagementShareAccountListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsAppManagementShareAccountListGet(organizationId: number, packageId: string, page: number, pageSize: number, searchType: ToolsAppManagementShareAccountListV2SearchType): Promise<ToolsAppManagementShareAccountListV2Response> {
    const response = await this.openApi2ToolsAppManagementShareAccountListGetWithHttpInfo(organizationId, packageId, page, pageSize, searchType);
    return response.data;
  }

  async openApi2ToolsAppManagementShareAccountListGetWithHttpInfo(organizationId: number, packageId: string, page: number, pageSize: number, searchType: ToolsAppManagementShareAccountListV2SearchType): Promise<ApiResponse<ToolsAppManagementShareAccountListV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsAppManagementShareAccountListV2Response>({
      method: "GET",
      path: "/open_api/2/tools/app_management/share_account/list/",
      queryParams: [
        { name: "organization_id", value: organizationId },
        { name: "package_id", value: packageId },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "search_type", value: searchType }
      ]
    });
  }
}


