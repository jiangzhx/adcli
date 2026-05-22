// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsAppManagementBookingGetV2AccountAssetQueryScope, ToolsAppManagementBookingGetV2CreateTime, ToolsAppManagementBookingGetV2Response, ToolsAppManagementBookingGetV2ScheduledPublishTime, ToolsAppManagementBookingGetV2SearchType, ToolsAppManagementBookingGetV2Status } from "../models";


export class ToolsAppManagementBookingGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsAppManagementBookingGetGet(advertiserId: number, page: number, pageSize: number, searchKey: string, searchType: ToolsAppManagementBookingGetV2SearchType, status: ToolsAppManagementBookingGetV2Status, scheduledPublishTime: ToolsAppManagementBookingGetV2ScheduledPublishTime, createTime: ToolsAppManagementBookingGetV2CreateTime, accountAssetQueryScope: ToolsAppManagementBookingGetV2AccountAssetQueryScope): Promise<ToolsAppManagementBookingGetV2Response> {
    const response = await this.openApi2ToolsAppManagementBookingGetGetWithHttpInfo(advertiserId, page, pageSize, searchKey, searchType, status, scheduledPublishTime, createTime, accountAssetQueryScope);
    return response.data;
  }

  async openApi2ToolsAppManagementBookingGetGetWithHttpInfo(advertiserId: number, page: number, pageSize: number, searchKey: string, searchType: ToolsAppManagementBookingGetV2SearchType, status: ToolsAppManagementBookingGetV2Status, scheduledPublishTime: ToolsAppManagementBookingGetV2ScheduledPublishTime, createTime: ToolsAppManagementBookingGetV2CreateTime, accountAssetQueryScope: ToolsAppManagementBookingGetV2AccountAssetQueryScope): Promise<ApiResponse<ToolsAppManagementBookingGetV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsAppManagementBookingGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsAppManagementBookingGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/app_management/booking/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "search_key", value: searchKey },
        { name: "search_type", value: searchType },
        { name: "status", value: status },
        { name: "scheduled_publish_time", value: scheduledPublishTime },
        { name: "create_time", value: createTime },
        { name: "account_asset_query_scope", value: accountAssetQueryScope }
      ]
    });
  }
}


