// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsAppManagementAppGetV2AccountAssetQueryScope, ToolsAppManagementAppGetV2CreateTime, ToolsAppManagementAppGetV2PublishTime, ToolsAppManagementAppGetV2Response, ToolsAppManagementAppGetV2SearchType, ToolsAppManagementAppGetV2Status } from "../models";


export interface OpenApi2ToolsAppManagementAppGetGetRequest {
  advertiserId: number | string;
  page?: number;
  pageSize?: number;
  searchKey?: string;
  searchType?: ToolsAppManagementAppGetV2SearchType;
  status?: ToolsAppManagementAppGetV2Status;
  publishTime?: ToolsAppManagementAppGetV2PublishTime;
  createTime?: ToolsAppManagementAppGetV2CreateTime;
  accountAssetQueryScope?: ToolsAppManagementAppGetV2AccountAssetQueryScope;
}

export class ToolsAppManagementAppGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsAppManagementAppGetGet(request: OpenApi2ToolsAppManagementAppGetGetRequest): Promise<ToolsAppManagementAppGetV2Response> {
    const response = await this.openApi2ToolsAppManagementAppGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsAppManagementAppGetGetWithHttpInfo(request: OpenApi2ToolsAppManagementAppGetGetRequest): Promise<ApiResponse<ToolsAppManagementAppGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsAppManagementAppGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsAppManagementAppGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/app_management/app/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "search_key", value: request.searchKey },
        { name: "search_type", value: request.searchType },
        { name: "status", value: request.status },
        { name: "publish_time", value: request.publishTime },
        { name: "create_time", value: request.createTime },
        { name: "account_asset_query_scope", value: request.accountAssetQueryScope }
      ]
    });
  }
}


