// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsAppManagementBookingRecordsGetV2CreateTime, ToolsAppManagementBookingRecordsGetV2HostType, ToolsAppManagementBookingRecordsGetV2Response } from "../models";


export class ToolsAppManagementBookingRecordsGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsAppManagementBookingRecordsGetGet(advertiserId: number, packageId: string, hostType: ToolsAppManagementBookingRecordsGetV2HostType, page: number, pageSize: number, createTime: ToolsAppManagementBookingRecordsGetV2CreateTime): Promise<ToolsAppManagementBookingRecordsGetV2Response> {
    const response = await this.openApi2ToolsAppManagementBookingRecordsGetGetWithHttpInfo(advertiserId, packageId, hostType, page, pageSize, createTime);
    return response.data;
  }

  async openApi2ToolsAppManagementBookingRecordsGetGetWithHttpInfo(advertiserId: number, packageId: string, hostType: ToolsAppManagementBookingRecordsGetV2HostType, page: number, pageSize: number, createTime: ToolsAppManagementBookingRecordsGetV2CreateTime): Promise<ApiResponse<ToolsAppManagementBookingRecordsGetV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsAppManagementBookingRecordsGetGet");
    }

    if (packageId == null) {
      throw new ApiException("Missing the required parameter 'packageId' when calling openApi2ToolsAppManagementBookingRecordsGetGet");
    }

    if (hostType == null) {
      throw new ApiException("Missing the required parameter 'hostType' when calling openApi2ToolsAppManagementBookingRecordsGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsAppManagementBookingRecordsGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/app_management/booking_records/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "package_id", value: packageId },
        { name: "host_type", value: hostType },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "create_time", value: createTime }
      ]
    });
  }
}


