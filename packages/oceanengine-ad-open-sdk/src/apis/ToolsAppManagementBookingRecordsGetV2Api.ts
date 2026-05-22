// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsAppManagementBookingRecordsGetV2CreateTime, ToolsAppManagementBookingRecordsGetV2HostType, ToolsAppManagementBookingRecordsGetV2Response } from "../models";


export interface OpenApi2ToolsAppManagementBookingRecordsGetGetRequest {
  advertiserId: number;
  packageId: string;
  hostType: ToolsAppManagementBookingRecordsGetV2HostType;
  page?: number;
  pageSize?: number;
  createTime?: ToolsAppManagementBookingRecordsGetV2CreateTime;
}

export class ToolsAppManagementBookingRecordsGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsAppManagementBookingRecordsGetGet(request: OpenApi2ToolsAppManagementBookingRecordsGetGetRequest): Promise<ToolsAppManagementBookingRecordsGetV2Response> {
    const response = await this.openApi2ToolsAppManagementBookingRecordsGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsAppManagementBookingRecordsGetGetWithHttpInfo(request: OpenApi2ToolsAppManagementBookingRecordsGetGetRequest): Promise<ApiResponse<ToolsAppManagementBookingRecordsGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsAppManagementBookingRecordsGetGet");
    }

    if (request.packageId == null) {
      throw new ApiException("Missing the required parameter 'packageId' when calling openApi2ToolsAppManagementBookingRecordsGetGet");
    }

    if (request.hostType == null) {
      throw new ApiException("Missing the required parameter 'hostType' when calling openApi2ToolsAppManagementBookingRecordsGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsAppManagementBookingRecordsGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/app_management/booking_records/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "package_id", value: request.packageId },
        { name: "host_type", value: request.hostType },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "create_time", value: request.createTime }
      ]
    });
  }
}


