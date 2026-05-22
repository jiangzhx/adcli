// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsAppManagementAppGetV2AccountAssetQueryScope, ToolsAppManagementAppGetV2CreateTime, ToolsAppManagementAppGetV2PublishTime, ToolsAppManagementAppGetV2Response, ToolsAppManagementAppGetV2SearchType, ToolsAppManagementAppGetV2Status } from "../models";


export class ToolsAppManagementAppGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsAppManagementAppGetGet(advertiserId: number, page: number, pageSize: number, searchKey: string, searchType: ToolsAppManagementAppGetV2SearchType, status: ToolsAppManagementAppGetV2Status, publishTime: ToolsAppManagementAppGetV2PublishTime, createTime: ToolsAppManagementAppGetV2CreateTime, accountAssetQueryScope: ToolsAppManagementAppGetV2AccountAssetQueryScope): Promise<ToolsAppManagementAppGetV2Response> {
    const response = await this.openApi2ToolsAppManagementAppGetGetWithHttpInfo(advertiserId, page, pageSize, searchKey, searchType, status, publishTime, createTime, accountAssetQueryScope);
    return response.data;
  }

  async openApi2ToolsAppManagementAppGetGetWithHttpInfo(advertiserId: number, page: number, pageSize: number, searchKey: string, searchType: ToolsAppManagementAppGetV2SearchType, status: ToolsAppManagementAppGetV2Status, publishTime: ToolsAppManagementAppGetV2PublishTime, createTime: ToolsAppManagementAppGetV2CreateTime, accountAssetQueryScope: ToolsAppManagementAppGetV2AccountAssetQueryScope): Promise<ApiResponse<ToolsAppManagementAppGetV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsAppManagementAppGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsAppManagementAppGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/app_management/app/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "search_key", value: searchKey },
        { name: "search_type", value: searchType },
        { name: "status", value: status },
        { name: "publish_time", value: publishTime },
        { name: "create_time", value: createTime },
        { name: "account_asset_query_scope", value: accountAssetQueryScope }
      ]
    });
  }
}


