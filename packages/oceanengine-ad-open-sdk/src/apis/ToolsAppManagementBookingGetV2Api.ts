// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsAppManagementBookingGetV2AccountAssetQueryScope, ToolsAppManagementBookingGetV2CreateTime, ToolsAppManagementBookingGetV2Response, ToolsAppManagementBookingGetV2ScheduledPublishTime, ToolsAppManagementBookingGetV2SearchType, ToolsAppManagementBookingGetV2Status } from "../models";


export interface OpenApi2ToolsAppManagementBookingGetGetRequest {
  advertiserId: number;
  page?: number;
  pageSize?: number;
  searchKey?: string;
  searchType?: ToolsAppManagementBookingGetV2SearchType;
  status?: ToolsAppManagementBookingGetV2Status;
  scheduledPublishTime?: ToolsAppManagementBookingGetV2ScheduledPublishTime;
  createTime?: ToolsAppManagementBookingGetV2CreateTime;
  accountAssetQueryScope?: ToolsAppManagementBookingGetV2AccountAssetQueryScope;
}

export class ToolsAppManagementBookingGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsAppManagementBookingGetGet(request: OpenApi2ToolsAppManagementBookingGetGetRequest): Promise<ToolsAppManagementBookingGetV2Response> {
    const response = await this.openApi2ToolsAppManagementBookingGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsAppManagementBookingGetGetWithHttpInfo(request: OpenApi2ToolsAppManagementBookingGetGetRequest): Promise<ApiResponse<ToolsAppManagementBookingGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsAppManagementBookingGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsAppManagementBookingGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/app_management/booking/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "search_key", value: request.searchKey },
        { name: "search_type", value: request.searchType },
        { name: "status", value: request.status },
        { name: "scheduled_publish_time", value: request.scheduledPublishTime },
        { name: "create_time", value: request.createTime },
        { name: "account_asset_query_scope", value: request.accountAssetQueryScope }
      ]
    });
  }
}


