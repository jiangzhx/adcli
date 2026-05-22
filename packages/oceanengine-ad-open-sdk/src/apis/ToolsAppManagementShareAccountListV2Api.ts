// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsAppManagementShareAccountListV2Response, ToolsAppManagementShareAccountListV2SearchType } from "../models";


export interface OpenApi2ToolsAppManagementShareAccountListGetRequest {
  organizationId?: number;
  packageId?: string;
  page?: number;
  pageSize?: number;
  searchType?: ToolsAppManagementShareAccountListV2SearchType;
}

export class ToolsAppManagementShareAccountListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsAppManagementShareAccountListGet(request: OpenApi2ToolsAppManagementShareAccountListGetRequest): Promise<ToolsAppManagementShareAccountListV2Response> {
    const response = await this.openApi2ToolsAppManagementShareAccountListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsAppManagementShareAccountListGetWithHttpInfo(request: OpenApi2ToolsAppManagementShareAccountListGetRequest): Promise<ApiResponse<ToolsAppManagementShareAccountListV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsAppManagementShareAccountListV2Response>({
      method: "GET",
      path: "/open_api/2/tools/app_management/share_account/list/",
      queryParams: [
        { name: "organization_id", value: request.organizationId },
        { name: "package_id", value: request.packageId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "search_type", value: request.searchType }
      ]
    });
  }
}


