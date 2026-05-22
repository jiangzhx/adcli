// Generated from oceanengine/ad_open_sdk_go api/api_tools_app_management_share_account_list_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsAppManagementShareAccountListV2Response, ToolsAppManagementShareAccountListV2SearchType } from "../models/index";


export interface ToolsAppManagementShareAccountListV2ApiOpenApi2ToolsAppManagementShareAccountListGetRequest {
  organizationId?: number | string;
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

  async openApi2ToolsAppManagementShareAccountListGet(request: ToolsAppManagementShareAccountListV2ApiOpenApi2ToolsAppManagementShareAccountListGetRequest): Promise<ToolsAppManagementShareAccountListV2Response> {
    const response = await this.openApi2ToolsAppManagementShareAccountListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsAppManagementShareAccountListGetWithHttpInfo(request: ToolsAppManagementShareAccountListV2ApiOpenApi2ToolsAppManagementShareAccountListGetRequest): Promise<ApiResponse<ToolsAppManagementShareAccountListV2Response>> {

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


